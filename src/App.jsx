import Navbar from "../src/components/Navbar";
import Services from "../src/components/Services";
import Tours from "../src/components/Tours";
import Hero from "../src/components/Hero";
import About from "../src/components/About";
import Footer from "../src/components/Footer";
import React from "react";
function App() {
  return (
    <React.Fragment>
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Tours />
      <Footer />
    </React.Fragment>
  );
}

export default App;
