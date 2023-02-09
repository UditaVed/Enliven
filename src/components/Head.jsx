import React from "react";
export default function Head(props)
{
    return (
        <div className="head_top flex gap-6 flex-col">
            <div className="bg-black w-[100vw] text-5xl text-white p-5">
                <p>{props.topic}</p>
            </div>
            <div className="p-5">
                <p className="text-4xl">{props.title}</p>
                <p className="text-lg">{props.about}</p>
            </div>
            <div className="bg-black w-[90vw] h-[1.4px] ml-5"></div>
        </div>
    )
}