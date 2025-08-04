import React from "react";
import Banner from "../components/Banner";
import DreamVacation from "../components/DreamVacation";
import NextTrip from "../components/NextTrip";
import Hotels from "../components/Hotels";

const HomePage = () => {
  return (
    <div className="bg-white dark:bg-slate-900 transition-colors duration-200">
      <Banner />
      <DreamVacation />
      <NextTrip />
      <Hotels />
    </div>
  );
};

export default HomePage;
