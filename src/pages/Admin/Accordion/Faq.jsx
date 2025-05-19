import React from "react";

function Faq({ curElem, onToggle, isActive }) {
  return (
    <li className="shadow-lg p-6 rounded border-l-4 border-white list-none">
      <div className="flex justify-between items-center">
        <p className="font-bold font-syne tracking-wide text-[1.3rem] text-white">
          {curElem.question}
        </p>
        <button
          onClick={onToggle}
          className={`ml-4 px-4 h-10 rounded cursor-pointer border-0 uppercase text-[15px] tracking-wider transition-all duration-500 shadow hover:text-white ${
            isActive
              ? "bg-red-600 text-white hover:shadow-[0px_7px_19px_0px_rgb(167,54,13)]"
              : "bg-teal-500 hover:shadow-[0_0_8px_rgba(0,0,0,0.05)]"
          }`}
        >
          {isActive ? "Close" : "Show"}
        </button>
      </div>
      {isActive && <p className="text-white mt-2">{curElem.answer}</p>}
    </li>
  );
}

export default Faq;