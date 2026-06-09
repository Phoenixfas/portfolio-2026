// 'use client';

// import { useEffect } from 'react'
import TornPaper from './TornPaper'
import Image from 'next/image'
import Link from 'next/link'
// import { useAppDispatch } from '@/redux/hooks'
// import { registerImages, imageLoaded } from '@/redux/slices/loadingSlice'

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
    // const dispatch = useAppDispatch();
    // const myImages = ['https://iili.io/qfW8np4.png', 'https://iili.io/qfWvihB.png', 'https://iili.io/qfWk8RR.png'];

    // useEffect(() => {
    //     dispatch(registerImages(myImages.length));
    // }, [dispatch, myImages.length]);

    return (
        <div className='relative w-full h-full flex flex-col gap-[1vw] xl:gap-[1.5vw]'>
            <h2 className='text-2xl leading-5 lg:text-[3vw] lg:leading-[2.3vw] roboto font-black text-white text-center'>RECENT PROJECTS</h2>
            <div className="w-full flex flex-col lg:flex-row gap-[1.5vw] p-[1.5vw] pt-2">
                {projects.map((project, index) => (
                    <div key={index} className="group flex flex-col gap-[1vh] items-center">
                        <Link href={project.url} target="_blank" className='w-2/3 lg:w-full'>
                            <TornPaper className={`p-3 cursor-pointer hover:scale-110 duration-300 ${index === 0 ? '-rotate-3' : index === 1 ? 'rotate-2' : '-rotate-2'}`}>
                                <Image src={project.img} alt={project.name} width={500} height={300} className='w-full h-auto relative object-cover saturate-0 hover:saturate-100 hover:scale-105 duration-300' quality={50} />
                            </TornPaper>
                        </Link>
                        <Link href={project.url} target="_blank">
                            <h3 className='group-hover:text-red-500 text-sm lg:text-[1vw] text-white text-center quicksand font-bold cursor-pointer duration-300'>{project.name}</h3>
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    )
}
