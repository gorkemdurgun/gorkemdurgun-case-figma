import React from "react";

import "./App.css";
import { BestCard, ImageBox, Navbar, TestimonialCard } from "./components";
import { SectionHero, SectionBestOfTheBest, SectionWhyJoinUs, SectionTestimonials, SectionGrowYourCollection, SectionMap } from "./sections";

function App() {
  const testimonialListRef = React.useRef(null);

  function handleScrollSmoothly(direction) {
    testimonialListRef.current.scrollBy({ left: direction, behavior: "smooth" });
  }

  return (
    <div className="App">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" crossorigin />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap"
          rel="stylesheet"
        />
      </head>
      <Navbar />
      {/* Hero Section */}
      <SectionHero />
      {/* The best of the best section */}
      {/* <SectionBestOfTheBest /> */}
      {/* Why join us section */}
      {/* <SectionWhyJoinUs /> */}
      {/* Because they love us section */}
      {/* <SectionTestimonials /> */}
      {/* Grow your collection section */}
      {/* <SectionGrowYourCollection /> */}
      {/* Map section */}
      {/* <SectionMap /> */}
    </div>
  );
}

export default App;
