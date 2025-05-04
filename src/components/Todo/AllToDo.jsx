import React, { useState, useEffect } from "react";
import axios from "axios";
import { Home, Edit2, Trash2 } from "react-feather";
import EditTodoPage from "./EditToDo";
import { toast, ToastContainer, Slide } from "react-toastify";
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';

export default function AllToDo() {
    const [activePage, setActivePage] = useState("all");
    const [todos, setTodos] = useState([]);
    const [loading, setLoading] = useState(true);
    const [selectedTodo, setSelectedTodo] = useState(null);
    const userId = localStorage.getItem("user_id");
    const MySwal = withReactContent(Swal);

    useEffect(() => {
        const fetchTodos = async () => {
            try {
                const res = await axios.get(
                    `${import.meta.env.VITE_API}todo/user/${userId}`
                );
                if (res.data.success) {
                    setTodos(res.data.payload);
                    localStorage.setItem("todo_id", res.data.payload.todo_id)

                }
            } catch (err) {
                console.error("Failed to fetch todos:", err);
            } finally {
                setLoading(false);
            }
        };

        if (userId) fetchTodos();
    }, [userId]);


    const handleDelete = async (id) => {
        const result = await MySwal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Delete',
        });

        if (!result.isConfirmed) return;

        try {
            await axios.delete(`${import.meta.env.VITE_API}todo/${id}`);
            setTodos((prev) => prev.filter((t) => t.todo_id !== id));
            toast.success("Todo deleted!");
        } catch (err) {
            console.error("Delete failed:", err);
            toast.error("Failed to delete todo.");
        }
    };


    const handleEdit = (todo) => {
        setSelectedTodo(todo);
        setActivePage("edit");
    };

    const handleSave = (updated) => {
        setTodos((prev) =>
            prev.map((t) => (t.todo_id === updated.todo_id ? updated : t))
        );
        setSelectedTodo(null);
        setActivePage("all");
    };

    const handleCancel = () => {
        setSelectedTodo(null);
        setActivePage("all");
    };

    if (loading) {
        return (
            <div className="w-3/4 h-full flex items-center justify-center">
                <p>Loading todos...</p>
            </div>
        );
    }

    return (
        <div className="w-full md:w/34 lg:w3/4 h-full bg-white flex flex-col gap-3 rounded-r-xl overflow-hidden">
            <div className="flex flex-row gap-2 bg-white items-center mb-3 pl-5 py-3 shadow-sm shadow-black/40">
                <Home size={24} />
                <span className="font-bold text-2xl capitalize">
                    {activePage === "all" ? "All To-Dos" : "Edit To-Do"}
                </span>
            </div>

            <div className="flex-1 overflow-auto">
                {activePage === "all" ? (
                    <div className="flex flex-col gap-2 p-5 bg-gray-50">
                        {todos.length === 0 ? (
                            <p className="text-gray-600">No todos found.</p>
                        ) : (
                            todos.map((todo) => (
                                <div
                                    key={todo.todo_id}
                                    className="relative p-4 bg-white rounded shadow-sm flex justify-between items-center"
                                >
                                    <span className="absolute top-2 right-2 bg-blue-100 text-blue-800 text-xs font-bold px-2 py-1 rounded">
                                        P{todo.priority}
                                    </span>

                                    <div className="flex-1">
                                        <h3
                                            className={`font-semibold text-lg ${todo.status === 'completed'
                                                ? 'line-through text-gray-500'
                                                : ''
                                                }`}
                                        >
                                            {todo.title}
                                        </h3>
                                        <p className="text-sm text-gray-600">{todo.description}</p>
                                        <p className="text-sm mt-1">
                                            Due: {new Date(todo.due_date).toLocaleDateString()}
                                        </p>
                                        <p className="text-sm">
                                            Status:{' '}
                                            <span
                                                className={`${todo.status === 'completed'
                                                    ? 'text-green-600'
                                                    : 'text-yellow-600'
                                                    } font-medium`}
                                            >
                                                {todo.status.charAt(0).toUpperCase() +
                                                    todo.status.slice(1)}
                                            </span>
                                        </p>
                                    </div>

                                    <div className="flex flex-col gap-2 ml-4">
                                        <Edit2
                                            className="cursor-pointer text-blue-500 hover:text-blue-700"
                                            size={20}
                                            onClick={() => handleEdit(todo)}
                                        />
                                        <Trash2
                                            className="cursor-pointer text-red-500 hover:text-red-700"
                                            size={20}
                                            onClick={() => handleDelete(todo.todo_id)}
                                        />
                                    </div>
                                </div>
                            ))
                        )}
                    </div>
                ) : (
                    <div className="p-5 bg-gray-50">
                        <EditTodoPage
                            todo={selectedTodo}
                            onSave={handleSave}
                            onCancel={handleCancel}
                        />
                    </div>
                )}
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