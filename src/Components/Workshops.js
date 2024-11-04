const Workshops = () => (
  <section id="workshops" className="min-h-screen flex items-center bg-gray-100 py-20 px-6">
    <div className="container mx-auto text-center">
      <h2 className="text-3xl font-bold mb-8">Workshops</h2>
      <p className="text-lg mb-12">
        Information on workshops provided by the organization.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Workshop 1 */}
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <img 
            src="path/to/workshop1-poster.jpg" 
            alt="Workshop 1 Poster" 
            className="w-full h-48 object-cover rounded-md mb-4"
          />
          <h3 className="text-2xl font-semibold mb-2">Workshop Title 1</h3>
          <p className="text-gray-700 mb-4">Brief description of the first workshop goes here.</p>
          <div className="text-left">
            <p className="text-sm text-gray-600"><strong>Date:</strong> March 12, 2024</p>
            <p className="text-sm text-gray-600"><strong>Time:</strong> 1:00 PM - 4:00 PM</p>
            <p className="text-sm text-gray-600"><strong>Location:</strong> Room 101, Building C</p>
          </div>
          <button className="mt-4 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition duration-300">
            Register
          </button>
        </div>

        {/* Workshop 2 */}
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <img 
            src="path/to/workshop2-poster.jpg" 
            alt="Workshop 2 Poster" 
            className="w-full h-48 object-cover rounded-md mb-4"
          />
          <h3 className="text-2xl font-semibold mb-2">Workshop Title 2</h3>
          <p className="text-gray-700 mb-4">Brief description of the second workshop goes here.</p>
          <div className="text-left">
            <p className="text-sm text-gray-600"><strong>Date:</strong> April 5, 2024</p>
            <p className="text-sm text-gray-600"><strong>Time:</strong> 10:00 AM - 1:00 PM</p>
            <p className="text-sm text-gray-600"><strong>Location:</strong> Lab A, Building D</p>
          </div>
          <button className="mt-4 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition duration-300">
            Register
          </button>
        </div>

      </div>
    </div>
  </section>
);

export default Workshops;
