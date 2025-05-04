import React from 'react'
import { Menu, Home, Plus } from 'react-feather';
import AllToDo from '../../components/Todo/AllToDo';
import CreateTodoPage from '../../components/Todo/CreateToDo';
import { useState } from 'react';
import { ToastContainer, toast , Slide} from 'react-toastify/unstyled';

export default function Dashboard() {
    const [activePage, setActivePage] = useState("all");

    const handleTodoSubmit = (todoData) => {
        toast.info("New To-Do created:", todoData);
        setActivePage("all"); 
    };
    return (
        <>
            <div className='w-full h-[800px] m-auto bg-white'>
                <div className='w-full h-full max-w-screen-2xl pt-16 m-auto flex items-center justify-center'>
                    <div className='w-full h-full px-20 flex items-center pt-20'>
                        <div className='w-full h-full flex flex-row items-center pb-20'>
                            <div className='w-1/4 h-full bg-orange-600 rounded-l-xl flex flex-col'>
                                <div className='flex flex-row gap-2 items-center text-white mb-3 p-5'>
                                    <Menu size={24} />
                                    <a className='font-bold'>To-do Manager</a>
                                </div>
                                <button className='flex flex-row gap-2 items-center text-white active:bg-orange-800 hover:bg-orange-500 px-5 py-2 rounded-md' onClick={() => setActivePage("all")}>
                                    <Home size={24} />
                                    <a className='font-bold'>All To-Dos</a>
                                </button>
                                <button className='flex flex-row gap-2 items-center text-white active:bg-orange-800 hover:bg-orange-500 px-5 py-2 rounded-md' onClick={() => setActivePage("create")}>
                                    <Plus size={24} />
                                    <a className='font-bold'>Create To-Do</a>
                                </button>
                            </div>
                                {activePage === "all" ? <AllToDo /> : <CreateTodoPage onSubmit={handleTodoSubmit} />}

                        </div>
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
        </>
    )
}
