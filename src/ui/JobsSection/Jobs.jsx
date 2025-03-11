import React from "react";
import JobCards from "../../components/JobsCards";

function Jobs() {
  return (
    <div className="bg-gray-50 py-12 ">
      <div className="mx-auto px-6 flex flex-col gap-8 max-w-[1200px] ">
        <div className="flex flex-col gap-2">
          <div>
            <h1 className="text-4xl font-medium">İş İlanlarımız</h1>
          </div>
          <div>
            <p className="text-lg text-zinc-400">
              Teknoloji kariyerinde ilerlemek için doğru yerdesin. Teknoloji iş
              ilanlarını keşfetmeye hemen başla!
            </p>
          </div>
        </div>
        <JobCards />
        <div>
          <a href="#">
            <button className="w-[121px] h-[40px] rounded-sm bg-transparent text-giris border-giris border text-sm cursor-pointer">Tümünü Gör</button>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Jobs;
