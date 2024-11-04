import React from 'react';
import { Helmet } from 'react-helmet';
import Header from './Components/Header';
import About from './Components/About';
import Events from './Components/Events';
import Workshops from './Components/Workshops';
import Team from './Components/Team';
import Contact from './Components/Contact';
import FAQ from './Components/FAQ';
import Footer from './Components/Footer';
import ScrollToTopButton from './Components/ScrollToTopButton';

function App() {
  return (
    <div className="App font-sans">
      <Helmet>
        <title>PEA-SME</title>
        <meta name="description" content="Production Engineering Association (PEA) & Society of Manufacturing Engineers (SME) - Student Chapters,PSG College Of Technology,Coimbatore" />
        <meta name="keywords" content="PEA,SME,PSG TECH,Production," />
      </Helmet>
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
      <ScrollToTopButton />
    </div>
  );
}

export default App;
