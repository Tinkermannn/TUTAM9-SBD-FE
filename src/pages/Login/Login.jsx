import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Eye, EyeOff } from "react-feather";
import { Slide, ToastContainer, toast } from "react-toastify";
import Logo from "../../assets/Login/login.png";
import axios from "axios";

export default function Login() {
    const navigate = useNavigate();
    const [showPassword, setShowPassword] = useState(false);  
    const [email, setEmail] = useState("");  
    const [password, setPassword] = useState("");  
    const [error, setError] = useState("");  

    const handleLogin = async (e) => {
        e.preventDefault();

        try {
            const response = await toast.promise(
                axios.post(`${import.meta.env.VITE_API}user/login`, null, {
                    params: { email, password }
                }),
                {
                    pending: "Logging in...",
                    success: "Login successful",
                    error: "Login failed"
                }
            );
            console.log("LOGIN RESPONSE:", response.data);

            if (response.data.success) {
                localStorage.setItem("token", response.data.token);
                localStorage.setItem("user_id", response.data.payload.id);  
                localStorage.setItem("email", email);

                await new Promise((resolve) => setTimeout(resolve, 500));
                navigate("/user/dashboard");
            } else {
                setError(response.data.message || "Login failed");
            }
        } catch (error) {
            toast.error(error.response?.data?.message || "Login failed");
        }
    };

    return (
        <>
            <div className="w-full min-h-screen m-auto flex bg-gradient-to-bl from-blue-700 via-sky-500 to-blue-400 max-md:px-4 max-md:py-8 max-md:items-center max-md:justify-center">
                <div className="w-full h-[500px] px-20 pt-[50px] flex items-center justify-start m-auto max-w-screen-2xl flex-row gap-0
                    max-md:h-auto max-md:flex-col max-md:px-0 max-md:pt-0 max-md:w-full max-md:max-w-md">
                    <div className="w-[50%] h-full rounded-l-xl border-blue-800 border-solid border-2 shadow-xl px-5 py-5 text-left bg-white flex-col justify-center
                        max-md:w-full max-md:rounded-xl max-md:h-auto max-md:shadow-lg">
                        <div className="w-full h-[15%] flex items-center flex-col max-md:h-auto max-md:mb-4">
                            <p className="w-full font-semibold text-blue-800 text-2xl max-md:text-center">Sign In</p>
                            <p className="w-full font-normal text-blue-800 text-sm max-md:text-center max-md:mt-2">
                                You can create an account to access our services.
                            </p>
                        </div>
                        <form className="w-full h-[60%] py-5 grid grid-rows-4 gap-20 max-md:h-auto max-md:grid-rows-none max-md:gap-4" onSubmit={handleLogin}>
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
                                        id="passwordInput"
                                        placeholder="Enter your password"
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                    />
                                    <div
                                        className="w-5 h-10 absolute mt-2 flex items-center mr-2 cursor-pointer"
                                        onClick={() => setShowPassword((prev) => !prev)}
                                    >
                                        {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                                    </div>
                                </div>
                            </div>
                            <div className="W-10 h-12 flex items-center justify-center mt-4 max-md:px-4">
                                <button
                                    className="w-full h-10 flex items-center bg-gradient-to-br from-blue-700 to-blue-500 shadow-md rounded-md justify-center"
                                    type="submit"
                                >
                                    <p className="text-white font-medium">Sign In</p>
                                </button>
                                <ToastContainer position="top-center" autoClose={2000} transition={Slide} limit={3} />
                            </div>
                            <div className="flex h-6 py-2 my-2 w-full justify-center items-center gap-1 max-md:flex-col max-md:gap-2">
                                <a className="text-blue-800 max-md:text-center">Don't have an account?</a>
                                <a href="/user/register" className="text-blue-900 font-bold max-md:text-center">Sign Up Now!</a>
                            </div>
                            {error && <div className="text-red-500 text-sm text-center max-md:px-4">{error}</div>}
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