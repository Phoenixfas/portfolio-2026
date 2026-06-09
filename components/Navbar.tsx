'use client';

import { useAppSelector, useAppDispatch } from "@/redux/hooks";
import { gotoStation, selectStation, StationNames } from "@/redux/slices/stationSlice";
// import { nextStation, prevStation } from "@/redux/slices/stationSlice";
// import Image from "next/image";
import { useEffect, useState } from "react";
import { HiMenuAlt3 } from "react-icons/hi";
import { IoCloseOutline } from "react-icons/io5";

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
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
        <div className='absolute top-2 left-0 w-full flex items-center justify-end sm:justify-center px-5 sm:px-0 z-9999'>
            <div className="w-fit sm:max-w-125 sm:w-full flex items-center justify-center">
                <div className="relative -translate-x-2 z-10">
                    <div className="w-[200%] h-full bg-[url('/images/env/metal_tex.jpg')] bg-cover bg-center p-2 border border-[#1f2a2c] rounded-full shadow-[-3px_5px_5px_0px_#000000aa,inset_0px_0px_3px_0px_#000000aa]">
                        <div className="w-1/2 h-full bg-linear-to-br from-[#1f2a2c] to-[#121415] border-4 border-[#121415] shadow-[inset_0px_0px_3px_0px_#ffffffaa,0px_0px_6px_0px_#000000] rounded-full text-sm text-white text-center font-bold px-2 py-4">
                            <p>{time ? time : "..."}</p>
                        </div>
                    </div>
                </div>
                <div className="relative w-full z-20">
                    <div className="w-full h-full bg-[url('/images/env/metal_tex.webp')] bg-cover bg-center p-1 border border-[#1f2a2c] rounded-full sm:rounded-r-[99px] sm:rounded-md shadow-[-3px_5px_5px_0px_#000000aa]">
                        <div className="w-full h-full flex items-center justify-between bg-linear-to-br from-[#1f2a2c] to-[#121415] border-4 border-[#121415] shadow-[inset_0px_0px_3px_0px_#ffffff55,0px_0px_6px_0px_#000000] rounded-full sm:rounded-r-[99px] sm:rounded-sm p-1">
                            <ul className="flex-1 hidden sm:flex items-center justify-between gap-3 text-base text-white px-3">
                                {StationNames.map((name, index) => (
                                    <li key={index} className={`text-center led-dot cursor-pointer duration-500 ${index === station ? "text-[#00ff00]" : "text-[#ff0000]"}`} onClick={() => {
                                        if (index === station) return;
                                        dispatch(gotoStation(index));
                                    }}>
                                        {name}
                                    </li>
                                ))}
                            </ul>
                            <div className="hidden max-w-16 w-16 h-auto aspect-square sm:flex items-center justify-center bg-[#1f2a2c] border-2 border-[#121415] rounded-full transition-all duration-500">
                                <MyIcon color={isMoving ? "#ff0000" : "#00ff00"} />
                            </div>
                            <div className="max-w-16 w-16 h-auto aspect-square flex items-center justify-center bg-[#1f2a2c] border-2 border-[#121415] rounded-full transition-all duration-500 sm:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                                <HiMenuAlt3 className={`text-[#00ff00] w-[60%] h-[60%] ${isMenuOpen ? 'hidden' : 'block'}`} />
                                <IoCloseOutline className={`text-[#ff0000] w-[60%] h-[60%] ${isMenuOpen ? 'block' : 'hidden'}`} />
                            </div>
                        </div>
                    </div>
                </div>


                <div className={`sm:hidden absolute top-[calc(100%-16px)] w-fit z-1 origin-top ${isMenuOpen ? 'scale-y-100' : 'scale-y-0'} transition-all duration-500`}>
                    <div className={`bg-[url('/images/env/metal_tex.webp')] bg-cover bg-center p-1 pt-5 border border-[#1f2a2c] rounded-md shadow-[-3px_5px_5px_0px_#000000aa] `}>
                        <div className="w-fit h-fit flex items-center justify-between bg-linear-to-br from-[#1f2a2c] to-[#121415] border-4 border-[#121415] shadow-[inset_0px_0px_3px_0px_#ffffff55,0px_0px_6px_0px_#000000] rounded-sm p-1 py-3">
                            <ul className="flex flex-col items-center justify-between gap-3 text-base text-white px-3">
                                {StationNames.map((name, index) => (
                                    <li key={index} className={`text-center led-dot cursor-pointer duration-500 ${index === station ? "text-[#00ff00]" : "text-[#ff0000]"}`} onClick={() => {
                                        if (index === station) return;
                                        dispatch(gotoStation(index));
                                    }}>
                                        {name}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}


const MyIcon = ({ color }: { color: string }) => (
    <svg className={`duration-500 w-[60%] h-[60%]`} width="40" height="40" viewBox="0 0 352 352" fill="none" xmlns="http://www.w3.org/2000/svg">
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