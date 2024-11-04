const Events = () => (
  <section id="events" className="min-h-screen flex items-center bg-white py-20 px-6">
    <div className="container mx-auto text-center">
      <h2 className="text-3xl font-bold mb-8">Events</h2>
      <p className="text-lg mb-12">
        Details about upcoming events and activities.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols- gap-8">
        {/* Event 1 */}
        <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
          <img 
            src="path/to/event1-poster.jpg" 
            alt="Event 1 Poster" 
            className="w-full h-48 object-cover rounded-md mb-4"
          />
          <h3 className="text-2xl font-semibold mb-2">Event Title 1</h3>
          <p className="text-gray-700 mb-4">Brief description of the event goes here.</p>
          <div className="text-left">
            <p className="text-sm text-gray-600"><strong>Date:</strong> January 1, 2024</p>
            <p className="text-sm text-gray-600"><strong>Time:</strong> 10:00 AM - 2:00 PM</p>
            <p className="text-sm text-gray-600"><strong>Place:</strong> Main Hall, Building A</p>
          </div>
          <button className="mt-4 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition duration-300">
            Register
          </button>
        </div>

        {/* Event 2 */}
        <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
          <img 
            src="path/to/event2-poster.jpg" 
            alt="Event 2 Poster" 
            className="w-full h-48 object-cover rounded-md mb-4"
          />
          <h3 className="text-2xl font-semibold mb-2">Event Title 2</h3>
          <p className="text-gray-700 mb-4">Brief description of the event goes here.</p>
          <div className="text-left">
            <p className="text-sm text-gray-600"><strong>Date:</strong> February 5, 2024</p>
            <p className="text-sm text-gray-600"><strong>Time:</strong> 3:00 PM - 6:00 PM</p>
            <p className="text-sm text-gray-600"><strong>Place:</strong> Auditorium, Building B</p>
          </div>
          <button className="mt-4 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition duration-300">
            Register
          </button>
        </div>

        {/* Add more event boxes as needed */}
      </div>
    </div>
  </section>
);

export default Events;
