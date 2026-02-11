export default function Contact() {
  return (
    <section id="contact" className="py-24 px-6 bg-gray-950">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-6">
          Let’s <span className="text-blue-500">Connect</span>
        </h2>

        <p className="text-gray-400 mb-10">
          Have a project or idea? Let’s talk.
        </p>

        <form
          action="https://formspree.io/f/mqedavkd"
          method="POST"
          className="max-w-xl mx-auto grid gap-5"
        >
          <input
            className="px-4 py-3 bg-black border border-white/10 rounded-lg"
            placeholder="Your Name"
            name="name"
            required
          />
          <input
            className="px-4 py-3 bg-black border border-white/10 rounded-lg"
            placeholder="Email"
            name="email"
            required
          />
          <textarea
            className="px-4 py-3 bg-black border border-white/10 rounded-lg"
            rows="4"
            placeholder="Message"
            name="message"
            required
          />
          <button className="bg-blue-600 py-3 rounded-lg font-semibold hover:bg-blue-700 transition">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}
