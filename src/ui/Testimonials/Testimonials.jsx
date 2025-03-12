import React from "react";
import TestimonialCards from "../../components/TestimonialCards";
function Testimonials() {
  const cards = [
    {
      title: "Blog",
      description:
        "Teknoloji haberlerine dair son gelişmeleri ve yenilikleri takip edebileceğin teknoloji bloğu sayfamızı hemen ziyaret edebilirsin.",
      buttonText: "Hemen Oku",
    },
    {
      title: "Teknik Sözlük",
      description:
        "A’dan Z’ye tüm teknoloji terimlerinin tanımlarını senin için hazırladığımız teknoloji sözlüğünde bulabilirsin.",
      buttonText: "Hemen Keşfet",
    },
    {
      title: "Kariyer Rehberi",
      description:
        "Teknoloji pozisyonlarının ne iş yaptığını, öğrenme yolculuklarını ve tüm bilgilerini incelemeye buradan başlayabilirsin.",
      buttonText: "Hemen İncele",
    },
  ];

  return (
    <div className=" py-12 ">
      <div className="mx-auto px-6 flex flex-col gap-4 max-w-[1200px] ">
        <div className="bg-gray-100 flex items-center justify-center">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6  ">
            {cards.map((card, index) => (
              <TestimonialCards
                key={index}
                title={card.title}
                description={card.description}
                buttonText={card.buttonText}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Testimonials;
