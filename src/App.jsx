import { Autocomplete, TextField } from "@mui/material";
import React from "react";
import Header from "./ui/HeaderSection/Header";
import CTA from "./ui/CTASection/CTA";
import HomePageEvent from "./ui/HomepageEventSection/HomePageEvent";

import Jobs from "./ui/JobsSection/Jobs";
import Courses from "./ui/CoursesSection/Courses";
import HomePageSlider from "./ui/HomePageSlider/HomePageSlider";
import RefSection from "./ui/ReferenceSection/RefSection";
import BiziKatilimcilardanDinle from "./ui/BiziKatılımcılarDinle/BiziKatilimcilardanDinle";
import IsverenMisin from "./ui/IsverenMisin/IsverenMisin";
import Footer from "./ui/Footer/Footer";
import Quizzes from "./ui/QuizzesSection/Quizzes";
import HomePageOtherSection from "./ui/RefAnimationSection/RefAnimationSection";
import RefAnimationSection from "./ui/RefAnimationSection/RefAnimationSection";
// Supports weights 100-900
// import '@fontsource/roboto/300.css';
// import '@fontsource/roboto/400.css';
// import '@fontsource/roboto/500.css';
// import '@fontsource/roboto/700.css';

function App() {
  return (
    <>
      {/* <div className="text-5xl font-[Roboto]">App</div> */}
      <div className="font-[Roboto]">
        <Header />
        <CTA />
        <HomePageEvent />
        <Jobs />
        <Courses />
        <Quizzes />
        <HomePageSlider />
        <HomePageOtherSection />
        <RefSection />
        <RefAnimationSection />
        <BiziKatilimcilardanDinle />
        <IsverenMisin />
        <Footer />
      </div>
    </>
  );
}

export default App;
