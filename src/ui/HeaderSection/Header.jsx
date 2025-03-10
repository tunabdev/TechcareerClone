import React from "react";
import TechCareerLogo from "../../assets/svg/techcareerlogo";
import SearchIcon from "../../assets/svg/searchicon";
import cn from "classnames";
import { Input } from "@mui/material";

import "@fontsource/roboto/500.css";
import "@fontsource/roboto/600.css";
function Header() {
  return (
    <header className="mx-[112.5px] px-8 flex w-full min-h-[68px] text-sm transition-all">
      <div className="flex items-center max-w-[1152px]">
        <div className="flex items-center ">
          <a href="#">
            <TechCareerLogo className="cursor-pointer" />
          </a>
        </div>
        <div className="flex ml-8 items-center justify-between grow-1 w-full ">
          <div className="flex gap-6 ">
            <div className="relative">
              <div>
                <input
                  placeholder="Etkinlik, İş İlanı, Blog Ara"
                  className="py-[7px] px-1 min-w-[247px] placeholder:text-[14px] h-9 relative border rounded-md border-gray-300 placeholder:text-sm placeholder:text-gray-400 pl-12 hover:border-zinc-900  "
                ></input>

                <SearchIcon className="absolute top-[6px] left-4 h-6 fill-gra " />
              </div>
            </div>

            <button className="font-medium hover:text-link-hover cursor-pointer ">
              <a href="#">Etkinlikler</a>
            </button>
            <button className="font-medium hover:text-link-hover cursor-pointer">
              <a href="#">İş İlanları</a>
            </button>
            <button className="font-medium hover:text-link-hover cursor-pointer">
              <a href="#">Eğitimler</a>
            </button>
            <button className="font-medium hover:text-link-hover cursor-pointer">
              <a href="#">
                <span className="text-link-hover">●</span> Testler
              </a>
            </button>
            <button className="font-medium hover:text-link-hover cursor-pointer">
              <a href="#">Komünite</a>
            </button>
          </div>
          <button className="px-4 py-[6px] h-9  rounded-sm bg-giris hover:bg-giris-hover text-white cursor-pointer">
            Giriş / Üye Ol
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;
