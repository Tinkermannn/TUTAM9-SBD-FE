import React, { useState, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useNavigate } from "react-router-dom";
import Logo from '../../assets/Navbar/Logo.svg'
import { Link } from "react-router-dom";

export default function Navbar() {
    const navigate = useNavigate();
    const controls = useAnimation();
    const [scrolling, setScrolling] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setScrolling(true);
                controls.start({ opacity: 1, y: 0 });
            } else {
                setScrolling(false);
                controls.start({ opacity: 0, y: -20 });
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [controls]);

    const listStyle =
        "text-white text-lg font-medium w-[15%] h-12 flex items-center justify-center rounded-md transition-all delay-75 cursor-pointer hover:bg-pink-400/80 hover:scale-105 active:bg-pink-500/80 focus:ring-white";

    const menu = [
        { text: "OS", path: "/os" },
        { text: "SBD", path: "/sbd" },
        { text: "DMJ", path: "/dmj" },
    ];

    return (
        <>
            {/* Navbar Transparan di Hero */}
            <div
                className={`fixed top-0 w-full flex justify-center items-center px-20 py-5 z-20 transition-all duration-500 ${scrolling ? "hidden" : "bg-transparent"
                    }`}
            >
                <div className="py-3 w-screen flex justify-between items-center rounded-md">
                    <div className="w-fit h-full">
                        <img
                            src={Logo}
                            className=" cursor-pointer w-[70px]"
                            onClick={() => navigate("/")}
                        />
                    </div>
                    <div className="w-full h-full flex select-none flex-row px-5 justify-between items-center">
                        <div className="w-full h-full">
                            <ul className=" text-white text-lg font-bold">Network Laboratory</ul>
                            <ul className=" text-white text-lg font-normal">Universitas Indonesia</ul>
                        </div>
                        <div className="w-full h-full items-center justify-center">
                            <ul className="list-none w-full flex justify-end cursor-pointer">
                                {menu.map((x) => (
                                    <li key={x.text} className={listStyle}>
                                        <a href={x.path}>
                                            <span>{x.text}</span>
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                </div>
            </div>

            <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={controls}
                transition={{ duration: 0.1 }}
                className={`fixed top-0 w-full flex justify-center items-center px-20 py-5 z-30 ${scrolling ? "block" : "hidden"
                    }`}
            >
                <div
                    className="fixed top-0 w-full flex justify-center items-center px-20 py-5 z-30"
                >
                    <div className="bg-black px-5 py-3 w-screen flex justify-between items-center rounded-md drop-shadow-lg">
                        <div className="w-fit mr-5 shadow-lg shadow-white/50 rounded-full">
                            <img src={Logo} className="h-10 w-fit cursor-pointer rounded-full" onClick={() => navigate("/")} />
                        </div>
                        <div className="w-full h-15 flex select-none items-center">
                            <div className="w-full h-full">
                                <ul className=" text-white text-lg font-normal">Network Laboratory</ul>
                            </div>
                            <div className="w-full h-full items-center justify-center">
                                <ul className="list-none w-full flex justify-end cursor-pointer">
                                    {menu.map((x) => (
                                        <li key={x.text} className={listStyle}>
                                            <Link to={x.path}>
                                                <span>{x.text}</span>
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                    </div>
                </div>
            </motion.div>
        </>
    );
}
