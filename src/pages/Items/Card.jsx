import React from "react"
import { useNavigate } from "react-router-dom";


export default function Card(props) {
    let cardData = props.CardData;
    const navigate = useNavigate();

    return (
        <div className="w-full h-full bg-white shadow-md overflow-hidden rounded-xl">
            <div className="h-full flex flex-col w-full cursor-pointer"
            onClick={() => navigate(`/blog/${cardData.post_id}`)}
>
                <div className="h-[250px] overflow-hidden"> 
                    <img className="scale-100 hover:scale-110 duration-500"
                    src={cardData.image} 
                    alt="" />
                </div>
                <div className="h-[30%] hover:h-[120%] group p-2 duration-300 ease-in">
                    <h2 className="mt-1 text-xl text-left">{cardData.title}</h2>
                    <p className="group-hover:visible group-hover:opacity-75 invisible text-sm text-left duration-300 ">
                        {cardData.price}</p>
                </div>
            </div>
        </div>
    )
}