'use client'
import React from 'react'
import { useAppSelector } from '@/redux/hooks'

export default function Preloader({ children }: { children: React.ReactNode }) {
    const isLoaded = useAppSelector((state) => state.loading.isFullyLoaded)

    return (
        <>
            {children}
            {!isLoaded && <div className='w-full h-screen fixed bg-linear-to-b from-[#5C0006] to-[#FF0011] z-99999'></div>}
        </>
    )
}
