'use client';

import Image from "next/image"
import { useAppSelector } from "@/redux/hooks";
import { selectStation } from "@/redux/slices/stationSlice";
import { motion } from "motion/react";
import { useEffect, useRef } from "react";

export default function Trees_f() {
    const station = useAppSelector(selectStation);

    const prevStationRef = useRef<number>(station);
    const longTransition = Math.abs(station - prevStationRef.current) > 1;

    useEffect(() => {
        // update the stored previous station after render
        prevStationRef.current = station;
    }, [station]);
    return (
        <div className="absolute bottom-0 left-0 w-full h-auto aspect-[5.0659/1] overflow-hidden">
            <motion.div style={{ translateX: `-${100 / 4 * station}%`, transition: `transform ${longTransition ? 6 : 3}s ease 0s` }} className="relative w-fit h-full flex">
                <div className="min-w-screen w-screen h-full flex flex-col items-end justify-end">
                    <div className="relative w-full h-full">
                        <Image src="/images/env/trees_f.webp" alt="trees_f" fill className='relative object-contain' unoptimized />
                    </div>
                </div>
                <div className="min-w-screen w-screen h-full flex flex-col items-end justify-end">
                    <div className="relative w-full h-full">
                        <Image src="/images/env/trees_f.webp" alt="trees_f" fill className='relative object-contain' unoptimized />
                    </div>
                </div>
                <div className="min-w-screen w-screen h-full flex flex-col items-end justify-end">
                    <div className="relative w-full h-full">
                        <Image src="/images/env/trees_f.webp" alt="trees_f" fill className='relative object-contain' unoptimized />
                    </div>
                </div>
                <div className="min-w-screen w-screen h-full flex flex-col items-end justify-end">
                    <div className="relative w-full h-full">
                        <Image src="/images/env/trees_f.webp" alt="trees_f" fill className='relative object-contain' unoptimized />
                    </div>
                </div>
                <div className="min-w-screen w-screen h-full flex flex-col items-end justify-end">
                    <div className="relative w-full h-full">
                        <Image src="/images/env/trees_f.webp" alt="trees_f" fill className='relative object-contain' unoptimized />
                    </div>
                </div>
                <div className="min-w-screen w-screen h-full flex flex-col items-end justify-end">
                    <div className="relative w-full h-full">
                        <Image src="/images/env/trees_f.webp" alt="trees_f" fill className='relative object-contain' unoptimized />
                    </div>
                </div>
            </motion.div>
        </div>
    )
}
