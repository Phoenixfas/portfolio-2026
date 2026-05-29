import Image from 'next/image'
import React from 'react'

export default function Concrete_ground() {
    return (
        <div className="absolute top-0 left-0 w-full h-full flex flex-col items-end justify-end">
            <div className="relative w-full h-auto aspect-[21.573/1]">
                <Image src="/images/env/concrete_ground.webp" alt="concrete_ground" fill className='relative object-contain' unoptimized />
            </div>
        </div>
    )
}
