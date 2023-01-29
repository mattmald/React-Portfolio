import React from 'react';
import LandingPage from './components/LandingPage';
import Footer from './components/Footer';
import Navbar from './components/Navbar';



export default function App() {
  return (
    <div>
      <Navbar />
      <LandingPage />
      <Footer />
    </div>
  );
}