import React from 'react'
import SBDlogo from '../assets/Navbar/SBDLogo.svg'
import Aslab from '../assets/aslabSBD.png'
import ModulSBD from '../components/Modul/ModulSBD';

export default function SBD() {
  return (
    <>
    <div className="w-full h-screen m-auto flex bg-gradient-to-t from-orange-900/80 via-green-400 to-black/90 shadow-inner">
      <div className='w-full h-[570px] py-20 px-20 flex items-center m-auto max-w-screen-2xl flex-col gap-10'>
        <div className='flex flex-row gap-2 items-center justify-center'>
          <img src={SBDlogo} className='w-24' />
          <p className='text-white text-[4rem] font-bold'>Sistem Basis Data</p>
        </div>
        <div className="w-full h-full flex flex-row px-20 justify-center gap-10 items-start">
          <div className="flex flex-col w-[50%] justify-start gap-2">
            <p className="text-white text-[4rem] font-bold tracking-tighter leading-none m-0 p-0">
              Person in Charge
            </p>
            <p className="text-white text-xl mt-2"><b className='font-extrabold'>Yasmin </b>Devina Sinuraya</p>
            <p className="text-white text-xl"><b className='font-extrabold'>Kamal </b>Makarim Iskandar</p>
          </div>
          <div className="flex items-start">
            <img src={Aslab} className="w-80" />
          </div>
        </div>
      </div>
      
    </div>
        <ModulSBD/>
        </>
  );
}
