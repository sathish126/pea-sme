import React from 'react';
import Header from './Components/Header'; // Ensure correct casing
import About from './Components/About';
import Events from './Components/Events';
import Workshops from './Components/Workshops';
import Team from './Components/Team';
import Contact from './Components/Contact';
import FAQ from './Components/FAQ';
import Footer from './Components/Footer';

function App() {
  return (
    <div className="App font-sans">
      <Header />
      <main>
        <About />
        <Events />
        <Workshops />
        <Team />
        <Contact />
        <FAQ />
      </main>
      <Footer />
    </div>
  );
}

export default App;
