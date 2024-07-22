import React from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import FullDevelopmentCycle from './components/FullDevelopmentCycle';
import ApplicationDevelopmentStages from './components/ApplicationDevelopmentStages';
import OurTeam from './components/OurTeam';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import GlobalStyle from './styles/GlobalStyle';

function App() {
  return (
    <>
      <GlobalStyle />
      <div className="App">
        <Navbar />
        <HeroSection />
        <FullDevelopmentCycle />
        <ApplicationDevelopmentStages />
        <OurTeam />
        <FAQ />
        <Footer />
      </div>
    </>
  );
}

export default App;
