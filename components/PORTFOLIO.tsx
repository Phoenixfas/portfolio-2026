import React from 'react'
import TornPaper from './TornPaper'
import Image from 'next/image'
import Link from 'next/link'

const projects = [
    {
        name: "Foundation Business Consulting",
        img: "https://iili.io/qfW8np4.png",
        url: "https://thefbc.xyz"
    },
    {
        name: "Impact Makers Events",
        img: "https://iili.io/qfWvihB.png",
        url: "https://impactmakersevents.com"
    },
    {
        name: "Tech Trade Show",
        img: "https://iili.io/qfWk8RR.png",
        url: "https://tts-new-eight.vercel.app"
    },
]

export default function PORTFOLIO() {
    return (
        <div className='relative w-full h-full flex flex-col gap-5'>
            <h2 className='text-[3vw] leading-[2.3vw] roboto font-black text-white text-center'>RECENT PROJECTS</h2>
            <div className="w-full flex gap-5 p-5 pt-2">
                {projects.map((project, index) => (
                    <div key={index} className="group flex flex-col gap-3 items-center">
                        <Link href={project.url} target="_blank">
                            <TornPaper className={`p-3 cursor-pointer hover:scale-110 duration-300 ${index === 0 ? '-rotate-3' : index === 1 ? 'rotate-2' : '-rotate-2'}`}>
                                <Image src={project.img} alt={project.name} width={500} height={300} className='w-full h-auto relative object-cover saturate-0 hover:saturate-100 hover:scale-105 duration-300' unoptimized />
                            </TornPaper>
                        </Link>
                        <Link href={project.url} target="_blank">
                            <h3 className='group-hover:text-red-500 text-white text-center quicksand font-bold cursor-pointer duration-300'>{project.name}</h3>
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    )
}
