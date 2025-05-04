import React, { useState, useEffect } from "react";
import axios from "axios";
import { toast, ToastContainer, Slide } from "react-toastify";

export default function CreateTodoPage({ onSubmit }) {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [status, setStatus] = useState("pending");
    const [priority, setPriority] = useState(3);
    const [dueDate, setDueDate] = useState("");
    const [userId, setUserId] = useState(null);

    useEffect(() => {
        const user = localStorage.getItem("user_id");
        setUserId(user);
    }, [location]);

    const handleSubmitClick = async () => {
        if (!title.trim()) {
            toast.info("Title is required");
            return;
        }

        try {
            const response = await axios.post("http://localhost:3000/todo/", {
                user_id: userId,
                title,
                description,
                priority: parseInt(priority),
                due_date: dueDate,
            });

            if (response.data.success) {
                toast.success("Todo created successfully!");
                setTitle("");
                setDescription("");
                setStatus("pending");
                setPriority(3);
                setDueDate("");
            } else {
                toast.error(response.data.message);
            }
        } catch (error) {
            console.error("Error creating todo:", error);
            toast.error("Failed to create todo.");
        }
    };

    return (
        <div className="w-3/4 h-full bg-white flex flex-col gap-3 rounded-r-xl overflow-hidden">
            <div className="flex flex-row gap-2 bg-white items-center text-black mb-3 pl-5 py-3 shadow-sm shadow-black/40">
                <span className="font-bold text-2xl">Create To-Do</span>
            </div>
            <div className="flex flex-col gap-4 p-5 bg-gray-50 h-full overflow-auto">
                <div>
                    <label className="block text-gray-700 font-medium mb-2" htmlFor="title">
                        Title*
                    </label>
                    <input
                        type="text"
                        id="title"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        className="w-full border rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-orange-500"
                    />
                </div>

                <div>
                    <label className="block text-gray-700 font-medium mb-2" htmlFor="description">
                        Description
                    </label>
                    <textarea
                        id="description"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        rows="4"
                        className="w-full border rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-orange-500"
                    ></textarea>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div>
                        <label className="block text-gray-700 font-medium mb-2" htmlFor="status">
                            Status
                        </label>
                        <select
                            id="status"
                            value={status}
                            onChange={(e) => setStatus(e.target.value)}
                            className="w-full border rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-orange-500"
                        >
                            <option value="pending">Pending</option>
                            <option value="completed">Completed</option>
                        </select>
                    </div>

                    <div>
                        <label className="block text-gray-700 font-medium mb-2" htmlFor="priority">
                            Priority
                        </label>
                        <select
                            id="priority"
                            value={priority}
                            onChange={(e) => setPriority(e.target.value)}
                            className="w-full border rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-orange-500"
                        >
                            <option value="1">1 (Lowest)</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5 (Highest)</option>
                        </select>
                    </div>

                    <div>
                        <label className="block text-gray-700 font-medium mb-2" htmlFor="due_date">
                            Due Date
                        </label>
                        <input
                            type="date"
                            id="due_date"
                            value={dueDate}
                            onChange={(e) => setDueDate(e.target.value)}
                            className="w-full border rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-orange-500"
                        />
                    </div>
                </div>

                <div className="flex justify-end mt-auto">
                    <button
                        onClick={handleSubmitClick}
                        className="bg-orange-600 text-white px-4 py-2 rounded-md hover:bg-orange-700"
                    >
                        Create To-Do
                    </button>
                </div>
            </div>
            <ToastContainer
                position='top-center'
                autoClose={3000}
                closeOnClick
                limit={3}
                transition={Slide}
            ></ToastContainer>
        </div>
    );
}
