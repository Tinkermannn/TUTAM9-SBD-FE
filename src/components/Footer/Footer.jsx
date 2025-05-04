import React from "react";
import { Facebook, Instagram, Linkedin, Mail, Phone } from "react-feather";
import Logo from '../../assets/todologo.png';

export default function Footer() {
    return (
        <div className="w-full bg-white shadow-inner shadow-black/10">
            <div className="w-full max-w-screen-2xl mx-auto px-6 md:px-20 flex flex-col md:flex-row justify-between gap-10 py-10">
                
                {/* Left Section */}
                <div className="w-full md:w-[45%] flex flex-col gap-4">
                    <div className="flex items-center gap-4">
                        <img src={Logo} className="w-16 md:w-24 lg:w-24" alt="Logo" />
                        <div className="flex flex-col">
                            <p className="text-black text-2xl md:text-3xl font-semibold">
                                TODos
                            </p>
                            <p className="text-black text-sm md:text-base font-normal">
                                Solusi Management Anda
                            </p>
                            <p className="text-black text-sm md:text-base font-normal leading-relaxed">
                            Catat, atur, dan selesaikan. Kapan pun kamu mau.
                            </p>
                        </div>
                    </div>

                    <div className="flex flex-col gap-2">
                        <p className="text-lg md:text-xl text-black font-semibold">Office</p>
                        <p className="text-sm md:text-base text-black font-normal leading-relaxed text-justify">
                        Engineering Center FTUI Lantai 1 Kampus Baru UI Depok 16424
                        </p>

                        <div className="flex flex-col gap-2 pt-2">
                            <div className="flex items-center gap-2">
                                <Mail size={15} color="black" />
                                <p className="text-sm text-black font-normal">todos@gmail.com</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Right Section */}
                <div className="w-full md:w-[30%] flex flex-col gap-4">
                    <p className="text-black text-lg md:text-xl font-semibold">Follow Sosial Media</p>
                    <div className="flex gap-4">
                        <a href="https://facebook.com/todos" title="Facebook Madura Store" target="_blank" rel="noopener noreferrer">
                            <Facebook size={24} color="black" />
                        </a>
                        <a href="https://www.linkedin.com/company/todos/" title="LinkedIn Kami" target="_blank" rel="noopener noreferrer">
                            <Linkedin size={24} color="black" />
                        </a>
                        <a href="https://www.instagram.com/todos2025/" title="Follow IG!" target="_blank" rel="noopener noreferrer">
                            <Instagram size={24} color="black" />
                        </a>
                    </div>
                </div>
            </div>

            {/* Bottom Bar */}
            <div className="w-full flex bg-white py-4 border-t border-gray-200">
                <div className="w-full max-w-screen-2xl mx-auto flex justify-center">
                    <p className="font-normal text-black text-sm md:text-base">
                        © 2025 TODos
                    </p>
                </div>
            </div>
        </div>
    );
}
