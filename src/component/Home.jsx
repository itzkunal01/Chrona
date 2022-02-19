import React from "react";
import About from "./About";
import Header from "./common/Header";
import FaqFooter from "./FaqFooter";
import Hero from "./Hero";
import Raffle from "./Raffle";
import Roadmap from "./Roadmap";
import Roadmapwatchlist from "./Roadmapwatchlist";
import { TeamCarousel } from "./TeamCarousel";
import Works from "./Works";

const Home = () => {
  return (
    <div>
      <Header />
      <Hero />
      <About />
      <Works />
      <Raffle />
      <Roadmapwatchlist />
      <Roadmap />
      <TeamCarousel />
      <FaqFooter />
    </div>
  );
};

export default Home;
