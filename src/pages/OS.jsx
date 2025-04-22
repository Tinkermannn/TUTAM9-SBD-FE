import React from 'react'
import OSlogo from '../assets/Navbar/OSLogo.svg'
import Aslab from '../assets/aslabOS.png'

export default function OS() {
  return (
    <div className="w-full h-screen m-auto flex bg-gradient-to-t from-fuchsia-900 via-purple-900 to-black/90 shadow-inner">
        <div className='w-full h-[500px] px-20 flex items-center m-auto max-w-screen-2xl flex-col gap-0'>
          <div className='flex flex-row gap-2 items-center justify-center'>
            <img src={OSlogo} className='w-24'/>
            <p className='text-white text-[3rem] font-bold'>Operating System</p>
          </div>
          <div className='w-full h-full flex flex-row px-20 justify-center gap-10'>
            <div className='flex border-black rounded-md flex-col'>
                <p className='text-white text-2xl underline font-bold'>Person in Charge</p>
                <p className='text-white text-xl'>George William Thomas</p>
                <p className='text-white text-xl'>Fairuz Muhammad</p>
            </div>
            <div className='h-full flex items-center'>
              <img src={Aslab} className='flex w-80'/>
            </div>
          </div>
        </div>
    </div>
  );
}
