import React from "react";
import "@fontsource/roboto"
import ctaImg from "../../assets/ctaImg.jpg";
function CTA() {
  return (
    <div className="py-12 bg-gray-50">
      <div className="px-6 flex max-w-[1200px] mx-auto justify-between items-center "> 
        <div className="flex flex-col gap-6 justify-center max-w-[624px] leading-4 ">
          <div className="text-5xl font-medium ">
            <span className="text-giris">Techcareer.net ile</span> teknoloji
            kariyerinde hep ileriye
          </div>
          <div className="text-2xl">
            En yenilikçi teknoloji etkinliklerine ve yarışmalarına, heyecan
            verici iş fırsatlarına, eğitimlere ve yetenek belirleme testlerine
            ulaşmak için aramıza katıl.
          </div>
          <button className="px-[22px] py-2 h-[42px] text-sm max-w-[172px]   rounded-sm bg-giris  hover:bg-giris-hover text-white cursor-pointer">
            Hemen Üye Ol!
          </button>
        </div>
        <div className="flex">
          <img src={ctaImg} className="max-w-[439px] h-[350px] aspect-auto "></img>
        </div>
      </div>
    </div>
  );
}

export default CTA;
