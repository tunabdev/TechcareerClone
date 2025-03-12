import React from "react";
import QuizzesCards from "../../components/QuizzesCards";

function Quizzes() {
  return (
    <div className="bg-gray-50 py-12 ">
      <div className="mx-auto px-6 flex flex-col gap-4 max-w-[1200px] ">
        <div>
          {" "}
          <div className="flex flex-col gap-2">
            <div>
              <h1 className="text-4xl font-medium">Testlerimiz</h1>
            </div>
            <div>
              <p className="text-lg text-zinc-400">
                Teknoloji sektörüne özel hazırlanan ücretsiz testler ile teknik
                yetkinliklerini anında ölç, aldığın puanları özgeçmişine ekle ve
                bir adım öne çık!
              </p>
            </div>
          </div>
          <QuizzesCards />
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

export default Quizzes;
