import React from "react";
import Slider from "react-slick";
import SEOArt from "../../assets/references/seoart.jpg";
import FKA from "../../assets/references/fka.jpg";
import SAN from "../../assets/references/SAN.jpg";
import Otokoç from "../../assets/references/otokoc.jpg";
import Hyper from "../../assets/references/hyper.jpg";
import HangiKredi from "../../assets/references/hangikredi.jpg";

import { ChevronLeft, ChevronRight } from "lucide-react";

function RefSection() {
  const testimonials = [
    {
      logo: SEOArt,
      text: "Techcareer.net ile düzenlediğimiz iki  SEO bootcamp de bizler için oldukça güzel bir deneyimdi. Techcareer ekibi, süreç boyunca yanımızdaydı. Katılımcıları, yetenekleri ve potansiyelleri doğrultusunda yönlendirmek için mükemmel bir ortam sağladılar. Eğitim içerikleri isteklerimiz doğrultusunda oluşturuldu ve hazırlık sürecinde iki ekibin ortak çabası ile beklediğimizden daha kapsamlı hale geldi. Konusunda uzman eğitmenler ile bootcamp süreci katılımcılar için oldukça verimli bir deneyime dönüştü. Öyle ki, bootcampin sonunda katılımcıların birçoğunun bünyemize katabileceğimiz nitelikte bir teknik beceri kazandığını gözlemledik. Tüm bu süreçler göstermiş oldukları özveri ve başarı sonucunda 7 aday ile yolumuza devam etme kararı aldık. Bu bootcamp sayesinde yetişmiş en iyi adayları ekibimize dahil ederek kadromuza değer kattık. Teşekkürler techcareer.net!",
      author: "Oktay Çomak",
      role: "Founder",
      company: "Seoart",
    },
    {
      logo: FKA,
      text: "Techcareer.net ile Elâzığ'da düzenlediğimiz C# bootcamp deneyimi gerçekten güzeldi! Eğitim içerikleri hem bizim istediğimiz gibi oluşturuldu hem de beklediğimizden daha kapsamlıydı. Adaylar arasından katılımcıları belirleme sürecinde iletişimde kalarak taleplerimize uygun ve nitelikleri teknik testlerle tespit edilmiş doğru kitleye ulaşmamızı sağladılar. Bootcampdeki eğitmen ise konusunda uzmandı. Bootcampin hazırlık aşamasında iyi kurgulandığını ve eğitim sürecinde ve sonrasında katılımcıların nitelikli teknik eğitim aldıklarını, ortaya koydukları projelerle gözlemledik. Yeni tamamladığımız bu bootcamp sayesinde bir kamu kurumu olarak hedeflediğimiz nitelikli genç istihdamına katkı sağlayacak mezunlar verdik ve şimdi Techcareer.net'in networküyle yeni işlerine başlamalarını dört gözle bekliyoruz. Teşekkürler Techcareer.net!",
      author: "Furkan Başkaya",
      role: "Expert",
      company: "Fırat Kalkınma Ajansı",
    },
    {
      logo: SAN,
      text: "Öncelikle bu süreçte göstermiş olduğunuz ilgi ve alaka için şirketimiz ve çalışma arkadaşlarımız adına teşekkür ederim. Bizim açımızdan oldukça hareketli ve verimli bir çalışma oldu, adaylardan aldığımız geri dönüşlerde çok olumlu. Eğitim sonundaki değerlendirmelerimiz sonrasında toplamda 8 aday ile işe alım sürecimizi devam ettirdik, açıkçası bu tahmin ettiğimizin üzerinde bir sayı😊. Karşılıklı olarak bu kadar verimli ve keyifli bir süreç geçirdiğimiz için çok memnunuz. Süreçteki tüm destekleriniz ve adaylarımıza bu eğitim imkanını sağladığınız için sizlere teşekkür ederiz. Sürecin başlamasında İK Çözüm ortağımız Fatma Hanıma ve Okşan Hanıma, süreç boyunca destekleri için tüm techcareer.net ekibine teşekkürlerimizi sunuyoruz.",
      author: "Güçlü Konter",
      role: "Human Resources Manager",
      company: "SAN TSG & Paximum",
    },
    {
      logo: Otokoç,
      text: "IT recruiter alanında bilgi birikimi sağlayan, çok besleyici ve kariyer yolculuğuma ışık tutan bir eğitim oldu. Teknoloji alanındaki dile, yeni teknolojilere ve alanda gelişim odaklı ilerlemek için neler yapabileceğime dair birçok sorunun yanıtını cevaplayan dolu dolu bir eğitimdi. Eğitimle beraber pratik yapabileceğimiz birçok case sayesinde deneyim kazanmış oldum. Bu fırsatı sunan techcareer.net ailesine çok teşekkür ederim.",
      author: "Nazlıcan Arslan",
      role: "Recruitment Project Manager",
      company: "Otokoç Otomotiv",
    },
    {
      logo: Hyper,
      text: "Frontend Angular Bootcamp ile katılımcılarımızı başarıya götüren bir yolculuk yaşadık. Bu süreçte bizden desteğini esirgemeyen Techcareer.net ekibine ve Bootcamp öğretmenimize çok teşekkür ederiz. Sizlerin destekleri ve rehberlikleri olmadan, bu deneyim mümkün olmazdı. Sizlerin profesyonelliği, özverisi ve liderliği sayesinde, katılımcılarımızın becerileri gelişti ve ekip olarak güçlendik. Sizlerle çalışmak bizim için büyük bir zevkti ve bu deneyimden çok şey öğrendik. Birlikte daha nice başarılara imza atmamızı umuyoruz.",
      author: "Kadriye Yılmaz",
      role: "SAP Talent Strategy Team Lead",
      company: "NTT DATA Business Solutions",
    },
    {
      logo: HangiKredi,
      text: "Techcareer.net ile birlikte düzenlediğimiz Hiring Challenge’la birlikte yetenekli ve istekli arkadaşlara direkt şekilde ulaşma fırsatı elde ettik. Techcareer.net ekibinin desteğiyle süreç sorunsuz ve hızlı ilerledi. Başvuru sürecinden işe alım sürecine kadar, tüm süreçte yanımızda olduklarını hissettik. Buradan bir arkadaşımızı aramıza kattık ve nice arkadaşımızla da tanışma fırsatı elde ettik. Tüm techcareer.net ekibine teşekkür ederiz.",
      author: "Burcu Rodoplu",
      role: "Head of Human Resources",
      company: "HangiKredi",
    },
  ];

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
    infinite: true,
    speed: 500,
    arrows: true,
    slidesToShow: 3,
    slidesToScroll: 3,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slideToScroll: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slideToScroll: 1,
        },
      },
    ],
  };

  return (
    // <div className="bg-gray-50 py-12 ">
    //   <div className="mx-auto px-6 flex flex-col gap-4 max-w-[1200px] ">
    //     <div>
    //       <h1 className="text-4xl font-medium">Referanslarımız</h1>
    //     </div>
    //     <div className="max-w-full">
    //       <Slider {...settings}>
    //         {testimonials.map((testimonial, index) => (
    //           <div
    //             key={index}
    //             className="bg-white border  rounded-xl p-6 text-center flex flex-col items-center max-h-[500px]"
    //           >
    //             <img
    //               src={testimonial.logo}
    //               alt={testimonial.company}
    //               className=" object-contain mb-4 mx-auto"
    //             />
    //             <p className="text-gray-700 text-left h-32 overflow-y-auto text-sm mb-4">
    //               {testimonial.text}
    //             </p>
    //             <h3 className="text-sm text-left">
    //               {testimonial.author}, {testimonial.role}
    //             </h3>
    //             <p className="text-left text-[16px] font-medium">
    //               {testimonial.company}
    //             </p>
    //           </div>
    //         ))}
    //       </Slider>
    //     </div>
    //   </div>
    // </div>
    <div className="bg-gray-50 py-12">
      <div className="mx-auto px-6 flex flex-col gap-4 max-w-[1200px]">
        <div>
          <h1 className="text-4xl font-medium">Referanslarımız</h1>
        </div>
        <div className="max-w-full">
          <Slider {...settings} className="slick-slider">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="px-2">
                <div
                  className=" border-zinc-200  bg-white border rounded-xl p-6 text-center flex flex-col 
                max-h-[500px]"
                >
                  <img
                    src={testimonial.logo}
                    alt={testimonial.company}
                    className="object-contain mb-4 mx-auto"
                  />
                  <p className="text-gray-700 text-left h-32 overflow-y-auto text-sm mb-4">
                    {testimonial.text}
                  </p>
                  <h3 className="text-sm text-left">
                    {testimonial.author}, {testimonial.role}
                  </h3>
                  <p className="text-left text-[16px] font-medium">
                    {testimonial.company}
                  </p>
                </div>
              </div>
            ))}
          </Slider>
        </div>
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
}

export default RefSection;
