import Job1 from "../assets/jobs/job1.jpg";
import Job2 from "../assets/jobs/job2.jpg";
import Job3 from "../assets/jobs/job3.jpg";
import Job4 from "../assets/jobs/job4.jpg";
import Job5 from "../assets/jobs/job5.jpg";
import Job6 from "../assets/jobs/job6.jpg";

export default function JobCards() {
  const jobs = [
    {
      title: "Radar and Software Engineer",
      company: "Leonardo Turkey Havacılık Savunma",
      location: "Ankara / Türkiye (İş Yerinde)",
      logo: Job1,
    },
    {
      title: "Cloud Engineer",
      company: "Çiçeksepeti",
      location: "İstanbul / Türkiye (Hibrit)",
      logo: Job2,
    },
    {
      title: "Technology Audit Executive",
      company: "Getir",
      location: "İstanbul / Türkiye (Hibrit)",
      logo: Job3,
    },
    {
      title: "DevOps Engineer (Mid/Sr)",
      company: "Codeway",
      location: "İstanbul / Türkiye (Hibrit)",
      logo: Job4,
    },
    {
      title: "DevOps Engineer",
      company: "EPAM Systems",
      location: "Türkiye (Hibrit)",
      logo: Job5,
    },
    {
      title: "Dijital Pazarlama Uzmanı",
      company: "HASVET MEDİKAL YAZILIM SAĞLIK",
      location: "Antalya / Türkiye (İş Yerinde)",
      logo: Job6,
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 ">
      {jobs.map((job, index) => (
        <div
          key={index}
          className="border w-full border-zinc-200 hover:border-zinc-950 rounded-lg p-4  bg-white flex items-center space-x-4 cursor-pointer"
        >
          <img
            src={job.logo}
            alt={job.company}
            className="w-12 h-12 object-contain"
          />
          <div>
            <h3 className="text-[16px] font-medium">{job.title}</h3>
            <p className="text-sm text-gray-500">{job.company}</p>
            <p className="text-xs text-gray-400">{job.location}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
