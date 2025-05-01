import React from "react";
import { Facebook, Instagram, Linkedin, Mail, Phone } from "react-feather";
import Logo from '../../assets/LogoMadura.png';

export default function Footer() {
    return (
        <div className="w-full bg-gradient-to-tl from-blue-600 via-sky-500 to-blue-400 border-none">
            <div className="w-full max-w-screen-2xl mx-auto px-6 md:px-20 flex flex-col md:flex-row justify-between gap-10 py-10">
                
                {/* Left Section */}
                <div className="w-full md:w-[45%] flex flex-col gap-4">
                    <div className="flex items-center gap-4">
                        <img src={Logo} className="w-16 md:w-20" alt="Logo" />
                        <div className="flex flex-col">
                            <p className="text-white text-2xl md:text-3xl font-semibold">
                                Madura Store
                            </p>
                            <p className="text-white text-sm md:text-base font-light">
                                #MaduraSelaluBuka
                            </p>
                            <p className="text-white text-sm md:text-base font-light">
                                Buka terus bahkan saat kamu lagi galau.
                            </p>
                        </div>
                    </div>

                    <div className="flex flex-col gap-2">
                        <p className="text-lg md:text-xl text-white font-semibold">Lokasi</p>
                        <p className="text-sm md:text-base text-white font-light text-justify">
                            Ada di mana aja, selama masih ada orang Madura
                        </p>

                        <div className="flex flex-col gap-2 pt-2">
                            <div className="flex items-center gap-2">
                                <Phone size={15} color="white" />
                                <p className="text-sm text-white font-light">+62 813-MADURA-STORE</p>
                            </div>
                            <div className="flex items-center gap-2">
                                <Mail size={15} color="white" />
                                <p className="text-sm text-white font-light">madurastore@buka24jam.id</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Right Section */}
                <div className="w-full md:w-[30%] flex flex-col gap-4">
                    <p className="text-white text-lg md:text-xl font-semibold">Follow Sosial Media </p>
                    <div className="flex gap-4">
                        <a href="https://facebook.com/madurastore" title="Facebook Madura Store" target="_blank" rel="noopener noreferrer">
                            <Facebook size={24} color="white" />
                        </a>
                        <a href="https://www.linkedin.com/company/madurastore/" title="LinkedIn Kami" target="_blank" rel="noopener noreferrer">
                            <Linkedin size={24} color="white" />
                        </a>
                        <a href="https://www.instagram.com/madurastore24jam/" title="Follow IG!" target="_blank" rel="noopener noreferrer">
                            <Instagram size={24} color="white" />
                        </a>
                    </div>
                </div>
            </div>

            {/* Bottom Bar */}
            <div className="w-full flex bg-gradient-to-b from-sky-400/10 via-black/50 to-black/60 py-4">
                <div className="w-full max-w-screen-2xl mx-auto flex justify-center">
                    <p className="font-normal text-white text-sm md:text-base">
                        © 2025 Madura Store
                    </p>
                </div>
            </div>
        </div>
    );
}
