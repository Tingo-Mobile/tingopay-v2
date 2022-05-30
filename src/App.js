import React from 'react';
import './App.css';
import { BannerHero, CTA, Footer, MobileGoal, Navbar, Partner, ServiceCard } from './common';

function App() {
  return (
    <div className="App">
      <Navbar />
      <BannerHero />
      <Partner />
      <ServiceCard />
      <MobileGoal />
      <CTA />
      <Footer />
    </div>
  );
}

export default App;
