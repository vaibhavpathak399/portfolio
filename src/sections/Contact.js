export default function Contact() {
  return (
    <section id="contact" className="py-24 px-6 bg-gray-950">
      <div className="max-w-4xl mx-auto text-center">

        <h2 className="text-4xl font-bold mb-6">
          Let’s Connect
        </h2>

        <p className="text-gray-400 mb-12">
          Have a project in mind? Let’s work together.
        </p>

        <form
          action="https://formspree.io/f/mqedavkd"
          method="POST"
          className="max-w-xl mx-auto space-y-6"
        >
          <input
            className="w-full px-4 py-3 bg-black border border-gray-700 rounded-xl"
            placeholder="Your Name"
            name="name"
            required
          />
          <input
            className="w-full px-4 py-3 bg-black border border-gray-700 rounded-xl"
            placeholder="Email"
            name="email"
            required
          />
          <textarea
            className="w-full px-4 py-3 bg-black border border-gray-700 rounded-xl"
            rows="4"
            placeholder="Message"
            name="message"
            required
          />
          <button className="w-full bg-blue-600 py-3 rounded-xl font-semibold hover:bg-blue-700 transition">
            Send Message
          </button>
        </form>

      </div>
    </section>
  );
}
