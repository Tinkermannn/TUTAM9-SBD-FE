import React from "react";
import Landing from '../assets/lab-icell.jpg'
import Banner from "../components/Banner/Banner";

export default function Home() {

    return (
        <>
            <div
                className="w-full h-[550px] bg-cover bg-center bg-no-repeat m-auto"
                style={{
                    backgroundImage: `url(${Landing})`,
                }}
            >
                <div className="w-full h-full bg-gradient-to-r from-black/50 via-fuchsia-600/20 to-black/50 ">
                    <div className="w-full h-full items-center flex m-auto max-w-screen-2xl px-20  ">
                        <div className="w-full h-[200px] py-10">
                            <div className="w-[50%] h-full flex flex-col">
                                <a className="font-bold text-white text-[3rem] break-words">
                                Network Laboratory UI
                                </a>
                                <a className="font-normal text-white text-[2rem] break-words">
                                #ConnectingUs
                                </a>
                                <a className="font-normal text-white text-[1rem] break-words pt-5">
                                Universitas Indonesia, Depok, Jawa Barat
                                </a>
                            </div>
                        </div>
                    </div>
                   
                    <div className="w-full h-10 top-0 mt-[-20px] flex items-center justify-center">
                        <div className="h-full w-48 bg-white border-2 border-purple-700 rounded-md flex items-center justify-center">
                            <p className="text-center font-medium text-purple-600">
                                Check Ours!
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <Banner/>
        </>
    );
}
