import React from "react";
import Footer from "../components/Footer";
import About from "../components/Landing/About";
import Hero from "../components/Landing/Hero";
import Product from "../components/Landing/Product";
import Nav from "../components/Nav";

function Landing() {
  return (
    <div>
      <Nav />
      <Hero />
      <Product />
      <About />
      <Footer />
    </div>
  );
}

export default Landing;
