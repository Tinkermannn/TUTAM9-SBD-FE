import React from 'react';
import Logo from '../../assets/LogoMadura.png';
import Batik from '../../assets/batik.png'; // Batik sebagai motif background

export default function Banner() {
  return (
    <div
      className="w-full min-h-screen flex items-center relative py-12 md:py-0 overflow-hidden"
      style={{
        backgroundImage: `url(${Batik})`,
        backgroundSize: 'contain',
        backgroundRepeat: 'repeat',
        backgroundBlendMode: 'overlay',
        backgroundColor: '#1e3a8a', // Tailwind blue-900
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/80 via-sky-800/70 to-blue-950/80 z-0" />

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
            About Us 🛍️
          </p>
          <p className="text-base md:text-lg font-light leading-relaxed tracking-wide text-justify">
            <span className="italic font-medium text-purple-200">Madura Store</span>{' '}
            <span className="font-semibold text-sky-300">
              — toko yang buka 25 jam sehari, 8 hari seminggu!
            </span>{' '}
            <br />
            <span className="font-semibold text-sky-400">
              Kalau kamu butuh sesuatu jam 3 pagi, jangan cari di minimarket — cari di Madura Store! 🌙✨
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}
