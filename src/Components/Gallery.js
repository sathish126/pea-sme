// Components/Gallery.js
import React from 'react';

function Gallery() {
  const images = [
    { src: "/img/pic-1.jpeg", alt: "Gallery Image 1", description: "Event 1: Workshop on Robotics" },
    { src: "/img/pic-2.jpeg", alt: "Gallery Image 2", description: "Event 2: Guest Lecture on AI" },
    { src: "/img/pic-3.jpeg", alt: "Gallery Image 3", description: "Event 3: Industrial Visit" },
    { src: "/img/pic-4.jpeg", alt: "Gallery Image 4", description: "Event 4: Hands-on Coding Bootcamp" },
    { src: "/img/pic-4.jpeg", alt: "Gallery Image 4", description: "Event 4: Hands-on Coding Bootcamp" },
    { src: "/img/pic-3.jpeg", alt: "Gallery Image 3", description: "Event 3: Industrial Visit" },
    { src: "/img/pic-2.jpeg", alt: "Gallery Image 2", description: "Event 2: Guest Lecture on AI" },
    { src: "/img/pic-1.jpeg", alt: "Gallery Image 1", description: "Event 1: Workshop on Robotics" },
    // Add more images as needed
  ];

  return (
    <section id="gallery" className="gallery-section bg-gray-100 py-10">
      <h2 className="text-center text-2xl font-bold mb-8">Gallery</h2>
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-1">
          {images.map((image, index) => (
            <div key={index} className="gallery-item text-center">
              <img src={image.src} alt={image.alt} className="w-full h-48 object-cover rounded-lg mb-2" />
              <p className="text-gray-700 text-sm">{image.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Gallery;
