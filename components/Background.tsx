import Image from 'next/image'
import React from 'react'

export default function Background() {
    return (
        <div className='w-full h-screen fixed bg-linear-to-b from-[#5C0006] to-[#FF0011]'>
            <div className="absolute top-0 left-0 w-full h-full">
                <Image src="/images/env/paper_tex.webp" alt="paper_texture" fill className='object-cover mix-blend-multiply' />
            </div>
            <div className="absolute top-0 left-0 w-full h-full flex flex-col items-end justify-end">
                <div className="relative w-full h-auto aspect-[2.9837/1]">
                    <Image src="/images/env/mt_background.webp" alt="mt_background" fill className='relative object-fill' />
                </div>
            </div>
        </div>
    )
}
