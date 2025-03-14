import JavaQuizImage from "../assets/quiz/javaquiz.jpg";
import CSharpQuizImage from "../assets/quiz/cquiz.jpg";
import VueQuizImage from "../assets/quiz/vuequiz.jpg";
import TimerIcon from "../assets/svg/course/timer";
import LevelMiniIcon from "../assets/svg/course/level_mini";
import CertificateIcon from "../assets/svg/course/certificate";
import QuestionIcon from "../assets/svg/quizzes/question";
export default function QuizzesCards() {
  const tests = [
    {
      title: "Java Teknik Test (Başlangıç Seviye)",
      description:
        "Java framework'ünde programlama bilgimi ölçmek istiyorum diyorsan, doğru yerdesin. Haydi hemen teste başla!",
      duration: "12 Dakika",
      questions: "16 Soru",
      level: "Başlangıç",
      logo: JavaQuizImage,
    },
    {
      title: "C# Teknik Test (Başlangıç Seviye)",
      description:
        "Bu C# kodlama testi adayların C# dilinde temel seviye algoritmalar ile programlama yeteneklerini değerlendirir.",
      duration: "16 Dakika",
      questions: "10 Soru",
      level: "Başlangıç",
      logo: CSharpQuizImage,
    },
    {
      title: "Vue.js Teknik Test (Orta Seviye)",
      description:
        "Vue.js framework'ünde bilgimi ölçmek istiyorum diyorsan, doğru yerdesin. Haydi hemen teste başla!",
      duration: "15 Dakika",
      questions: "12 Soru",
      level: "Orta",
      logo: VueQuizImage,
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pt-6">
      {tests.map((test, index) => (
        // Quizzes Card
        <div
          key={index}
          className="border border-zinc-200 hover:border-zinc-950 rounded-lg p-6 bg-white flex flex-col items-center  
          space-y-4 cursor-pointer justify-between"
        >
          <div>
            <img src={test.logo} alt={test.title} className=" object-contain" />
            <h3 className="text-lg font-medium">{test.title}</h3>
            <p className="text-sm text-zinc-950">{test.description}</p>
          </div>

          {/*  Quizzes Card Footer */}
          <div className="flex justify-between w-full text-gray-500 text-xs border-t border-t-zinc-200 pt-4">
            <div className="flex items-center">
              <span className="flex items-center gap-1 text-[16px]">
                <LevelMiniIcon /> {test.level}
              </span>
            </div>
            <div className="flex items-center gap-1 text-[16px]">
              <span className="flex items-center gap-1">
                <TimerIcon /> {test.duration}
              </span>
            </div>
            <div className="flex items-center gap-1 text-[16px]">
              <span className="flex items-center gap-1">
                <QuestionIcon /> {test.questions}
              </span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
