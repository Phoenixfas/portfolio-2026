import Image from 'next/image'
import React from 'react'

export default function Train() {
    return (
        <div className="absolute top-0 left-0 w-full h-full flex flex-col items-end justify-end">
            <div className="relative w-full h-auto aspect-[6.4429/1]">
                <Image src="/images/env/train.webp" alt="train" fill className='relative object-contain' />
            </div>
        </div>
    )
}
