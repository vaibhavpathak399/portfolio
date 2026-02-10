export default function Contact() {
  return (
    <section className="py-20 bg-gray-900 text-white px-6">
      <div className="max-w-4xl mx-auto text-center">

        <h2 className="text-4xl font-bold mb-6">
          Contact <span className="text-blue-500">Me</span>
        </h2>

        <p className="text-gray-400 mb-10">
          Have a project in mind or want to work together?
          Feel free to reach out.
        </p>

        <form
          action="https://formspree.io/f/mqedavkd"
          method="POST"
          className="grid gap-6 max-w-xl mx-auto"
        >
            
          <input
            type="text"
            name="name"
            placeholder="vaibhav pathak"
            required
            className="px-4 py-3 rounded-lg bg-black border border-gray-700"
          />

          <input
            type="email"
            name="email"
            placeholder="Your Email"
            required
            className="px-4 py-3 rounded-lg bg-black border border-gray-700"
          />

          <textarea
            name="message"
            rows="5"
            placeholder="Tell me about your project..."
            required
            className="px-4 py-3 rounded-lg bg-black border border-gray-700"
          ></textarea>

          <button
            type="submit"
            className="bg-blue-600 py-3 rounded-lg hover:bg-blue-700 transition"
          >
            Send Message
          </button>
        </form>

      </div>
    </section>
  );
}
