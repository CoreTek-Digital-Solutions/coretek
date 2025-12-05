// app/api/contact/route.js
import nodemailer from "nodemailer";

const {
  SMTP_HOST,
  SMTP_PORT,
  SMTP_SECURE,
  SMTP_USER,
  SMTP_PASS,
  CONTACT_TO_EMAIL,
  ODOO_URL,
  ODOO_DB,
  ODOO_USER,
  ODOO_PASS,
} = process.env;

// small helper to return JSON consistently
function json(data, init = {}) {
  return new Response(JSON.stringify(data), {
    headers: { "Content-Type": "application/json", ...(init.headers || {}) },
    status: init.status || 200,
  });
}

export async function POST(req) {
  try {
    const body = await req.json().catch(() => null);
    const name = body?.name?.trim?.() || "";
    const email = body?.email?.trim?.() || "";
    const summary = body?.summary?.trim?.() || "";

    // Basic validation
    if (!name || !email || !summary) {
      return json(
        { ok: false, error: "Missing fields: name, email and summary are required." },
        { status: 400 }
      );
    }

    // 1) Send email via SMTP (nodemailer)
    // create transporter
    const transporter = nodemailer.createTransport({
      host: SMTP_HOST,
      port: Number(SMTP_PORT || 587),
      secure: String(SMTP_SECURE) === "true" || false,
      auth: {
        user: SMTP_USER,
        pass: SMTP_PASS,
      },
    });

    const mailOptions = {
      from: `"Website Contact" <${SMTP_USER}>`,
      to: CONTACT_TO_EMAIL,
      subject: `New contact request from ${name} (${email})`,
      text: `You received a contact request:\n\nName: ${name}\nEmail: ${email}\n\nSummary:\n${summary}`,
      html: `<p>You received a contact request:</p>
             <ul>
               <li><strong>Name:</strong> ${escapeHtml(name)}</li>
               <li><strong>Email:</strong> ${escapeHtml(email)}</li>
             </ul>
             <p><strong>Summary</strong></p>
             <pre style="white-space:pre-wrap;">${escapeHtml(summary)}</pre>`,
    };

    // send mail (await)
    try {
      await transporter.sendMail(mailOptions);
    } catch (err) {
      console.error("SMTP sendMail error:", err);
      // continue: we still attempt to create the Odoo lead. But return an informative response.
      // You may choose to return here if email is critical.
    }

    // 2) Create a lead in Odoo via JSON-RPC
    // Authenticate to Odoo (session not required if we use uid+password in execute_kw args)
    // Step A: authenticate and get uid
    if (!ODOO_URL || !ODOO_DB || !ODOO_USER || !ODOO_PASS) {
      console.warn("Odoo env missing - skipping lead creation.");
      return json({ ok: true, message: "Email sent (or attempted). Odoo not configured." });
    }

    // Authenticate (web/session/authenticate)
    const authRes = await fetch(`${ODOO_URL.replace(/\/$/, "")}/web/session/authenticate`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        jsonrpc: "2.0",
        params: { db: ODOO_DB, login: ODOO_USER, password: ODOO_PASS },
      }),
    });

    const authJson = await authRes.json().catch(() => null);
    const uid = authJson?.result?.uid;

    if (!uid) {
      console.error("Odoo auth failed:", authJson);
      return json(
        { ok: false, error: "Failed to authenticate to Odoo. Check ODOO_* env variables." },
        { status: 500 }
      );
    }

    // Now call object.execute_kw to create a crm.lead (model fields can be adjusted)
    const createPayload = {
      jsonrpc: "2.0",
      method: "call",
      params: {
        service: "object",
        method: "execute_kw",
        args: [
          ODOO_DB,
          uid,
          ODOO_PASS,
          "crm.lead",
          "create",
          [
            {
              name: `${name} — website contact`,
              partner_name: name,
              email_from: email,
              description: `Website contact form:\n\n${summary}`,
              type: "lead",
              // add custom fields here, e.g. x_source: 'website'
            },
          ],
        ],
      },
      id: new Date().getTime(),
    };

    const createRes = await fetch(`${ODOO_URL.replace(/\/$/, "")}/jsonrpc`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(createPayload),
    });

    const createJson = await createRes.json().catch(() => null);

    if (!createJson || createJson.error) {
      console.error("Odoo create error:", createJson || "no response");
      return json(
        { ok: true, message: "Email sent (or attempted). Odoo lead creation failed." },
        { status: 200 }
      );
    }

    // success
    return json({ ok: true, message: "Request received. We will be in touch within 1 business day." });
  } catch (err) {
    console.error("Contact API error:", err);
    return json({ ok: false, error: "Server error" }, { status: 500 });
  }
}

// simple escape for HTML email body
function escapeHtml(str = "") {
  return str
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}
