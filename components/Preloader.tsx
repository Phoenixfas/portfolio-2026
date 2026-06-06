'use client'
import React from 'react'
import { useAppSelector } from '@/redux/hooks'
import { motion, AnimatePresence } from 'framer-motion'

export default function Preloader({ children }: { children: React.ReactNode }) {
    const isLoaded = useAppSelector((state) => state.loading.isFullyLoaded)

    return (
        <>
            {children}
            <AnimatePresence>
                {!isLoaded &&
                    <motion.div
                        initial={{ opacity: 1 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.5, ease: 'easeInOut' }}
                        className='w-full h-screen fixed bg-linear-to-tr from-black via-[#1c1c1c] to-black z-99999'
                    >
                        <div className="w-full h-full bg-[url('/code_pattern.svg')] flex items-center justify-center">
                            <object
                                type="image/svg+xml"
                                data="/Train_anim2.svg"
                                className="w-1/3 h-auto"
                                aria-label="Animated SVG"
                            >
                                Your browser does not support SVG
                            </object>
                        </div>
                    </motion.div>
                }
            </AnimatePresence>
        </>
    )
}
