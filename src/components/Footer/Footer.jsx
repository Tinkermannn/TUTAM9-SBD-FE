import React from "react";
import { Facebook, Instagram, Linkedin, Mail, Phone } from "react-feather";
import Logo from '../../assets/Navbar/Logo.svg';

export default function Footer() {
    return (
        <>
            <div className="w-full bg-gradient-to-b from-fuchsia-900 via-purple-900 to-black/90 border-none">
                <div className="w-full max-w-screen-2xl mx-auto px-6 md:px-20 flex flex-col md:flex-row justify-between gap-10">
                    {/* Left Section */}
                    <div className="w-full md:w-[45%] flex flex-col gap-4">
                        <div className="flex items-center gap-4">
                            <img src={Logo} className="w-16 md:w-20" alt="Logo" />
                            <div className="flex flex-col">
                                <p className="text-white text-2xl md:text-3xl font-semibold">
                                    Network Laboratory
                                </p>
                                <p className="text-white text-sm md:text-base font-light">
                                    #ConnectingUs
                                </p>
                                <p className="text-white text-sm md:text-base font-light">
                                    #TakeThe<b className="font-extrabold">Net</b>Step
                                </p>
                            </div>
                        </div>

                        <div className="flex flex-col gap-2">
                            <p className="text-lg md:text-xl text-white font-semibold">Office</p>
                            <p className="text-sm md:text-base text-white font-light text-justify">
                                Electrical Engineering Department, 2nd floor Universitas Indonesia Depok, 16424
                            </p>

                            <div className="flex flex-col gap-2 pt-2">
                                <div className="flex items-center gap-2">
                                    <Phone size={15} color="white" />
                                    <p className="text-sm text-white font-light">@pyn7863d</p>
                                </div>
                                <div className="flex items-center gap-2">
                                    <Mail size={15} color="white" />
                                    <p className="text-sm text-white font-light">netlab.dteftui@gmail.com</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Section */}
                    <div className="w-full md:w-[30%] flex flex-col gap-4">
                        <p className="text-white text-lg md:text-xl font-semibold">Follow Our Socials</p>
                        <div className="flex gap-4">
                            <a>
                                <Facebook size={24} color="white" />
                            </a>
                            <a href="https://www.linkedin.com/company/netlabui/">
                                <Linkedin size={24} color="white" />
                            </a>
                            <a href="https://www.instagram.com/netlab.dteftui/">
                                <Instagram size={24} color="white" />
                            </a>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="w-full flex bg-gradient-to-t from-black/90 to-black/5 mt-8 py-4">
                    <div className="w-full max-w-screen-2xl mx-auto flex justify-center">
                        <p className="font-normal text-white text-sm md:text-base">© 2025</p>
                    </div>
                </div>
            </div>
        </>
    );
}
