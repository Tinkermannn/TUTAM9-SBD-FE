import React from 'react';
import Logo from '../../assets/todologo.png';
import Batik from '../../assets/batik.png';

export default function Banner() {
  return (
    <div
      className="w-full min-h-screen flex items-center relative py-12 md:py-0 overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-orange-900/80 via-orange-800/70 to-orange-950/80 z-0" />

      <div className="w-full px-4 sm:px-8 md:px-20 flex flex-col md:flex-row items-center justify-center max-w-screen-2xl m-auto gap-8 md:gap-0 relative z-10">
        <div className="w-full md:w-[40%] flex items-center justify-center animate-fade-in-left">
          <img
            src={Logo}
            alt="Logo"
            className="w-3/4 md:scale-75 rounded-full border-4 border-white shadow-lg"
          />
        </div>

        {/* Text */}
        <div className="w-full md:w-[60%] flex flex-col justify-center animate-fade-in-up text-white">
          <p className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight mb-4 text-center md:text-left">
            About Us
          </p>
          <p className="text-base md:text-lg font-light leading-relaxed tracking-wide text-justify">
            <span className="italic font-medium text-purple-200">TODos </span>
            <span className="font-semibold text-white text-normal md:text-xl lg:text-2xl">
              adalah solusi dari pengelolaan tugas dan aktivitas
            </span>
            <br />
            <span className="font-semibold text-white text-normal md:text-xl lg:text-2xl">
              dengan metode yang intutif, efektif, dan juga produktif.
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}
