import React from "react";
import "@fontsource/roboto";
import ctaImg from "../../assets/ctaImg.jpg";
import { useMediaQuery } from "react-responsive";

const CTASection = () => {
  const isMobile = useMediaQuery({ maxWidth: 870 });

  return (
    <div className="py-12 bg-gray-50">
      <div className="px-6 flex max-w-[1200px] mx-auto justify-between items-center flex-wrap">
        {isMobile ? (
          <div className="flex flex-col items-center text-center w-full">
            <img
              src={ctaImg}
              className="w-full h-auto max-w-[439px]"
              alt="CTA Image"
            />
            <div className="text-5xl font-medium mt-6">
              <span className="text-giris">Techcareer.net ile</span> teknoloji
              kariyerinde hep ileriye
            </div>
            <div className="text-2xl mt-4">
              En yenilikçi teknoloji etkinliklerine ve yarışmalarına, heyecan
              verici iş fırsatlarına, eğitimlere ve yetenek belirleme testlerine
              ulaşmak için aramıza katıl.
            </div>
          </div>
        ) : (
          <div className="flex justify-between items-center w-full">
            <div className="flex flex-col gap-6 justify-center max-w-[624px] leading-4">
              <div className="text-5xl font-medium">
                <span className="text-giris">Techcareer.net ile</span> teknoloji
                kariyerinde hep ileriye
              </div>
              <div className="text-2xl">
                En yenilikçi teknoloji etkinliklerine ve yarışmalarına, heyecan
                verici iş fırsatlarına, eğitimlere ve yetenek belirleme
                testlerine ulaşmak için aramıza katıl.
              </div>
              <button className="px-[22px] py-2 h-[42px] text-sm max-w-[172px] rounded-sm bg-giris hover:bg-giris-hover text-white cursor-pointer">
                Hemen Üye Ol!
              </button>
            </div>
            <div className="flex">
              <img
                src={ctaImg}
                className="max-w-[439px] h-[350px] aspect-auto"
                alt="CTA Image"
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CTASection;
