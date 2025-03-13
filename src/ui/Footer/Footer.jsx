import {
  FaLinkedin,
  FaXTwitter,
  FaInstagram,
  FaYoutube,
  FaFacebook,
} from "react-icons/fa6";
import TechCareerLogo from "../../assets/svg/techcareerlogo";
export default function Footer() {
  const sections = [
    {
      title: "TECHCAREER",
      items: [
        "Hakkımızda",
        "Etkinlikler",
        "Şirketler İçin",
        "Eğitmen Ol",
        "İş Birliği",
        "Referanslar",
        "İletişim",
      ],
    },
    {
      title: "BAŞVUR",
      items: ["Bootcamp", "Hackathon", "Hiring Challenge", "İş İlanları"],
    },
    {
      title: "SENİN İÇİN",
      items: [
        "Komünite",
        "TDC",
        "Blog",
        "Podcast",
        "Kariyer Rehberi",
        "Teknik Sözlük",
        "Mülakat Soruları",
      ],
    },
    {
      title: "VERİ POLİTİKAMIZ",
      items: [
        "Aydınlatma Metni",
        "Hizmet Sözleşmesi",
        "Açık Rıza Metni",
        "Çerez Politikası",
      ],
    },
  ];
  const socialLinks = [
    { icon: <FaLinkedin />, link: "#" },
    { icon: <FaXTwitter />, link: "#" },
    { icon: <FaInstagram />, link: "#" },
    { icon: <FaYoutube />, link: "#" },
    { icon: <FaFacebook />, link: "#" },
  ];
  return (
    <div className="bg-gray-100">
      <div className="mx-auto px- flex flex-col gap-4 max-w-[1200px]">
        <footer className=" py-10 ">
          <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-5">
            {sections.map((section, index) => (
              <div key={index} className="text-sm">
                <h3 className="text-gray-400 mb-3">{section.title}</h3>
                <ul className="space-y-2">
                  {section.items.map((item, idx) => (
                    <li key={idx} className="cursor-pointer hover:underline">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
            {/* techcareer */}
            <div className="flex flex-col items-center md:items-start">
              <div className="mb-4">
                <TechCareerLogo />
              </div>
              <p className="text-sm text-zinc-950">
                Türkiye’nin teknoloji kariyeri platformu
              </p>
              <div className="mt-12 text-zinc-400 text-sm">SOSYAL MEDYA</div>
              <div className="flex space-x-4 mt-4">
                {socialLinks.map((item, i) => (
                  <a
                    key={i}
                    href={item.link}
                    className="text-gray-700 text-xl hover:text-gray-900"
                  >
                    {item.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>
          <hr className="mt-8 border-gray-300" />
          {/* Last */}
          <div className="mt-2  pt-4 flex flex-col md:flex-row justify-between items-center text-sm text-gray-400  mx-auto">
            {/* Dil Seçeneği */}
            <div className="flex space-x-4 text-sm">
              <span className="cursor-pointer text-zinc-950">TR</span>
              <span>|</span>
              <span className="cursor-pointer hover:text-gray-700">EN</span>
            </div>

            {/* Telif & İletişim Bilgileri */}
            <div className="flex flex-wrap justify-center md:justify-end text-xs space-x-6 mt-3 md:mt-0">
              <span>Tüm hakları saklıdır</span>
              <span>© Copyright 2025</span>
              <span className="cursor-pointer">support@techcareer.net</span>
            </div>
          </div>
          <div className=""></div>
        </footer>
      </div>
    </div>
  );
}
