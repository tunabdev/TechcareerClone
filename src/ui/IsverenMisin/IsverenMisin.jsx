import EmailLogo from "../../assets/svg/isverenmisin/email";

export default function EmployerContact() {
  return (
    <div className="bg-gray-800">
      <div className="mx-auto px-6  flex flex-col gap-4 max-w-[1200px] ">
        <div className=" text-white py-8 flex flex-col md:flex-row items-center justify-between">
          <div className="mb-4 md:mb-0">
            <h2 className="text-2xl font-medium">İşveren misin?</h2>
            <p className="text-lg font-light">
              Hemen bizimle iletişime geç, aradığın yazılımcıları hızlıca
              bulalım.
            </p>
          </div>
          <div className="flex items-center w-full md:w-auto">
            <div className="relative flex-grow">
              <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                <EmailLogo className="h-6 w-6 fill-gray-500" />
              </span>
              <input
                type="email"
                placeholder="E-mail"
                className="w-full min-w-[565px] bg-white h-14 md:w-64 pl-10 pr-4 py-2 text-gray-900 rounded-md focus:outline-none focus:ring-0"
              />
              <a href="#">
                <button className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-giris hover:bg-giris-hover text-white font-medium w-24 h-10 rounded-md cursor-pointer">
                  Gönder
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
