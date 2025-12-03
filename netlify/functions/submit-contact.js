// Example Netlify Function to handle contact submissions.
// This is a simple template - replace with SendGrid/Mailgun logic as needed.

exports.handler = async function(event, context) {
  if (event.httpMethod !== 'POST') {
    return { statusCode: 405, body: 'Method Not Allowed' };
  }

  // Netlify form submissions when using `fetch` will POST JSON.
  // If the form posts as form-encoded, adjust parsing accordingly.
  let payload;
  try {
    payload = JSON.parse(event.body);
  } catch (e) {
    // fallback for form-encoded (simple)
    payload = event.body;
  }

  // TODO: Send email using an email provider here, e.g., SendGrid.
  console.log('Received contact submission:', payload);

  return {
    statusCode: 200,
    body: JSON.stringify({ ok: true })
  };
};
