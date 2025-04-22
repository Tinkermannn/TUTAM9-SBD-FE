import React from "react";
import { Facebook, Instagram, Linkedin, Mail, Phone } from "react-feather";
import Logo from '../../assets/Navbar/Logo.svg'

export default function Footer() {
    return (
        <>
            <div className="w-full h-[350px] bg-gradient-to-b from-fuchsia-900 via-purple-900 to-black/90 shadow-inner border-none">
                <div className=" w-full h-full px-20 py-10 max-w-screen-2xl m-auto flex flex-row justify-between">
                    <div className="w-[45%] h-[full] flex flex-col gap-2">
                        <div className="w-full h-[45%] flex flex-row gap-2 items-center">
                            <img src={Logo} className="w-[20%]" />
                            <div className="w-full h-full flex flex-col text-justify tracking-wide">
                                <p className="w-full text-white text text-[2rem] font-semibold">
                                    Network Laboratory
                                </p>
                                <p className="w-full text-white text text-[1rem] font-light">
                                    #ConnectingUs
                                </p>
                                <p className="w-full text-white text text-[1rem] font-light">
                                    #TakeThe<b className="font-extrabold">Net</b>Step
                                </p>
                            </div>
                        </div>
                        <div className="w-full h-full flex flex-col gap-2">
                            <p className="text-xl text-white font-semibold">Office</p>
                            <div className="h-[30%]">
                                <p className="text-sm text-white font-light text-justify">Electrical Engineering Department, 2nd floor Universitas Indonesia Depok, 16424</p>
                            </div>
                            <div className="flex flex-col gap-2">
                                <div className="w-full flex flex-row gap-2 items-center">
                                    <Phone size={15} color="white" />
                                    <p className="text-sm text-white font-light text-justify">@pyn7863d</p>
                                </div>
                                <div className="w-full flex flex-row gap-2 items-center">
                                    <Mail size={15} color="white" />
                                    <p className="text-sm text-white font-light text-justify">netlab.dteftui@gmail.com</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="w-[30%] h-full flex flex-col gap-2">
                        <p className="text-white text-lg font-semibold">Follow Our Socials</p>
                        <div className="flex flex-row items-center gap-3 -ml-1">
                            <a>
                                <Facebook size={20} color="white" />
                            </a>
                            <a href="https://www.linkedin.com/company/netlabui/">
                                <Linkedin size={20} color="white" />
                            </a>
                            <a href="https://www.instagram.com/netlab.dteftui/">

                                <Instagram size={20} color="white" />
                            </a>
                        </div>
                    </div>
                </div>
                <div className="w-full flex bg-gradient-to-b from-black/90 to-black relative bottom-0 ">
                    <div className="w-full h-full flex justify-center px-20 max-w-screen-2xl m-auto">
                        <p className="font-normal text-white">© 2025</p>
                    </div>
                </div>
            </div>
        </>
    );
}
