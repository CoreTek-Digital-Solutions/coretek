export default function ContactForm(){
  return (
    <div className="max-w-3xl mx-auto bg-white rounded-lg shadow p-8 dark:bg-gray-900">
      <h3 className="text-xl font-semibold dark:text-white">Let's talk about your project</h3>
      <p className="text-sm text-gray-600 mt-2 dark:text-white">Tell us a bit about your needs and we'll reply within 1 business day.</p>
      <form name="contact" method="POST" data-netlify="true" netlify-honeypot="bot-field" className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
        <input type="hidden" name="form-name" value="contact" />
        <p className="hidden"><label>Don't fill this out if you're human: <input name="bot-field" /></label></p>

        <input name="name" className="p-3 border rounded dark:text-white" placeholder="Full name" required />
        <input name="email" type="email" className="p-3 border rounded dark:text-white" placeholder="Company email" required />
        <input name="company" className="p-3 border rounded md:col-span-2 dark:text-white" placeholder="Company / project name" />
        <textarea name="message" className="p-3 border rounded md:col-span-2 dark:text-white" rows="4" placeholder="Brief project description"></textarea>

        <div className="md:col-span-2 flex items-center justify-between">
          <div className="text-sm text-gray-500 dark:text-white">Or email us at <a href="mailto:hello@coretek.digital" className="text-coreBlue">hello@coretek.digital</a></div>
          <button type="submit" className="px-5 py-3 rounded bg-gradient-to-r from-coreBlue to-digitalTeal text-white">Send message</button>
        </div>
      </form>
    </div>
  )
}
