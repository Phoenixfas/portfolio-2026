'use client'
import Image from 'next/image'
import { useEffect } from 'react'
import { useAppDispatch } from '@/redux/hooks'
import { registerImages, imageLoaded } from '@/redux/slices/loadingSlice'

export default function Background() {
    const dispatch = useAppDispatch();
    const myImages = ['/images/env/paper_tex.webp', '/images/env/mt_background.webp'];

    useEffect(() => {
        dispatch(registerImages(myImages.length));
    }, [dispatch, myImages.length]);
    return (
        <div className='w-full h-screen fixed bg-linear-to-b from-[#5C0006] to-[#FF0011]'>
            <div className="absolute top-0 left-0 w-full h-full">
                <Image src="/images/env/paper_tex.webp" alt="paper_texture" fill className='object-cover mix-blend-multiply' onLoad={() => dispatch(imageLoaded())} />
            </div>
            <div className="absolute top-0 left-0 w-full h-full flex flex-col items-end justify-end">
                <div className="relative w-full h-auto aspect-[2.9837/1]">
                    <Image src="/images/env/mt_background.webp" alt="mt_background" fill className='relative object-fill' onLoad={() => dispatch(imageLoaded())} />
                </div>
            </div>
        </div>
    )
}
