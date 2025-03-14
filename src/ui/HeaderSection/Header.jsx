import React from "react";
import TechCareerLogo from "../../assets/svg/techcareerlogo";
import SearchIcon from "../../assets/svg/searchicon";
import cn from "classnames";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/600.css";
import { NavLink } from "react-router";
function Header() {
  return (
    <header className=" flex min-h-[68px] justify-center text-sm transition-all shadow-lg  ">
      <div className="flex   items-center max-w-[1152px] w-full ">
        <div className="flex items-center ">
          <NavLink to={"/"} >
            <TechCareerLogo className="cursor-pointer " />
          </NavLink>
        </div>
        <div className="flex ml-6 items-center grow font-normal justify-between">
          <div className="flex gap-6 ">
            <div className="relative">
              <div>
                <input
                  placeholder="Etkinlik, İş İlanı, Blog Ara"
                  className="py-[7px] px-1 min-w-[247px] placeholder:text-[14px] h-9 relative border rounded-sm border-gray-300 placeholder:text-sm placeholder:text-gray-400 pl-12 hover:border-zinc-900 focus:outline-none focus:border-zinc-900
                   "
                ></input>

                <SearchIcon className="absolute top-[6px] left-4 h-6 fill-zinc-400  " />
              </div>
            </div>
            <div className="relative group inline-block my-auto">
              {" "}
              <button className="font-medium hover:text-link-hover cursor-pointer ">
                <a href="#">Etkinlikler</a>
              </button>
              <div className="absolute left-0 mt-2 min-w-[150px] bg-white border border-gray-200 border-t-[4px] border-t-link-hover rounded-md shadow-sm opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                <ul className="py-2">
                  <li>
                    <a
                      href="#"
                      className="block px-4 py-2 text-gray-700 hover:text-link-hover"
                    >
                      Bootcamp
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="block px-4 py-2 text-gray-700 hover:text-link-hover"
                    >
                      Hackaton
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="block px-4 py-2 text-gray-700 hover:text-link-hover"
                    >
                      Hiring Challenge
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="block px-4 py-2 text-gray-700 hover:text-link-hover"
                    >
                      Tüm Etkinlikler
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            {/*  */}
            <div className="relative group inline-block my-auto">
              {/* Buton */}
              <button className="font-medium hover:text-link-hover cursor-pointer">
                <a href="#">İş İlanları</a>
              </button>

              {/* Tooltip */}
              <div className="absolute pl-4 py-4 pr-6 left-1/2 text-xs -translate-x-1/2 mt-2 w-max bg-gray-900 text-white rounded-md opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-opacity duration-200">
                Yeni işinle sen de hayalindeki kariyere kavuşabilirsin!
                <div>Senin için topladığımız iş fırsatlarını şimdi incele!</div>
                {/* Tooltip Arrow */}
                <div className="absolute left-1/2 -translate-x-1/2 -top-1 w-0 h-0 border-l-4 border-l-transparent border-r-4 border-r-transparent border-b-4 border-b-gray-900"></div>
              </div>
            </div>

            <button className="font-medium hover:text-link-hover cursor-pointer">
              <a href="#">Eğitimler</a>
            </button>
            <button className="font-medium hover:text-link-hover cursor-pointer">
              <NavLink to="/quizzes">
                <span className="text-link-hover">●</span> Testler
              </NavLink>
            </button>
            <div className="relative group inline-block my-auto">
              {" "}
              <button className="font-medium hover:text-link-hover cursor-pointer ">
                <a href="#">Komunite</a>
              </button>
              <div className="absolute z-100 left-0 mt-2 min-w-[150px] bg-white border border-gray-200 border-t-[4px] border-t-link-hover rounded-md shadow-sm opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                <ul className="py-2">
                  <li>
                    <a
                      href="#"
                      className="block px-4 py-2 text-gray-700 hover:text-link-hover"
                    >
                      Komüniteye Katıl
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="block px-4 py-2 text-gray-700 hover:text-link-hover"
                    >
                      TDC
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="block px-4 py-2 text-gray-700 hover:text-link-hover"
                    >
                      Blog
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="block px-4 py-2 text-gray-700 hover:text-link-hover"
                    >
                      Podcast
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="block px-4 py-2 text-gray-700 hover:text-link-hover"
                    >
                      Teknik Sözlük
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="block px-4 py-2 text-gray-700 hover:text-link-hover"
                    >
                      Mülakat Soruları
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <button className="px-4 py-[6px] h-9   rounded-sm bg-giris  hover:bg-giris-hover text-white cursor-pointer">
            Giriş / Üye Ol
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;
