// src/Components/ScrollToTopButton.js
import React, { useEffect, useState } from 'react';

const ScrollToTopButton = () => {
  const [visible, setVisible] = useState(false);

  const handleScroll = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 300) {
      setVisible(true);
    } else {
      setVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <button
      onClick={scrollToTop}
      className={`fixed bottom-5 right-5 transition-opacity duration-300 ${visible ? 'opacity-100' : 'opacity-0'}`}
      style={{
        display: visible ? 'block' : 'none',
        fontSize: '40px', // Adjust the size of the arrow
        width: '60px',
        height: '60px',
        background: 'none', // No background
        border: 'none',     // No border
        cursor: 'pointer',  // Pointer cursor on hover
        outline: 'none',    // Remove outline
      }}
    >
      ⇧
    </button>
  );
};

export default ScrollToTopButton;
