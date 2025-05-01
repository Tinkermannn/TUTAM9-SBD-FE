import React from "react";
import Landing from '../assets/Landing.webp'
import Banner from "../components/Banner/Banner";
import Item from "./Items/Item";

export default function Home() {
    return (
        <>
            <div
                className="w-full h-screen lg:h-screen md:h-[550px] bg-cover bg-center bg-no-repeat m-auto"
                style={{
                    backgroundImage: `url(${Landing})`,    backgroundAttachment: "fixed"

                }}
            >
                <div className="w-full h-full bg-gradient-to-r from-black/40 via-blue-800/30 to-black/40">
                    <div className="w-full h-full items-center flex m-auto max-w-screen-2xl px-4 sm:px-8 md:px-20">
                        <div className="w-full h-[100px] md:h-[200px] lg:h-[200px] py-6 md:py-10">
                            <div className="w-full md:w-[50%] h-full flex flex-col gap-2 text-left">
                                <a className="w-full h-full font-bold text-white text-2xl lg:text-7xl sm:text-3xl md:text-[3rem]">
                                    Madura Store
                                </a>
                                <a className="font-normal text-white text-xl sm:text-2xl md:text-[2rem] break-words mt-2    ">
                                    Buka <b>24 Jam</b>
                                </a>
                                <a className="font-normal text-white text-sm md:text-2xl break-words pt-2 md:pt-5 italic">
                                    #BiruJugaMadura
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Banner/>
            <Item/>
        </>
    );
}