import React from "react";
import NavBar from "./NavBar";
// https://dribbble.com/shots/23408708-Canvas-Fashion-Studio-Landing-Page
const LandingPage = () => {
  return (
    <div className="bg-bg text h-screen px-5">
      <NavBar />
      <main>
        <section className="md:w-[60vw] md:px-16">
          <h1 className="text-5xl text-primary md:text-7xl text-balance py-10">
            Convert your ugly github to beautify portfolio's
          </h1>
          <button className="flex gap-1 text-bg bg-primary rounded-full px-4 py-2">
            Get Started for free
          </button>
        </section>
        <section></section>
      </main>
    </div>
  );
};

export default LandingPage;
