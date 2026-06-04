import React from 'react'
import TornPaper from './TornPaper'
import { FaLinkedin, FaTelegramPlane, FaWhatsapp } from 'react-icons/fa'
import Link from 'next/link'
import ContactForm from './ContactForm'

export default function CONTACT() {
    return (
        <div className='relative w-full h-full flex flex-col gap-[1vw]'>
            <h2 className='text-[3vw] leading-[2.3vw] roboto font-black text-white text-center'>GET IN TOUCH</h2>
            <div className="w-full flex gap-[1.2vw] p-[1vw] pt-0">
                <div className="flex-1 h-fit flex flex-col gap-[1.2vw]">
                    <div className="flex flex-col">
                        <TornPaper className="p-[0.1vw] -rotate-6 -translate-x-1/12 z-20">
                            <TornPaper className="text-white px-[2vw] py-0" paperColor="bg-red-500">
                                <h2 className="text-[1.3vw] leading-[2vw] roboto font-medium">
                                    EMAIL
                                </h2>
                            </TornPaper>
                        </TornPaper>
                        <TornPaper className="text-black px-[1vw] py-0 z-10">
                            <h2 className="text-[1.3vw] leading-[2vw] roboto font-medium">
                                fasika1515@gmail.com
                            </h2>
                        </TornPaper>
                    </div>
                    <div className="flex items-center justify-between gap-[1.2vw]">
                        <div className="flex flex-col gap-2">
                            <TornPaper className="px-[2vw] py-0 text-red-500 rotate-3 -translate-x-1/12 z-20">
                                <h2 className="text-[1.3vw] leading-[2vw] roboto font-medium">
                                    PHONE
                                </h2>
                            </TornPaper>
                            <Link href="tel:+251967825549" className="text-white text-[1.3vw] leading-[2vw] roboto font-medium hover:text-red-500 hover:scale-110 duration-300">
                                +251967825549
                            </Link>
                        </div>
                        <div className="flex flex-col gap-[0.3vw]">
                            <TornPaper className="p-[0.1vw] -rotate-3 z-20">
                                <TornPaper className="text-white px-[2vw] py-0" paperColor="bg-red-500">
                                    <h2 className="text-[1.3vw] leading-[2vw] roboto font-medium">
                                        SOCIALS
                                    </h2>
                                </TornPaper>
                            </TornPaper>
                            <div className="flex-1 text-white text-[1.8vw] flex justify-between gap-[0.3vw] flex-wrap p-3">
                                <Link className="cursor-pointer hover:text-red-500 hover:scale-110 duration-300" href="https://www.linkedin.com/in/phoenixfas" target="_blank" rel="noopener noreferrer">
                                    <FaLinkedin />
                                </Link>
                                <Link className="cursor-pointer hover:text-red-500 hover:scale-110 duration-300" href="https://t.me/ras_metat" target="_blank" rel="noopener noreferrer">
                                    <FaTelegramPlane />
                                </Link>
                                <Link className="cursor-pointer hover:text-red-500 hover:scale-110 duration-300" href="https://wa.me/251967825549" target="_blank" rel="noopener noreferrer">
                                    <FaWhatsapp />
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex-1 h-fit flex gap-3">
                    <ContactForm />
                </div>
            </div>
        </div>
    )
}
