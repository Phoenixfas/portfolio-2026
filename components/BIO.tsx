import TornPaper from './TornPaper'
import Image from 'next/image'

export default function BIO() {
    return (
        <div className="relative w-full h-full flex gap-5">
            <div className="min-w-1/3 w-1/3 flex flex-col items-center gap-3 ">
                <div className="w-4/5">
                    <TornPaper rounded className='p-[0.5vw]' innerClassName='overflow-hidden'>
                        <div className="absolute w-full h-full bg-linear-to-b from-[#5C0006] to-[#FF0011] rounded-full overflow-hidden">
                            <Image src="/images/env/paper_tex.webp" alt="paper_texture" fill className='object-cover mix-blend-multiply' />
                        </div>
                        <Image src="/images/stations/Profile_pic.webp" alt="face" width={200} height={200} className='w-full h-auto aspect-square relative object-cover rounded-full' unoptimized />
                    </TornPaper>
                </div>
                <p className="text-white text-[1.2vw] quicksand font-black">
                    FASIKA DAGNACHEW
                </p>
            </div>
            <div className="flex flex-col gap-3 h-full pr-3 ">
                <TornPaper className="text-black px-[2vw] py-0">
                    <h2 className="text-[3vw] leading-[3.7vw] roboto font-black">
                        BIO
                    </h2>
                </TornPaper>
                <TornPaper className="text-black px-[.5vw] py-0">
                    <p className="text-[0.9vw] leading-[2vw] roboto font-bold">
                        FULL STACK DEVELOPER | 3D ARTIST | TECH ENTHUSIAST
                    </p>
                </TornPaper>
                <div className="flex flex-col gap-2 text-[0.9vw] leading-[1.5vw] quicksand overflow-y-scroll scrollbar-track-transparent scrollbar-thumb-red-700 scrollbar-thin">
                    {/* <p>I’m a <strong>Full-Stack Engineer</strong> building scalable, high-performance systems for modern products.</p> */}
                    <p>My work spans full-stack architecture, real-time infrastructure, AI integration, and interactive 3D web experiences. I operate with end-to-end ownership, from system design and backend architecture to frontend execution and deployment.</p>
                    <p>I focus on building software that scales, performs under load, and remains maintainable as it grows. I think in systems, data flow, and long-term technical direction, not just features.</p>
                    <p><em>Open to global remote roles where engineering quality, autonomy, and technical depth matter.</em></p>
                </div>
            </div>
        </div>
    )
}
