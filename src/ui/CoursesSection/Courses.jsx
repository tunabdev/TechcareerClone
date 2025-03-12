import React from "react";
import CourseCards from "../../components/CourseCards";

function Courses() {
  return (
    <div className="bg-white py-12 ">
      <div className="mx-auto px-6 flex flex-col gap-4 max-w-[1200px] ">
        <div>
          {" "}
          <div className="flex flex-col gap-2">
            <div>
              <h1 className="text-4xl font-medium">Eğitimlerimiz</h1>
            </div>
            <div>
              <p className="text-lg text-zinc-400">
                Teknoloji sektörüne özel hazırlanan ücretsiz yazılım
                eğitimlerini takip et, tamamla ve video eğitimler sonunda
                alacağın sertifikan ile özgeçmişini zenginleştir!
              </p>
            </div>
          </div>
          <CourseCards />
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

export default Courses;
