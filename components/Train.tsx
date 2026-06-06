'use client';

import Image from 'next/image'
import { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '@/redux/hooks'
import { registerImages, imageLoaded } from '@/redux/slices/loadingSlice'
import { motion, useAnimationControls } from "framer-motion";

export default function Train() {
    const dispatch = useAppDispatch();
    const myImages = ['/images/env/train.webp'];

    useEffect(() => {
        dispatch(registerImages(myImages.length));
    }, [dispatch, myImages.length]);

    // 1. Initialize the animation controls
    const controls = useAnimationControls();
    const isLoaded = useAppSelector((state) => state.loading.isFullyLoaded)

    useEffect(() => {
        if (isLoaded) {
            // 2. Trigger the animation to the final state when the boolean is true
            controls.start({
                x: 0,
                transition: { ease: "easeInOut", duration: 3 },
            });
        } else {
            // Optional: Send it back if the boolean turns false again
            controls.start({ x: "-75%" });
        }
    }, [isLoaded, controls]);
    return (
        <div className="absolute top-0 left-0 w-full h-full flex flex-col items-end justify-end overflow-hidden">
            <motion.div className="relative w-full h-auto aspect-[6.4429/1]" animate={controls} initial={{ x: "-100%" }}>
                <Image src="/images/env/train_main.webp" alt="train" fill className='relative object-contain' onLoad={() => dispatch(imageLoaded())} />
            </motion.div>
        </div>
    )
}
