'use client';

import Image from "next/image"
import { useAppSelector, useAppDispatch } from "@/redux/hooks";
import { selectStation } from "@/redux/slices/stationSlice";
import { motion } from "motion/react";
import { useEffect, useRef } from "react";
import { registerImages, imageLoaded } from '@/redux/slices/loadingSlice'

export default function Rail_con_bushes() {
    const station = useAppSelector(selectStation);
    const prevStationRef = useRef<number>(station);
    const longTransition = Math.abs(station - prevStationRef.current) > 1;

    const dispatch = useAppDispatch();
    const myImages = ['/images/env/rails.webp', '/images/env/concrete_side.webp', '/images/env/bushes.webp'];

    useEffect(() => {
        dispatch(registerImages(myImages.length));
    }, [dispatch, myImages.length]);


    useEffect(() => {
        // update the stored previous station after render
        prevStationRef.current = station;
    }, [station]);
    return (
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
            <motion.div style={{ translateX: `-${100 / 4 * station}%`, transition: `transform ${longTransition ? 6 : 3}s ease 0s` }} className="relative w-fit h-full flex">
                <div className="relative min-w-screen w-screen h-full flex flex-col items-end justify-end">
                    <div className="relative w-full h-auto aspect-32/1">
                        <Image src="/images/env/rails.webp" alt="rails" fill className='relative object-contain' onLoad={() => dispatch(imageLoaded())} />
                    </div>
                    <div className="relative w-full h-auto aspect-24/1">
                        <Image src="/images/env/concrete_side.webp" alt="concrete_side" fill className='relative object-contain' onLoad={() => dispatch(imageLoaded())} />
                    </div>
                    <div className="absolute w-full h-auto aspect-[29.09/1]">
                        <Image src="/images/env/bushes.webp" alt="bushes" fill className='relative object-contain' onLoad={() => dispatch(imageLoaded())} />
                    </div>
                </div>
                <div className="relative min-w-screen w-screen h-full flex flex-col items-end justify-end">
                    <div className="relative w-full h-auto aspect-32/1">
                        <Image src="/images/env/rails.webp" alt="rails" fill className='relative object-contain' />
                    </div>
                    <div className="relative w-full h-auto aspect-24/1">
                        <Image src="/images/env/concrete_side.webp" alt="concrete_side" fill className='relative object-contain' />
                    </div>
                    <div className="absolute w-full h-auto aspect-[29.09/1]">
                        <Image src="/images/env/bushes.webp" alt="bushes" fill className='relative object-contain' />
                    </div>
                </div>
                <div className="relative min-w-screen w-screen h-full flex flex-col items-end justify-end">
                    <div className="relative w-full h-auto aspect-32/1">
                        <Image src="/images/env/rails.webp" alt="rails" fill className='relative object-contain' />
                    </div>
                    <div className="relative w-full h-auto aspect-24/1">
                        <Image src="/images/env/concrete_side.webp" alt="concrete_side" fill className='relative object-contain' />
                    </div>
                    <div className="absolute w-full h-auto aspect-[29.09/1]">
                        <Image src="/images/env/bushes.webp" alt="bushes" fill className='relative object-contain' />
                    </div>
                </div>
                <div className="relative min-w-screen w-screen h-full flex flex-col items-end justify-end">
                    <div className="relative w-full h-auto aspect-32/1">
                        <Image src="/images/env/rails.webp" alt="rails" fill className='relative object-contain' />
                    </div>
                    <div className="relative w-full h-auto aspect-24/1">
                        <Image src="/images/env/concrete_side.webp" alt="concrete_side" fill className='relative object-contain' />
                    </div>
                    <div className="absolute w-full h-auto aspect-[29.09/1]">
                        <Image src="/images/env/bushes.webp" alt="bushes" fill className='relative object-contain' />
                    </div>
                </div>
                <div className="relative min-w-screen w-screen h-full flex flex-col items-end justify-end">
                    <div className="relative w-full h-auto aspect-32/1">
                        <Image src="/images/env/rails.webp" alt="rails" fill className='relative object-contain' />
                    </div>
                    <div className="relative w-full h-auto aspect-24/1">
                        <Image src="/images/env/concrete_side.webp" alt="concrete_side" fill className='relative object-contain' />
                    </div>
                    <div className="absolute w-full h-auto aspect-[29.09/1]">
                        <Image src="/images/env/bushes.webp" alt="bushes" fill className='relative object-contain' />
                    </div>
                </div>
            </motion.div>
        </div>
    )
}
