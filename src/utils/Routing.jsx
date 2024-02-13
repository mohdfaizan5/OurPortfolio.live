import React from "react";
import { Route, Routes } from 'react-router-dom'
import LandingPage from '../components/LandingPage'
import Design1 from '../components/Design1'
import Design2 from '../components/Design2'
import Error404Page from "@/components/Error404Page";

const Routing = () => {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/:username" element={<Design1 />} />
      {/* <Route path='/OurPortfolio.live' element={<LandingPage/>}/> */}
      <Route path="/:username/d2" element={<Design2 />} />
      <Route path="/:username/d2" element={<Design2 />} />
      <Route path="*" element={<Error404Page />} />
      
    </Routes>
  );
};

export default Routing;
