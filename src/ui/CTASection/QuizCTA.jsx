import React from "react";
import CTABackground from "../../assets/CTAbackground.png";
import CTAImage from "../../assets/svg/CTA";

const BootcampBanner = () => {
  return (
    <div className=" text-white pb-8  flex flex-col min-h-[500px] md:flex-row items-center justify-between relative">
      <img
        src={CTABackground}
        alt="CTA Background"
        className="absolute top-0 left-0 w-full h-full object-cover z-[-1]"
      />
      <div className="flex flex-col md:flex-row items-center justify-between max-w-[1200px] px-4 mx-auto">
        <div className="md:w-1/2 w-full ">
          <nav className="text-sm text-gray-400 mb-4">
            <span className="mr-2">Ana Sayfa</span> &gt;{" "}
            <span className="text-white">Testler</span>
          </nav>
          <div>
            
            <h1 className="text-4xl font-bold">Testler</h1>
            <p className="mt-4 text-[20px] text-white">
              Teknoloji sektörüne özel hazırlanan testler ile teknik
              yetkinliklerinizi anında ölçün. Güçlü yanlarınızı keşfedin ve
              gelişim alanlarınızı belirleyin!
            </p>
            <div className="mt-4 ">
              <span className="bg-white text-black  text-xs py-2 px-4 rounded-full">
                Ücretsizdir
              </span>
            </div>
            <button className="mt-6 text-sm bg-giris hover:bg-giris-hover min-w-[172px] text-white font-medium py-3 px-6 rounded-sm ">
              Keşfet
            </button>
          </div>
        </div>

        <div className="md:w-1/3 flex justify-end mt-8 md:mt-0">
          <CTAImage className="object-cover" />
        </div>
      </div>
    </div>
  );
};

export default BootcampBanner;
