'use client'
import { useEffect } from 'react'
import { useAppSelector, useAppDispatch } from '@/redux/hooks'
import { motion, AnimatePresence } from 'framer-motion'
import { setScreenSize } from '@/redux/slices/screenSlice'

export default function Preloader({ children }: { children: React.ReactNode }) {
    const isLoaded = useAppSelector((state) => state.loading.isFullyLoaded)
    const dispatch = useAppDispatch()

    useEffect(() => {
        // get device size and set the screen size when the component mounts
        const handleResize = () => {
            const width = window.innerWidth;
            if (width < 768) {
                dispatch(setScreenSize("mb"));
            } else if (width < 1024) {
                dispatch(setScreenSize("tb"));
            } else {
                dispatch(setScreenSize("dp"));
            }
        };

        handleResize();
        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

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
                                className="w-sm h-auto"
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
