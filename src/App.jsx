import { Autocomplete, TextField } from "@mui/material";
import React from "react";
import Header from "./ui/HeaderSection/Header";
import CTA from "./ui/CTASection/CTA";
import HomePageEvent from "./ui/HomepageEventSection/HomePageEvent";
import Event from "./ui/EventSection/Event";
import Jobs from "./ui/JobsSection/Jobs";
import Courses from "./ui/CoursesSection/Courses";
import HomePageSlider from "./ui/HomePageSlider/HomePageSlider";
import HomePageOtherSection from "./ui/HomePageOtherSection/HomePageOtherSection";
import Testimonials from "./ui/Testimonials/Testimonials";
import BiziKatilimcilardanDinle from "./ui/BiziKatılımcılarDinle/BiziKatilimcilardanDinle";
import IsverenMisin from "./ui/IsverenMisin/IsverenMisin"
import Footer from "./ui/Footer/Footer";
// Supports weights 100-900
// import '@fontsource/roboto/300.css';
// import '@fontsource/roboto/400.css';
// import '@fontsource/roboto/500.css';
// import '@fontsource/roboto/700.css';

function App() {
  return (
    <>
      {/* <div className="text-5xl font-[Roboto]">App</div> */}
      <div className="font-[Roboto]"  >
        <Header />
        <CTA />
        <HomePageEvent />
        <Event />
        <Jobs />
        <Courses />
        <HomePageSlider />
        <HomePageOtherSection />
        <Testimonials />
        <BiziKatilimcilardanDinle />
        <IsverenMisin />
        <Footer />
      </div>
    </>
  );
}

export default App;
