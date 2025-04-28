import React from 'react'
import { useEffect, useState } from 'react'

export default function Counter() {
    const [count, setCount] = useState(0);

    function setIncrement() {
        setCount(count + 1);
    }
    function setDecrement() {
        setCount(count - 1);
    }


    useEffect(() => {
        if (count % 10 == 0 && count != 0)
            alert(count + " is divisible by 10");
    }), [count];


    return (
        <div className="w-full h-[300px] flex bg-gradient-to-b from-fuchsia-900 via-purple-900 to-fuchsia-900 py-10">
            <div className='w-full h-full px-10 lg:px-20 flex items-center m-auto max-w-screen-2xl flex-row gap-10'>
                <div className='w-full h-full flex flex-col justify-center items-center gap-5'>
                    <div className='text-xl lg:text-3xl font-bold text-white'>Counter Demo</div>
                    <a className='text-white text-bold text-md lg:text-2xl '>{count}</a>
                    <div className='flex flex-row h-full w-42 lg:w-[20%] items-center justify-center text-center gap-5'>
                        <a className='flex-none w-14 h-10 lg:h-8 bg-white rounded-lg text-fuchsia-700 font-bold cursor-pointer hover:bg-fuchsia-200 active:bg-fuchsia-600 active:text-white select-none flex items-center justify-center'
                            onClick={setDecrement}>-</a>
                        <a className='flex-1 h-12 w-32 bg-white rounded-lg text-fuchsia-700 font-bold hover:bg-fuchsia-200 active:bg-fuchsia-600 active:text-white flex justify-center items-center select-none  cursor-pointer'
                            onClick={() => setCount(0)}>Reset</a>
                        <a className='flex-none h-10 lg:h-8 w-14 bg-white rounded-lg text-fuchsia-700 font-bold hover:bg-fuchsia-200 active:bg-fuchsia-600 active:text-white select-none  cursor-pointer flex items-center justify-center'
                            onClick={setIncrement}>+</a>
                    </div>
                </div>
            </div>
        </div>
    )
}
