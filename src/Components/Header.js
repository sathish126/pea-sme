import React, { useState } from 'react';
import { Link } from 'react-scroll';

const Header = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <>
      <header className="bg-white text-black py-4 fixed w-full top-0 z-10 shadow">
        <div className="container mx-auto flex justify-between items-center px-6">
          {/* Logo Container */}
          <div className="flex items-center space-x-4">
            <img src={`${process.env.PUBLIC_URL}/img/psg_logo.png`} alt="PSG Logo" className="h-10" />
            <img src={`${process.env.PUBLIC_URL}/img/PEA_Logo.png`} alt="PEA Logo" className="h-10" />
            <img src={`${process.env.PUBLIC_URL}/img/sme_logo.png`} alt="SME Logo" className="h-10" />
          </div>

          <button className="md:hidden" onClick={toggleSidebar}>
            <span className="text-2xl">☰</span> {/* Hamburger Icon */}
          </button>
          <nav className="hidden md:flex space-x-6">
            {['About', 'Events', 'Workshops', 'Team', 'Gallery', 'Contact', 'FAQ'].map((section) => (
              <Link
                key={section}
                to={section.toLowerCase()}
                smooth={true}
                offset={-70}
                duration={500}
                className="cursor-pointer hover:text-yellow-500"
              >
                {section}
              </Link>
            ))}
          </nav>
        </div>
      </header>

      {/* Sidebar for mobile view */}
      <div
        className={`fixed inset-0 bg-gray-900 bg-opacity-75 transition-opacity ${isSidebarOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
      >
        <div className={`fixed left-0 top-0 w-64 h-full bg-gray-800 text-white transition-transform transform ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'}`}>
          <div className="flex justify-between items-center p-4">
            <h2 className="text-2xl font-bold">Menu</h2>
            <button onClick={toggleSidebar} className="text-2xl">×</button>
          </div>
          <nav className="flex flex-col space-y-4 p-4">
            {['About', 'Events', 'Workshops', 'Team', 'Gallery', 'Contact', 'FAQ'].map((section) => (
              <Link
                key={section}
                to={section.toLowerCase()}
                smooth={true}
                offset={-70}
                duration={500}
                onClick={toggleSidebar}
                className="cursor-pointer hover:text-yellow-500"
              >
                {section}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </>
  );
};

export default Header;
