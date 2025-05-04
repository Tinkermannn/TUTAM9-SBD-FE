import React from "react";
import Banner from "../components/Banner/Banner";
import { useNavigate } from "react-router-dom";
import Pics from '../assets/BG-Todo.jpg'
import Dashboard from "./Dashboard/Dashboard";

export default function Home() {
    const navigate = useNavigate();

    return (
        <>
            <div
                className="w-full h-screen lg:h-screen md:h-[550px] bg-white bg-cover bg-center bg-no-repeat m-auto">
                <div className="w-full h-full bg-white">
                    <div className="w-full h-full items-center flex m-auto max-w-screen-2xl px-4 sm:px-8 md:px-20">
                        <div className="w-full mt-20 h-[400px] md:h-[200px] lg:h-fit py-6 md:py-10 flex flex-row gap-10 items-center">
                            <div className="w-[80%] md:w-[50%] h-full lg:h-full flex flex-col gap-5 text-left">
                                <a className="font-bold text-black text-5xl lg:text-7xl sm:text-3xl md:text-[3rem]">
                                Satu aplikasi untuk semua tugasmu                                </a>
                                <a className="font-light text-black text-xl sm:text-2xl md:text-xl break-words mt-2    ">
                                Catat, atur, dan selesaikan. <b>Kapan pun kamu mau</b>.
                                </a>
                                <button onClick={() => navigate('/user/register')} className="w-36 h-16 lg:w-36 lg:h-16 bg-orange-500 text-white text-xl flex justify-center items-center font-bold rounded-xl active:bg-orange-600 hover:bg-orange-400 hover:translate-y-1 active:translate-y-2 shadow-xl transition-transform">
                                    Start for Free
                                </button>
                            </div>
                            <div className="hidden w-[50%] h-full md:flex lg:flex justify-end shadow-lg shadow-black/90">
                                <img src={Pics} className="flex w-fit object-fit"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Banner />
        </>
    );
}