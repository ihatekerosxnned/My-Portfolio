import React from 'react';
import Header from '../Header/Header';
import About from '../About/About';
import Navbar from '../../Components/Navbar/Navbar'
import Trial from '../Trial/Trial';
import Projects from '../Projects/Projects';
import Footer from '../../Components/Footer/Footer';
import Contact from '../Contact/Contact';


const Homepage = () => {
  return (
    <>
    <Navbar />
    <Header />
    <About />
    <Trial />
    <Projects />
    <Contact />
    <Footer />
    </>
  )
}

export default Homepage