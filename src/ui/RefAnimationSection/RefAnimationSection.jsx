import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Logo1 from "../../assets/references/animation/ref_1.jpg";
import Logo2 from "../../assets/references/animation/ref_2.jpg";
import Logo3 from "../../assets/references/animation/ref_3.jpg";
import Logo4 from "../../assets/references/animation/ref_4.jpg";
import Logo5 from "../../assets/references/animation/ref_5.jpg";
import Logo6 from "../../assets/references/animation/ref_6.jpg";
import Logo7 from "../../assets/references/animation/ref_7.jpg";
import Logo8 from "../../assets/references/animation/ref_8.jpg";
import Logo9 from "../../assets/references/animation/ref_9.jpg";
import Logo10 from "../../assets/references/animation/ref_10.jpg";
import Logo11 from "../../assets/references/animation/ref_11.jpg";
import Logo12 from "../../assets/references/animation/ref_12.jpg";

const logos = [
  Logo1,
  Logo2,
  Logo3,
  Logo4,
  Logo5,
  Logo6,
  Logo7,
  Logo8,
  Logo9,
  Logo10,
  Logo11,
  Logo12,
];

export default function LogoGrid() {
  const [visibleLogos, setVisibleLogos] = useState(logos);

  useEffect(() => {
    const interval = setInterval(() => {
      const randomIndex = Math.floor(Math.random() * visibleLogos.length);
      const newLogo = logos[Math.floor(Math.random() * logos.length)];

      setVisibleLogos((prev) => {
        const updatedLogos = [...prev];
        updatedLogos[randomIndex] = newLogo;
        return updatedLogos;
      });
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-white py-12  ">
      <div className="mx-auto flex flex-col max-w-[1200px] overflow-hidden ">
        <div className="grid lg:grid-cols-6 md:grid-cols-4 grid-cols-2 p-6 ">
          {/* {visibleLogos.map((logo, index) => (
            <AnimatePresence key={index} mode="wait">
              <motion.img
                src={logo}
                alt={`Logo ${index + 1}`}
                className="h-[100px] object-contain"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 1}}
              />
            </AnimatePresence>
          ))} */}
          {visibleLogos.map((logo, index) => (
            <div
              key={index}
              className="h-[100px] flex items-center justify-center"
            >
              <AnimatePresence mode="wait">
                <motion.img
                  key={logo}
                  src={logo}
                  alt="logo"
                  className="w-full h-full object-contain"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 1 }}
                />
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
