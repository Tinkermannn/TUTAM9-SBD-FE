import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Slide, toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Profile() {
    const navigate = useNavigate();
    const [userData, setUserData] = useState({
        user_id: "",
        username: "",
        email: "",
        profile_image_url: "",
        created_at: "",
    });
    const [image, setImage] = useState(null);
    const [previewImage, setPreviewImage] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        const userId = localStorage.getItem("user_id");
        const email = localStorage.getItem("email");

        if (!userId || !email) {
            toast.warning("You must login first!");
            navigate("/user/login");
            return;
        }

        const fetchUserData = async () => {
            try {
                const res = await axios.get(`${import.meta.env.VITE_API}user/${userId}`, {
                    headers: { Authorization: `Bearer ${userId}` },
                });
                setUserData(res.data.payload);
            } catch (err) {
                toast.error("Failed to fetch user data");
                navigate("/user/login");
            }
        };

        fetchUserData();
    }, [navigate]);

    const handleLogout = () => {
        localStorage.removeItem("user_id");
        localStorage.removeItem("email");
        toast.info("Logged out successfully");
        navigate("/user/login");
    };

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            setImage(file);
            const reader = new FileReader();
            reader.onloadend = () => setPreviewImage(reader.result);
            reader.readAsDataURL(file);
        }
    };

    const handleImageUpload = async () => {
        if (!image) return toast.warn("Please select an image first");
        const userId = localStorage.getItem("user_id");
        setIsLoading(true);

        const formData = new FormData();
        formData.append("profile_image_url", image);
        formData.append("user_id", userId);

        try {
            const res = await axios.put(
                `${import.meta.env.VITE_API}user/update`,
                formData,
                {
                    headers: {
                        Authorization: `Bearer ${userId}`,
                    },
                }
            );
            setIsLoading(false);
            toast.success("Profile image updated successfully");
            setUserData((prev) => ({
                ...prev,
                profile_image_url: res.data.payload.profile_image_url,
            }));
            setImage(null);
            setPreviewImage(null);
            document.getElementById("file-input").value = "";
        } catch (err) {
            setIsLoading(false);
            console.error("Upload error:", err);
            toast.error(err.response?.data?.message || "Failed to upload image");
        }
    };

    return (
        <div className="w-full h-screen m-auto flex items-center justify-center">
            <div className="w-full max-w-screen-2xl h-fit px-20 mt-20">
                <div className="flex flex-col md:flex-row">
                    <div className="w-full md:w-1/3 bg-gradient-to-br from-orange-600 to-orange-400 p-5 text-white rounded-l-xl">
                        <div className="flex flex-col items-center">
                            <div className="relative group mb-6">
                                <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-white shadow-md">
                                    {(previewImage || userData.profile_image_url) ? (
                                        <img
                                            src={previewImage || userData.profile_image_url}
                                            alt="Profile"
                                            className="w-full h-full object-cover"
                                        />
                                    ) : (
                                        <div className="w-full h-full bg-gray-300 flex items-center justify-center">
                                            <span className="text-gray-600 text-4xl font-bold">
                                                {userData.username?.charAt(0)?.toUpperCase() || "U"}
                                            </span>
                                        </div>
                                    )}
                                </div>
                                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                                    <label htmlFor="file-input" className="w-full h-full cursor-pointer flex items-center justify-center rounded-full bg-black bg-opacity-40">
                                        <span className="text-white text-sm">Change Photo</span>
                                    </label>
                                </div>
                            </div>

                            <h3 className="text-2xl font-bold mb-1">{userData.username}</h3>
                            <p className="text-orange-200 mb-6">{userData.email}</p>

                            <button
                                onClick={handleLogout}
                                className="w-full py-2 px-4 bg-red-500 text-white font-medium rounded-lg hover:bg-red-600 transition-flex items-center justify-center gap-2"
                            >
                                Logout
                            </button>
                        </div>
                    </div>

                    
                    <div className="w-full md:w-2/3 p-5">
                        <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
                            Profile Details
                        </h2>

                        <div className="space-y-6">
                            <div className="bg-gray-50 p-2 rounded-lg shadow-sm">
                                <span className="text-sm text-gray-500">Username</span>
                                <p className="text-lg font-medium text-gray-800">{userData.username}</p>
                            </div>

                            <div className="bg-gray-50 p-2 rounded-lg shadow-sm">
                                <span className="text-sm text-gray-500">Email</span>
                                <p className="text-lg font-medium text-gray-800">{userData.email}</p>
                            </div>

                            <div className="bg-gray-50 p-2 rounded-lg shadow-sm">
                                <span className="text-sm text-gray-500">Account Created</span>
                                <p className="text-lg font-medium text-gray-800">
                                    {new Date(userData.created_at).toLocaleString("id-ID", {
                                        timeZone: "Asia/Jakarta",
                                        dateStyle: "long",
                                        timeStyle: "short",
                                    })}
                                </p>
                            </div>

                            <div className="bg-gray-50 p-2 rounded-lg shadow-sm">
                                <span className="text-sm text-gray-500 mb-2">Profile Image</span>
                                <input
                                    id="file-input"
                                    type="file"
                                    accept="image/*"
                                    onChange={handleImageChange}
                                    className="hidden"
                                />
                                <div className="flex flex-col sm:flex-row gap-2 items-start sm:items-center">
                                    {previewImage && (
                                        <div className="w-20 h-20 rounded-lg overflow-hidden shadow-md">
                                            <img
                                                src={previewImage}
                                                alt="Preview"
                                                className="w-full h-full object-cover"
                                            />
                                        </div>
                                    )}
                                    <div className="flex flex-col sm:flex-row gap-2">
                                        <label
                                            htmlFor="file-input"
                                            className="py-2 px-4 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition cursor-pointer flex items-center justify-center gap-1"
                                        >
                                            Select Image
                                        </label>
                                        {image && (
                                            <button
                                                onClick={handleImageUpload}
                                                disabled={isLoading}
                                                className={`py-2 px-4 ${isLoading ? 'bg-gray-400' : 'bg-orange-500 hover:bg-orange-600'} text-white rounded-lg transition flex items-center justify-center gap-1`}
                                            >
                                                {isLoading ? 'Uploading...' : 'Upload Image'}
                                            </button>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <ToastContainer
                position="top-center"
                autoClose={2000}
                hideProgressBar={false}
                newestOnTop
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
                transition={Slide}
            />
        </div>
    );
}