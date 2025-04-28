import React from 'react'
import Logo from '../../assets/Navbar/Logo.svg'

export default function Banner() {
  return (
    <div className="w-full min-h-screen m-auto flex bg-gradient-to-t from-fuchsia-900 via-purple-900 to-black/90 shadow-inner py-12 md:py-0">
      <div className='w-full px-4 sm:px-8 md:px-20 flex flex-col md:flex-row items-center m-auto max-w-screen-2xl gap-6 md:gap-0'>
        <div className='w-full md:w-[40%] flex items-center justify-center'>
          <img src={Logo} className='w-3/4 md:scale-75 rounded-full' />
        </div>
        <div className='w-full md:w-[60%] flex flex-col justify-center'>
          <p className='text-white text-2xl sm:text-3xl md:text-[3rem] font-semibold underline-offset-4 mb-2 md:mb-4 text-center md:text-left'>
            About Us
          </p>
          <p className='text-white text-base md:text-lg font-light leading-relaxed tracking-wide text-justify'>
            Lab Jaringan Komputer atau <span className='italic font-medium'>Network Laboratory Fakultas Teknik UI </span>
            adalah laboratorium pendidikan dan riset yang berada di bawah Departemen Teknik Elektro, Universitas Indonesia.
            Fokus utamanya adalah pengembangan dan pembelajaran jaringan komputer, keamanan jaringan, arsitektur jaringan,
            sistem terdistribusi, serta teknologi komunikasi modern seperti <span className='font-semibold text-purple-300'>cloud computing</span>,
            <span className='font-semibold text-purple-300'>virtualisasi</span>, dan berbagai inovasi menarik lainnya.
          </p>
        </div>
      </div>
    </div>
  );
}