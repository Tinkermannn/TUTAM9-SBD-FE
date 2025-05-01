import React, { useState, useEffect } from "react";
import { motion, useAnimation, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";
import Logo from '../../assets/LogoMadura.png';
import { Link } from "react-router-dom";

export default function Navbar() {
    const navigate = useNavigate();
    const controls = useAnimation();
    const [scrolling, setScrolling] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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

    const toggleMobileMenu = () => {
        setMobileMenuOpen(!mobileMenuOpen);
    };

    const listStyle =
        "text-white text-lg font-medium h-12 flex flex-1 basis-32 max-w-32 items-center justify-center rounded-md transition-all delay-75 cursor-pointer hover:bg-blue-400/80 hover:scale-105 active:bg-blue-500/80 focus:ring-white";

    const mobileListStyle =
        "text-white text-xl font-medium w-full py-4 flex items-center justify-center rounded-md transition-all delay-75 cursor-pointer hover:bg-blue-400/80 active:bg-blue-500/80";

    const menu = [
        { text: "Login", path: "/user/login" },
        { text: "Register", path: "/user/register" },
        { text: "Dashboard", path: "/user/dashboard" },
    ];

    // Burger menu icon
    const BurgerMenuIcon = ({ isOpen }) => (
        <div className="flex flex-col justify-center items-center w-8 h-8 cursor-pointer">
            <span className={`block w-6 h-0.5 bg-white mb-1.5 transition-transform ${isOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
            <span className={`block w-6 h-0.5 bg-white mb-1.5 transition-opacity ${isOpen ? 'opacity-0' : ''}`}></span>
            <span className={`block w-6 h-0.5 bg-white transition-transform ${isOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
        </div>
    );

    return (
        <>
            {/* Desktop Navbar - Transparent at top */}
            <div
                className={`fixed top-0 w-full flex justify-center items-center px-4 md:px-20 py-5 z-20 transition-all duration-500 ${scrolling ? "hidden" : "bg-transparent"
                    }`}
            >
                <div className="py-3 w-screen flex justify-between items-center rounded-md flex-1">

                    <div className="w-full h-full flex select-none flex-row justify-between items-center">
                        <div onClick={() => navigate("/")} className="w-28 hidden lg:flex md:flex  h-full flex-row items-center gap-3">
                            <img src={Logo} className="hidden md:block lg:block w-28" />
                        </div>

                        <div onClick={() => navigate("/")} className="w-36 h-full flex flex-row items-center gap-3">
                            <a className="text-white text-lg flex font-semibold cursor-pointer">Madura Store</a>
                        </div>

                        {/* Desktop Menu */}
                        <div className="hidden md:block w-full h-full items-center justify-center">
                            <ul className="list-none w-auto flex justify-end cursor-pointer">
                                {menu.map((x) => (
                                    <li key={x.text} className={listStyle}>
                                        <a href={x.path}>
                                            <span>{x.text}</span>
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Mobile Burger Button */}
                        <div className="md:hidden flex justify-end">
                            <button onClick={toggleMobileMenu} className="focus:outline-none" aria-label="Toggle menu">
                                <BurgerMenuIcon isOpen={mobileMenuOpen} />
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Desktop Navbar - Solid when scrolling */}
            <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={controls}
                transition={{ duration: 0.1 }}
                className={`fixed top-0 w-full flex justify-center items-center px-4 md:px-20 py-5 z-30 ${scrolling ? "block" : "hidden"
                    }`}
            >
                <div className="fixed top-0 w-full flex justify-center items-center px-4 md:px-20 py-5 z-30">
                    <div className="bg-gradient-to-b from-blue-700 via-sky-500 to-blue-400 px-5 py-3 w-screen flex justify-between items-center rounded-md drop-shadow-lg">
                        <div className="w-full h-15 flex select-none items-center">
                            <div onClick={() => navigate("/")} className="w-full h-full flex flex-row items-center">
                                <img src={Logo} className="w-14 flex" />
                                <a className="text-white text-lg flex font-normal cursor-pointer">Madura Store</a>
                            </div>

                            {/* Desktop Menu */}
                            <div className="hidden md:block w-full h-full items-center justify-center">
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

                            {/* Mobile Burger Button */}
                            <div className="md:hidden flex justify-end">
                                <button onClick={toggleMobileMenu} className="focus:outline-none" aria-label="Toggle menu">
                                    <BurgerMenuIcon isOpen={mobileMenuOpen} />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </motion.div>

            {/* Mobile Menu Dropdown */}
            <AnimatePresence>
                {mobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="fixed top-16 left-0 w-full z-40 px-4 py-2 rounded-b-lg shadow-lg"
                    >
                        <div className="flex flex-col items-center w-full">
                            {menu.map((item) => (
                                <Link
                                    key={item.text}
                                    to={item.path}
                                    className={mobileListStyle}
                                    onClick={() => setMobileMenuOpen(false)}
                                >
                                    {item.text}
                                </Link>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}