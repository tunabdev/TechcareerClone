import React from "react";
import Slider from "react-slick";
import Person1 from "../../assets/bizikatilimcilardandinle/person1.jpg";
import Person2 from "../../assets/bizikatilimcilardandinle/person2.jpg";
import Person3 from "../../assets/bizikatilimcilardandinle/person3.jpg";
import Person4 from "../../assets/bizikatilimcilardandinle/person4.jpg";
import QuoteIcon from "../../assets/svg/bizi_katilimcilardan_dinle/quote";

import { ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
  {
    name: "Kadriye Yılmaz",
    bootcamp: "Tech Recruitment Bootcamp",
    image: Person1,
    text: "Tech Recruitment Bootcamp işe alım Programı için çok teşekkür ederiz. ​Bu alanda gelişmek isteyen ve şirketimizin ihtiyacı olan adaylara rahatlıkla tek platform üzerinden erişim imkanı olması ve sürecin oldukça hızlı ilerlemesi ile birlikte süreç bizim için oldukça verimli geçti. ​Program ile aramıza katılan arkadaşımız ile birlikte çalışmaktan çok memmunuz. ​Süreç gelişimi için söyleyebileceğim bir geri bildirimim bence gayet başarılı bir program emeklerinize sağlık.",
  },
  {
    name: "Beyzanur Seyhan",
    bootcamp: "Hyper Company Front-End Angular Bootcamp",
    image: Person2,
    text: "Front-end alanında çıktığım bu yolculukta Techcareer ile tanışmam ve Techcareer ile Hyper Company işbirliği ile düzenlenen bootcampte yer almam benim için unutulmaz bir fırsattı. İş dünyasına adım atmadan önce her önemli konunun değinildiği bu güzel bootcampte daha önce deneyimlemediğim anlar yaşadım. Bununla birlikte benimle aynı heyecanı yaşayan arkadaşlarla ve eğitmenimizle tanışmak benim için anlatılmaz bir duyguydu. Techcareer sayesinde sadece bir eğitimden daha fazlasını edindim. Bu imkanları sunduğu için Techcareer'e ne kadar teşekkür etsem az.",
  },
  {
    name: "Nazlıcan Aslan",
    bootcamp: "Tech Recruitment Bootcamp",
    image: Person3,
    text: "IT recruiter alanında bilgi birikimi sağlayan, çok besleyici ve kariyer yolculuğuma ışık tutan bir eğitim oldu. Teknoloji alanındaki dile, yeni teknolojilere ve alanda gelişim odaklı ilerlemek için neler yapabileceğime dair birçok sorunun yanıtını cevaplayan dolu dolu bir eğitimdi. Eğitimle beraber pratik yapabileceğimiz birçok case sayesinde deneyim kazanmış oldum. Bu fırsatı sunan techcareer.net ailesine çok teşekkür ederim.",
  },
  {
    name: "Sema Vargez",
    bootcamp: "Test Engineering Bootcamp",
    image: Person4,
    text: "Techcareer.net sayesinde bir parçası olduğum Test Engineering Bootcamp süreci boyunca, techcareer.net ailesi ve eğitmenim iş hayatına sağlam adımlarla adım atmam için oldukça destekleyiciydi. Gerek bootcamp süreçleri gerek ise bootcamp sonrası ilgilerini eksik etmedikleri için techcareer.net ailesine ve eğitmenime teşekkür ederim. Halen bu ailenin bir parçası olduğum için oldukça mutluyum. Eminim ki techcareer.net ailesi vermiş olduğu bootcamplerle birlikte birçok insanın hayatına dokunmaya devam edecek.",
  },
];

const TestimonialSlider = () => {
  const PrevArrow = ({ onClick }) => (
    <button
      className="absolute left-[-30px] top-1/2 transform -translate-y-1/2 bg-white border border-gray-300 shadow-lg w-10 h-10 flex items-center justify-center rounded-full hover:bg-gray-100 transition-all z-10 cursor-pointer"
      onClick={onClick}
    >
      <ChevronLeft className="w-5 h-5 text-giris" />
    </button>
  );

  const NextArrow = ({ onClick }) => (
    <button
      className="absolute right-[-30px] top-1/2 transform -translate-y-1/2 bg-white border border-gray-300 shadow-lg w-10 h-10 flex items-center justify-center rounded-full hover:bg-gray-100 transition-all z-10 cursor-pointer"
      onClick={onClick}
    >
      <ChevronRight className="w-5 h-5 text-giris" />
    </button>
  );

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 2,
    arrows: true,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slideToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="bg-gray-100 py-12">
      <div className="mx-auto px-6 flex flex-col gap-4 max-w-[1200px]">
        <div>
          <h1 className="text-4xl font-medium">
            Bizi Katılımcılarımızdan Dinle
          </h1>
        </div>
        <div className="max-w-full mx-auto">
          <Slider {...settings}>
            {testimonials.map((testimonial, index) => (
              //
              <div key={index} className="p-2">
                <div className="bg-white rounded-sm border border-zinc-200  p-6 flex ">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-[156px] h-[156px] mr-6"
                  />
                  <div className="flex flex-col">
                    <p className="text-zinc-950 text-sm mb-4 max-h-[140px] overflow-y-auto">
                      {testimonial.text}
                    </p>
                    <div className="flex gap-2">
                      <div>
                        <QuoteIcon className="w-9 h-6" />
                      </div>
                      <div className="flex flex-col gap-0.5">
                        <h3 className="font-medium text-sm">
                          {testimonial.name}
                        </h3>
                        <p className="text-zinc-950 text-xs">
                          {testimonial.bootcamp}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
         {/*Button  */}
      <div>
        <a href="#">
          <button className="w-[121px] h-[40px] rounded-sm bg-transparent text-giris border-giris border text-sm cursor-pointer">
            Tümünü Gör
          </button>
        </a>
      </div>
      </div>
    </div>
  );
};

export default TestimonialSlider;
