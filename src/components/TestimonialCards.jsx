import React from "react";
export default function Card({ title, description, buttonText }) {
  return (
    <div className="bg-white border border-zinc-200 hover:border-zinc-950  rounded-lg p-6 text-center flex flex-col justify-between">
      <div>
        <h2 className="text-2xl font-medium mb-3">{title}</h2>
        <p className="text-lg text-zinc-400 mb-4">{description}</p>
      </div>
      <a href="#">
        <button className=" bg-giris hover:bg-giris-hover transition text-white font-medium text-sm py-3 px-[6px] rounded w-full cursor-pointer">
          {buttonText}
        </button>
      </a>
    </div>
  );
}
