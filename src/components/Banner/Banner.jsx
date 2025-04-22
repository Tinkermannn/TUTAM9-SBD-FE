import React from 'react'
import Logo from '../../assets/Navbar/Logo.svg'
export default function Banner() {
  return (
    <div className="w-full h-screen m-auto flex bg-gradient-to-t from-fuchsia-900 via-purple-900 to-black/90 shadow-inner">
      <div className='w-full h-[500px] px-20 flex items-center m-auto max-w-screen-2xl flex-row gap-0'>
        <div className='w-[40%] h-full flex items-center justify-center'>
          <img src={Logo} className='scale-75 rounded-full' />
        </div>
        <div className='w-[60%] h-full flex flex-col justify-center'>
          <p className='text-white text-[3rem] font-semibold underline-offset-4 mb-4'>
            About Us
          </p>
          <p className='text-white text-lg font-light leading-relaxed tracking-wide text-justify'>
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
