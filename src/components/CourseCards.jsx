import Course1 from "../assets/course/course1.jpg";
import Course2 from "../assets/course/course2.jpg";
import Course3 from "../assets/course/course3.jpg";
import TimerIcon from "../assets/svg/course/timer";
import LevelMiniIcon from "../assets/svg/course/level_mini";
import CertificateIcon from "../assets/svg/course/certificate";
export default function CourseCards() {
  const courses = [
    {
      title: "Uygulamalarla SQL Eğitimi",
      author: "Hamit Mızrak",
      description:
        "SQL, veritabanı yönetimi ve veri sorgulama için kullanılan bir dildir. Bu eğitimde, SQL'in temel prensiplerini ve pratik uygulamalarını öğreneceksiniz.",
      tags: ["SQL", "Veri Tabanı", "SQL Server"],
      level: "Orta",
      duration: "10 Saat",
      certificated: "Var",
      image: Course1,
    },
    {
      title: "VPS (Sanal Özel Sunucu) Eğitimi",
      author: "Hamit Mızrak",
      description:
        "Sanal özel sunucu (VPS), bir uygulamayı veya web sitesini çalıştırmak için gerekli olan tüm yazılımı ve verileri barındıran bir makinedir.",
      tags: ["VPS", "DevOps", "GitLab"],
      level: "Orta",
      duration: "4 Saat",
      certificated: "Var",
      image: Course2,
    },
    {
      title: "Linux Bash Script Eğitimi",
      author: "Hamit Mızrak",
      description:
        "Linux Bash script, otomasyon ve sistem yönetimini kolaylaştıran güçlü bir betik dilidir.",
      tags: ["Linux", "Bash", "Otomasyon"],
      level: "Orta",
      duration: "7 Saat",
      certificated: "Var",
      image: Course3,
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-6">
      {courses.map((course, index) => (
        // Element: Course Card
        <div
          key={index}
          className="bg-white rounded-sm border border-zinc-200 hover:border-zinc-950 min-h-[457px] flex flex-col justify-between cursor-pointer p-4"
        >
          <div>
            <img
              src={course.image}
              alt={course.title}
              className="w-full  object-cover rounded-sm"
            />
            <h2 className="text-xl font-semibold mt-4">{course.title}</h2>
            <p className="text-gray-600 text-sm">{course.author}</p>
            <p className="text-gray-700 mt-2 text-sm">{course.description}</p>
            <div className="flex flex-wrap gap-2 mt-3 mb-6">
              {course.tags.map((tag, idx) => (
                <span
                key={idx}
                className="px-3 py-1 bg-zinc-100 text-gray-700 border-1 text-[13px] rounded-full "
              >
                {tag}
              </span>
               
              ))}
            </div>
          </div>
          <div>
            {" "}
            <hr className="my-4 border-gray-300" />
            <div className="flex  items-center mt-4 text-gray-600 text-[16px] gap-3">
              <span className="flex items-center gap-1">
                <LevelMiniIcon />
                {course.level}
              </span>
              <span className="flex items-center gap-1">
                <TimerIcon />
                {course.duration}
              </span>
              <span className="flex items-center gap-1">
                <CertificateIcon />
                {course.certificated}
              </span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
