import Quiz1 from "../../assets/QuizPageGrid/quiz1.jpg";
import Quiz2 from "../../assets/QuizPageGrid/quiz2.jpg";
import Quiz3 from "../../assets/QuizPageGrid/quiz3.jpg";
import Quiz4 from "../../assets/QuizPageGrid/quiz4.jpg";
import Quiz5 from "../../assets/QuizPageGrid/quiz5.jpg";
import Quiz6 from "../../assets/QuizPageGrid/quiz6.jpg";
import Quiz7 from "../../assets/QuizPageGrid/quiz7.jpg";
import Quiz8 from "../../assets/QuizPageGrid/quiz8.jpg";
import Quiz9 from "../../assets/QuizPageGrid/quiz9.jpg";
import LevelMiniIcon from "../../assets/svg/course/level_mini";
import TimerIcon from "../../assets/svg/course/timer";
import QuestionIcon from "../../assets/svg/quizzes/question";

export default function TestGrid() {
  const tests = [
    {
      title: "C# Teknik Test",
      level: "Başlangıç",
      duration: "16 Dakika",
      questions: "10 Soru",
      image: Quiz1,
      description:
        "Bu C# kodlama testi adayların C# dilinde temel seviye algoritmalar ile programlama yeteneklerini değerlendirir.",
    },
    {
      title: "Java Teknik Test",
      level: "Başlangıç",
      duration: "12 Dakika",
      questions: "16 Soru",
      image: Quiz2,
      description:
        "Java framwwork'ünde programlama bilgimi ölçmek istiyorum diyorsan, doğru yerdesin. Haydi hemen teste başla!",
    },
    {
      title: ".NET Teknik Test",
      level: "Başlangıç",
      duration: "10 Dakika",
      questions: "9 Soru",
      image: Quiz3,
      description:
        "Başlangıç seviye .Net developerlar için hazırlanan bu teknik test ile yetkinliğini ölçmeye hemen başla.",
    },
    {
      title: "DevOps Teknik Test",
      level: "Başlangıç",
      duration: "8 Dakika",
      questions: "8 Soru",
      image: Quiz4,
      description:
        "Yazılım geliştirme endüstrisinde metodoloji olan DevOps seviyeni ölçmek için hemen teste başla.",
    },
    {
      title: "Vue.js Teknik Test",
      level: "Orta",
      duration: "15 Dakika",
      questions: "12 Soru",
      image: Quiz5,
      description:
        "Vue.js framework'ünde bilgimi ölçmek istiyorum diyorsan, doğru yerdesin. Haydi hemen teste başla!",
    },
    {
      title: "BI Analyst Teknik Test",
      level: "Orta",
      duration: "30 Dakika",
      questions: "10 Soru",
      image: Quiz6,
      description:
        "SQL ve Python bilgisi içeren BI Analyst teknik test sayesinde orta seviye yetkinliğini ölçmeye hemen başla.",
    },
    {
      title: "Unity Teknik Test",
      level: "Orta",
      duration: "8 Dakika",
      questions: "8 Soru",
      image: Quiz7,
      description:
        "Unity ile oyun geliştirme özelliklerini etkili şekilde kullanabiliyorum diyorsan bu teknik test tam sana göre.",
    },
    {
      title: "Angular Teknik Test",
      level: "Orta",
      duration: "12 Dakika",
      questions: "14 Soru",
      image: Quiz8,
      description:
        "Angular framework'de orta seviye bilgi ve deneyime sahibim ve bunu kanıtlamak istiyorum diyorsan, hemen teste başla.",
    },
    {
      title: "Java Teknik Test",
      level: "İleri",
      duration: "22 Dakika",
      questions: "14 Soru",
      image: Quiz9,
      description:
        "Java framework'ünde orta seviye bilgiye sahip developerların yetkinliklerini ölçmelerini sağlamaktadır.",
    },
  ];

  return (
    <div className="bg-gray-50 py-12 ">
      <div className="mx-auto px-6 flex flex-col gap-4 max-w-[1200px] ">
        <div className="py-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {tests.map((test, index) => (
            <div
              key={index}
              className="border border-zinc-200 hover:border-zinc-950 rounded-lg p-6 bg-white flex flex-col items-center  
          space-y-4 cursor-pointer justify-between"
            >
              <div>
                <img
                  src={test.image}
                  alt={test.title}
                  className=" object-contain"
                />
                <h3 className="text-lg font-medium">
                  {test.title} ({test.level} Seviye){" "}
                </h3>
                <p className="text-sm font-normal text-zinc-950">
                  {test.description}
                </p>
              </div>

              {/*  Quizzes Card Footer */}
              <div className="flex justify-between w-full text-gray-500 text-xs border-t border-t-zinc-200 pt-4">
                <div className="flex items-center">
                  <span className="flex items-center gap-1 lg:text-[16px] md:text-sm sm:text-xs ">
                    <LevelMiniIcon /> {test.level}
                  </span>
                </div>
                <div className="flex items-center lg:text-[16px] md:text-sm sm:text-xs">
                  <span className="flex items-center gap-1">
                    <TimerIcon /> {test.duration}
                  </span>
                </div>
                <div className="flex items-center lg:text-[16px] md:text-sm sm:text-xs">
                  <span className="flex items-center gap-1">
                    <QuestionIcon /> {test.questions}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
