import TrainingIcon from "../../assets/svg/trainingbanner/TrainingIcon";

export default function TrainingBanner() {
  return (
    <div className="bg-white">
      <div className="mx-auto flex flex-col gap-4 max-w-[1200px] ">
        <div className="flex items-center py-4 px-6">
          {/* Icon */}
          <div className="flex items-center justify-center w-[60px] h-[60px] mr-8">
            <TrainingIcon />
          </div>

          {/* Text Content */}
          <div className="flex-1">
            <h2 className="text-2xl font-medium text-black">
              Eğitimlerimizi Gördün Mü?
            </h2>
            <p className="text-gray-500 text-lg">
              Teknoloji sektöründe en çok kullanılan ücretsiz yazılım
              eğitimlerini takip et, tamamla ve yeteneklerini geliştir!
            </p>
          </div>

          {/* Button */}
          <button className="bg-giris cursor-pointer min-w-[144px] min-h-[42px]  text-white text-sm px-4 py-2 rounded-sm font-medium hover:bg-giris-hover transition">
            Hemen Keşfet
          </button>
        </div>
      </div>
    </div>
  );
}
