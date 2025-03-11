import React from "react";
import Etk1 from "../assets/etkinlik1.jpg";
import Etk2 from "../assets/etkinlik2.jpg";
import Etk3 from "../assets/etkinlik3.jpg";

function BootcampCards() {
  const bootcamps = [
    {
      title: "DETECH'25",
      description: "Teknoloji ile Dünyayı Değiştir!",
      tags: ["Hackathon", "İş Birliği"],
      deadline: "13.03.2025",
      //bring image from asset folder etkinlik1.jpg and use it image property import pls
      image: Etk1,

      // image: "/detec25.jpg",
    },
    {
      title: "SwiftCraft: iOS Development Bootcamp",
      description: "Ücretsiz öğren, mezun ol, sertifika sahibi ol!",
      tags: ["Bootcamp"],
      deadline: "26.03.2025",
      image: Etk2,
    },
    {
      title: "Experian Young Talent Bootcamp",
      description: "Ücretsiz öğren, mezun ol, çalışmaya başla!",
      tags: ["Bootcamp"],
      deadline: "26.03.2025",
      image: Etk3,
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 ">
      {bootcamps.map((bootcamp, index) => (
        <div
          key={index}
          className="border border-zinc-200 rounded-sm  overflow-hidden bg-white min-h-[444px] min-w-[373px] flex flex-col
          hover:border-zinc-900 transition-all cursor-pointer  "
        >
          <div className="w-full flex-1 px-4 pt-4">
            {" "}
            <img
              src={bootcamp.image}
              alt={bootcamp.title}
              className="w-full h-40 object-cover rounded-sm"
            />
            <div className="p-4 flex-1">
              <h3 className="text-xl font-medium text-center">
                {bootcamp.title}
              </h3>
              <p className="text-center text-sm mt-2">{bootcamp.description}</p>
              <div className="mt-3 flex flex-wrap gap-2 w-full flex-1 justify-center">
                {bootcamp.tags.map((tag, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 bg-zinc-100 text-gray-700 border-1 text-[13px] rounded-full "
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="p-4 border-t border-zinc-200 flex justify-between items-center max-h-[63px]">
            <span className="text-xs text-zinc-400">
              SON BAŞVURU: <br />
              <strong className="text-sm text-zinc-950">{bootcamp.deadline}</strong>
            </span>
            <button className="bg-giris cursor-pointer font-medium hover:bg-giris-hover text-xs text-white px-4 py-2 rounded-sm w-[153px] h-[30px] text-center">
              Başvur
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default BootcampCards;
