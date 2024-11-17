const About = () => (
  <section
    id="about"
    className="min-h-screen flex flex-col items-center justify-center py-12 px-4 md:px-8 lg:px-16 slideshow-bg"
  >
    <div className="container mx-auto text-center bg-blue-100 bg-opacity-90 p-6 md:p-10 rounded-lg shadow-lg">
      <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-serif font-extrabold tracking-wide text-gray-800 mb-6">
        <span className="uppercase">PRODOTHON 25</span>
      </h1>
      <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-medium text-gray-700">
        Department of Production Engineering
      </p>
      <p className="text-base sm:text-lg md:text-xl lg:text-2xl font-light text-gray-600 mt-4">
        PSG College of Technology, Coimbatore
      </p>
      {/* Register Button */}
      <div className="mt-8">
        <a
          href="#register"
          className="px-8 py-3 border-2 border-blue-600 text-blue-600 text-lg md:text-xl font-semibold rounded-lg hover:text-white hover:bg-blue-600 transition duration-300 ease-in-out"
        >
          Register Now
        </a>
      </div>
    </div>
  </section>
);

export default About;
