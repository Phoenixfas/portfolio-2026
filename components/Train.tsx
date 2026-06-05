'use client';

import Image from 'next/image'
import { useEffect } from 'react'
import { useAppDispatch } from '@/redux/hooks'
import { registerImages, imageLoaded } from '@/redux/slices/loadingSlice'

export default function Train() {
    const dispatch = useAppDispatch();
    const myImages = ['/images/env/train.webp'];

    useEffect(() => {
        dispatch(registerImages(myImages.length));
    }, [dispatch, myImages.length]);
    return (
        <div className="absolute top-0 left-0 w-full h-full flex flex-col items-end justify-end">
            <div className="relative w-full h-auto aspect-[6.4429/1]">
                <Image src="/images/env/train.webp" alt="train" fill className='relative object-contain' onLoad={() => dispatch(imageLoaded())} />
            </div>
        </div>
    )
}
