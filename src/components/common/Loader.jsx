import React from "react";
import "./Loader.css"; 

function Loader() {
  const dots = Array.from({ length: 15 });

  return (
    <section className="flex justify-center items-center h-screen w-full bg-gray-100 relative">
      <div className="relative w-[100px] h-[100px]">
        {dots.map((_, index) => (
          <span
            key={index}
            className="dot absolute w-2.5 h-2.5 bg-black rounded-full"
            style={{
              transform: `rotate(${index * (360 / 15)}deg) translateY(35px)`,
              animationDelay: `${index * 0.1}s`,
            }}
          />
        ))}
      </div>
    </section>
  );
}

export default Loader;
