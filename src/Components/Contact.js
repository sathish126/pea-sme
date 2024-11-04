const Contact = () => (
  <section id="contact" className="min-h-screen flex items-center bg-gray-100 py-20 px-6">
    <div className="container mx-auto text-center">
      <h2 className="text-3xl font-bold mb-8">Contact Us</h2>
      <p className="text-lg mb-12">
        Fill out the form below to reach out to us.
      </p>

      <form className="max-w-lg mx-auto bg-white p-8 rounded-lg shadow-lg">
        {/* Name Field */}
        <div className="mb-6">
          <label className="block text-left text-gray-700 font-medium mb-2" htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            placeholder="Your Name"
            className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
          />
        </div>

        {/* Email Field */}
        <div className="mb-6">
          <label className="block text-left text-gray-700 font-medium mb-2" htmlFor="email">Email ID</label>
          <input
            type="email"
            id="email"
            placeholder="Your Email"
            className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
          />
        </div>

        {/* Mobile Number Field */}
        <div className="mb-6">
          <label className="block text-left text-gray-700 font-medium mb-2" htmlFor="mobile">Mobile Number</label>
          <input
            type="tel"
            id="mobile"
            placeholder="Your Mobile Number"
            className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
          />
        </div>

        {/* Message Field */}
        <div className="mb-6">
          <label className="block text-left text-gray-700 font-medium mb-2" htmlFor="message">Message</label>
          <textarea
            id="message"
            placeholder="Your Message"
            rows="4"
            className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
          ></textarea>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition duration-300"
        >
          Send Message
        </button>
      </form>
    </div>
  </section>
);

export default Contact;
