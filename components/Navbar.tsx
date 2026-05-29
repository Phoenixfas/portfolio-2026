'use client';

import { useAppSelector, useAppDispatch } from "@/redux/hooks";
import { gotoStation, selectStation, StationNames } from "@/redux/slices/stationSlice";
import { nextStation, prevStation } from "@/redux/slices/stationSlice";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Navbar() {
    const [time, setTime] = useState<string | null>(null);
    const [isMoving, setIsMoving] = useState(false);
    const station = useAppSelector(selectStation);
    const dispatch = useAppDispatch();

    useEffect(() => {
        // Formatting configuration
        const options: Intl.DateTimeFormatOptions = {
            hour: '2-digit',
            minute: '2-digit',
            hour12: false, // Set to false for 24-hour format (e.g., 23:33)
        };

        const formatTime = () => new Date().toLocaleTimeString([], options);

        // Set initial time immediately
        setTime(formatTime());

        // Update the time every second
        const timer = setInterval(() => {
            setTime(formatTime());
        }, 10000);

        // Cleanup interval on component unmount to prevent memory leaks
        return () => clearInterval(timer);
    }, []);

    useEffect(() => {
        setIsMoving(true);
        const timer = setTimeout(() => {
            setIsMoving(false);
        }, 3000);
        return () => clearTimeout(timer);
    }, [station]);



    return (
        <div className='absolute top-2 left-0 w-full flex items-center justify-center z-9999'>
            <div className="translate-x-1 z-10">
                <div className="w-full h-full bg-[url('/images/env/metal_tex.jpg')] bg-cover bg-center p-2 pr-6 border border-[#1f2a2c] rounded-l-full shadow-[-3px_5px_5px_0px_#000000aa,inset_0px_0px_3px_0px_#000000aa]">
                    <div className="w-full h-full bg-linear-to-br from-[#1f2a2c] to-[#121415] border-4 border-[#121415] shadow-[inset_0px_0px_3px_0px_#ffffffaa,0px_0px_6px_0px_#000000] rounded-full text-sm text-white text-center font-bold px-2 py-4">
                        <p>{time ? time : "..."}</p>
                    </div>
                </div>
            </div>
            <div className="w-[30%] z-20">
                <div className="w-full h-full bg-[url('/images/env/metal_tex.jpg')] bg-cover bg-center p-1 border border-[#1f2a2c] rounded-r-[99px] rounded-md shadow-[-3px_5px_5px_0px_#000000aa]">
                    <div className="w-full h-full flex items-center justify-between bg-linear-to-br from-[#1f2a2c] to-[#121415] border-4 border-[#121415] shadow-[inset_0px_0px_3px_0px_#ffffff55,0px_0px_6px_0px_#000000] rounded-r-[99px] rounded-sm p-1">
                        <ul className="flex-1 flex items-center justify-between gap-2 text-[1.1vw] text-white px-5">
                            {StationNames.map((name, index) => (
                                <li key={index} className={`text-center led-dot cursor-pointer duration-500 ${index === station ? "text-[#00ff00]" : "text-[#ff0000]"}`} onClick={() => {
                                    if (index === station) return;
                                    dispatch(gotoStation(index));
                                }}>
                                    {name}
                                </li>
                            ))}
                        </ul>
                        <div className="w-16 h-16 flex items-center justify-center bg-[#1f2a2c] border-2 border-[#121415] rounded-full transition-all duration-500">
                            <MyIcon color={isMoving ? "#ff0000" : "#00ff00"} />
                        </div>
                    </div>
                </div>
            </div>
            {/* <div className="p-5 bg-yellow-500 text-3xl cursor-pointer"> {">"} </div> */}
        </div>
    )
}


const MyIcon = ({ color }: { color: string }) => (
    <svg className="duration-500" width="40" height="40" viewBox="0 0 352 352" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M120 64.6257H232C261.823 64.6257 286 88.8024 286 118.626V267.626C286 287.508 269.882 303.626 250 303.626H102C82.1178 303.626 66 287.508 66 267.626V118.626C66 88.8024 90.1766 64.6257 120 64.6257Z" stroke={color} strokeWidth="12" />
        <rect x="92" y="102.626" width="168" height="101" rx="16" stroke={color} strokeWidth="12" />
        <circle cx="112.5" cy="257.126" r="20.5" stroke={color} strokeWidth="12" />
        <circle cx="239.5" cy="257.126" r="20.5" stroke={color} strokeWidth="12" />
        <path d="M73 329.626L109 304.626" stroke={color} strokeWidth="12" strokeLinecap="round" />
        <path d="M243 304.626L278.999 329.627" stroke={color} strokeWidth="12" strokeLinecap="round" />
        <path d="M145 62.6257L132 27.6257" stroke={color} strokeWidth="12" strokeLinecap="round" />
        <path d="M220.001 27.6262L206.999 62.6254" stroke={color} strokeWidth="12" strokeLinecap="round" />
        <path d="M92.5001 46.6257C90.6667 42.6257 94 34.8143 103.5 31.1257C134.5 19.0892 224 21.1257 248 32.6257C257.365 37.1131 260.667 42.6257 260.5 46.6257" stroke={color} strokeWidth="12" strokeLinecap="round" />
    </svg>
);