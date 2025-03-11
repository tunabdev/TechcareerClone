import React, { use, useState } from "react";
import HemenBasvurForward from "../../assets/svg/hemen_basvur";
import BootcampCards from "../../components/BootcampCards";
function HomePageEvent() {
  const buttons = [
    {
      label: "Bootcamp",
      description:
        "Uzman eğitmenler ile farklı yazılım dillerinde eğitimler alıp, projeler üzerinde çalışarak gerçek dünya tecrübesi edin, kariyerinde hızla yüksel.",
    },
    {
      label: "Hackathon",
      description:
        "Gerçek dünya problemlerine yenilikçi çözümler üretmek için Hackathon'lara katıl!",
    },
    {
      label: "Hiring Challenge",
      description:
        "Gerçek iş dünyasından görevlerle becerilerini kanıtla, yetenek avcılarının radarına gir ve hayalindeki işe daha hızlı ulaş.",
    },
  ];

  const [selected, setSelected] = useState(buttons[0].label);

  return (
    <div className="py-12 mb-24">
      <div className="mx-auto px-6 flex flex-col gap-8 max-w-[1200px] mb-24">
        <div>
          <h1 className="text-4xl font-medium">Etkinliklerimiz</h1>
        </div>
        <div className="flex flex-col items-center text-2xl gap-4 text-zinc-900">
          {/* Buton Grubu */}
          <div className="flex gap-4 w-full text-2xl">
            {buttons.map(({ label }) => (
              <div key={label} className="flex flex-1 justify-center">
                <button
                  onClick={() => setSelected(label)}
                  className={`px-4 py-2 h-[80px] grow bg-transparent cursor-pointer border-2 rounded-md 
                ${selected === label ? "border-black" : "border-zinc-200"}`}
                >
                  {label}
                </button>
              </div>
            ))}
          </div>

          {/* Açıklama Alanı */}
          {selected && (
            <p className="mt-4 text-lg text-center max-w-2xl text-gray-700">
              {buttons.find(({ label }) => label === selected)?.description}
            </p>
          )}
          {/* Hemen Başvur Butonu */}
          <div className="flex justify-center items-center gap-1">
            {" "}
            <a href="#" className=" flex items-center  text-giris  hover:underline  text-[15px] transition">
              Hemen Başvur
            </a>
            <span className="">
              <HemenBasvurForward className="h-[20px] w-[20px] fill-giris" />
            </span>
          </div>
        </div>
        {/* <div class="flex text-2xl gap-4 text-zinc-900  ">
          <div class=" flex flex-1 justify-center">
            <button class="px-4 py-2 h-[80px] bg-transparent grow cursor-pointer border-2 rounded-md border-zinc-200 ">
              Bootcamp
            </button>
          </div>
          <div class="flex flex-1 justify-center">
            <button class="px-4 py-2 h-[80px] grow bg-transparent cursor-pointer border-2 rounded-md border-zinc-200 ">
              Hackathon
            </button>
          </div>
          <div class="flex flex-1 justify-center">
            <button class="px-4 py-2 h-[80px]  bg-transparent grow cursor-pointer border-2 rounded-md border-zinc-200 ">
              Hiring Challenge
            </button>
          </div>
        </div> */}
      </div>
      <div className="mx-auto px-6 flex flex-col gap-6 max-w-[1200px]">
        <div>
          <h2 className="text-2xl text-center">Başvuruya Açık Etkinlikler</h2>
        </div>
        {/* <div className="flex gap-4 w-full">
          <div className="">

          </div>
          <div></div>
          <div></div>
          
        </div> */}
        <BootcampCards />
      </div>
    </div>
  );
}

export default HomePageEvent;
