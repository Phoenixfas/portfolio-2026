'use client';

import Image from "next/image"
import { useAppSelector, useAppDispatch } from "@/redux/hooks";
import { selectStation } from "@/redux/slices/stationSlice";
import { motion } from "motion/react";
import { useEffect, useRef } from "react";
import { registerImages, imageLoaded } from '@/redux/slices/loadingSlice'

export default function Stations() {
    const station = useAppSelector(selectStation);
    const prevStationRef = useRef<number>(station);
    const longTransition = Math.abs(station - prevStationRef.current) > 1;

    const dispatch = useAppDispatch();
    const myImages = ['/images/stations/Bldgs.webp'];

    useEffect(() => {
        dispatch(registerImages(myImages.length));
    }, [dispatch, myImages.length]);

    useEffect(() => {
        // update the stored previous station after render
        prevStationRef.current = station;
    }, [station]);
    return (
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
            <motion.div style={{ translateX: `-${200 / 6 * station}%`, transition: `transform ${longTransition ? 6 : 3}s ease 0s`, transformOrigin: "left center" }} className="relative w-fit h-full flex left-full">
                <div className="min-w-screen w-screen h-full flex flex-col items-end justify-end">
                    <div className="relative w-[200%] h-auto aspect-[4.3001/1]">
                        <Image src="/images/stations/Bldgs.webp" alt="Buildings" fill className='relative object-contain' unoptimized onLoad={() => dispatch(imageLoaded())} />
                    </div>
                </div>
            </motion.div>
        </div>
    )
}
