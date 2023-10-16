import "bootstrap-icons/font/bootstrap-icons.css";
import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Testimonial from "./components/Testimonial";
import Newsletter from "./components/Newsletter";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Header />
      <Hero />
      <Services />
      <Testimonial />
      <Newsletter />
      <Footer />
    </>
  );
}

export default App;
