import React, { useState, useEffect } from "react";
import { Eye, EyeOff } from "react-feather";
import { useNavigate } from "react-router-dom";
import Logo from '../../assets/Login/login.png'
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';

export default function Register() {
    const navigate = useNavigate();
    const [showPassword, setShowPassword] = useState(false); // State untuk password input
    const [showConfirmPassword, setShowConfirmPassword] = useState(false); // State untuk confirm password input

    const [email, setEmail] = useState(""); // State untuk email
    const [password, setPassword] = useState(""); // State untuk password
    const [name, setName] = useState(""); // State untuk password
    const [confirmPassword, setConfirmPassword] = useState(""); // State untuk confirm password
    const [error, setError] = useState(""); // State untuk menyimpan pesan error
    const passwordRegex = /^(?=.*[0-9])(?=.*[!@#$%^&*(),.?":{}|<>])(?=.*[a-zA-Z]).{8,}$/;

    const handleRegister = async (e) => {
        e.preventDefault(); // Mencegah form submit default

        if (password !== confirmPassword) {
            toast.error("Password tidak cocok.")
            return;
        }

        if (!passwordRegex.test(password)) {
            toast.info("Password harus ≥ 8 karakter, mengandung huruf, angka, dan simbol.");
            return;
          }

        try {
            const response = await toast.promise(
                axios.post(`${import.meta.env.VITE_API}user/register`, null, {
                    params: {
                        name,
                        email,
                        password
                    }
                }),
                {
                    pending: "Registering...",
                    success: "Registration successful",
                }
            );

            await new Promise(resolve => setTimeout(resolve, 1500));
            navigate("/user/login");

        } catch (error) {
            console.error(error);
            toast.error(error.response?.data?.message);
        }
        
    };

    return (
        <>
            <div className="w-full min-h-screen m-auto flex bg-gradient-to-bl from-blue-600 via-sky-500 to-blue-400 max-md:px-4 max-md:py-8 max-md:items-center max-md:justify-center">
                <div className="w-full h-[600px] px-20 pt-24 flex items-center justify-start m-auto max-w-screen-2xl flex-row gap-0 
                    max-md:h-auto max-md:flex-col max-md:px-0 max-md:pt-0 max-md:w-full max-md:max-w-md">
                    <div className="w-[50%] h-full rounded-l-xl border-blue-800 border-solid border-2 shadow-xl px-5 py-5 text-left bg-white
                        max-md:w-full max-md:rounded-xl max-md:h-auto max-md:shadow-lg">
                        <div className="w-full h-[11%] flex items-center flex-col max-md:h-auto max-md:mb-4">
                            <p className="w-full font-semibold text-blue-800 text-2xl max-md:text-center">
                                Sign Up
                            </p>
                            <p className="w-full font-normal text-blue-800 text-sm max-md:text-center max-md:mt-2">
                                You can create an account to access our services.
                            </p>
                        </div>
                        <form className="w-full h-[60%] py-5 grid grid-rows-4 gap-20 max-md:h-auto max-md:grid-rows-none max-md:gap-4" onSubmit={handleRegister}>
                            <div className="max-md:px-4">
                                <label className="font-semibold text-blue-700">Name</label>
                                <input
                                    className="w-full h-10 border-solid border-blue-400 focus:border-blue-700 outline-none border-2 rounded-md py-2 px-2 mt-2"
                                    type="text"
                                    name="name"
                                    placeholder="John Doe"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                />
                            </div>
                            <div className="max-md:px-4">
                                <label className="font-semibold text-blue-700">Email</label>
                                <input
                                    className="w-full h-10 border-solid border-blue-400 focus:border-blue-700 outline-none border-2 rounded-md py-2 px-2 mt-2"
                                    type="email"
                                    name="email"
                                    placeholder="example@email.com"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                            </div>
                            <div className="max-md:px-4">
                                <label className="font-semibold text-blue-700">Password</label>
                                <div className="w-full flex flex-row justify-end">
                                    <input
                                        className="w-[100%] h-10 border-solid border-blue-400 border-2 rounded-md py-2 px-2 mt-2 focus:border-blue-700 outline-none"
                                        type={showPassword ? "text" : "password"}
                                        name="password"
                                        placeholder="Enter your password"
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                    />
                                    <div className="w-5 h-10 absolute mt-2 flex items-center mr-2 cursor-pointer"
                                        onClick={() => setShowPassword((prev) => !prev)}>
                                        {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                                    </div>
                                </div>
                            </div>
                            <div className="max-md:px-4">
                                <label className="font-semibold text-blue-700">Confirm Password</label>
                                <div className="w-full flex flex-row justify-end">
                                    <input
                                        className="w-[100%] h-10 border-solid border-blue-400 border-2 rounded-md py-2 px-2 mt-2 focus:border-blue-700 outline-none"
                                        type={showConfirmPassword ? "text" : "password"}
                                        name="passwordConfirm"
                                        placeholder="Re-enter your password"
                                        value={confirmPassword}
                                        onChange={(e) => setConfirmPassword(e.target.value)}
                                    />
                                    <div className="w-5 h-10 absolute mt-2 flex items-center mr-2 cursor-pointer"
                                        onClick={() => setShowConfirmPassword((prev) => !prev)}>
                                        {showConfirmPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                                    </div>
                                </div>
                            </div>

                            <div className="flex items-center justify-center mt-1 flex-col max-md:px-4">
                                <button className="w-full h-10 flex items-center bg-gradient-to-br from-blue-700 to-blue-500 shadow-md rounded-md justify-center" type="submit">
                                    <p className="text-white font-medium">Sign Up</p>
                                </button>
                                <div className="flex h-6 py-2 my-2 w-full justify-center items-center gap-1">
                                    <a className="text-blue-800">Already have an account?</a>
                                    <a href="/user/login" className="text-blue-900 font-bold">Login Now!</a>
                                </div>
                                <ToastContainer
                                    position="top-center"
                                    autoClose={2000}
                                    limit={3} />
                            </div>

                            {/* Menampilkan pesan error jika ada */}
                            {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
                        </form>
                    </div>
                    <div className="w-[50%] h-full flex flex-col bg-cover rounded-r-xl bg-gradient-to-r from-blue-600 via-sky-500 to-blue-400 overflow-hidden
                        max-md:hidden">
                        <div className="w-full h-full bg-gradient-to-r">
                            <div className="w-full h-full flex items-center justify-center">
                                <img src={Logo} className="scale-75 hover:scale-100 transition-transform duration-100" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}