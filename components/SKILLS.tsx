import TornPaper from './TornPaper'
import Image from 'next/image'
import { BiLogoPostgresql } from 'react-icons/bi';
import { DiIllustrator, DiPhotoshop } from 'react-icons/di';
import { FaDocker, FaGitAlt, FaHtml5, FaJs, FaNode, FaReact, FaServer } from "react-icons/fa";
import { IoLogoFigma } from 'react-icons/io5';
import { SiBlender, SiMongodb, SiNextdotjs, SiVercel } from 'react-icons/si';
import { VscVscodeInsiders } from 'react-icons/vsc';

export default function SKILLS() {
    return (
        <div className='relative w-full h-full flex flex-col gap-3'>
            <h2 className='text-[3vw] leading-[2.3vw] roboto font-black text-white text-center'>TECH STACK & CORE SKILLS</h2>
            <div className="w-full flex items-center gap-5 p-5 pt-2">
                <div className="flex-1 h-fit flex gap-3">
                    <TornPaper className="flex-1 h-fit flex flex-col gap-3 text-black p-0 -rotate-3">
                        <div className="text-black text-[2.5vw] flex justify-center gap-3 flex-wrap p-3">
                            <FaHtml5 />
                            <FaJs />
                            {/* <FaReact />
                            <SiNextdotjs /> */}
                        </div>
                        <TornPaper className="text-white p-3" paperColor='bg-linear-to-br from-[#1f2a2c] to-[#121415]'>
                            <p className='text-[1vw] leading-[1.2vw] quicksand'><span className='text-red-500 font-bold'>FRONTEND:</span> React, Next.js, Tailwind CSS, TypeScript, Three.js...</p>
                        </TornPaper>
                    </TornPaper>
                    <TornPaper className="flex-1 h-fit flex flex-col gap-3 text-black p-0 rotate-3">
                        <div className="flex-1 text-black text-[2.5vw]  flex justify-center gap-3 flex-wrap p-3">
                            <FaServer />
                            <BiLogoPostgresql />
                            {/* <SiMongodb />
                            <FaNode /> */}
                        </div>
                        <TornPaper className="flex-1 text-white p-3" paperColor='bg-linear-to-br from-[#1f2a2c] to-[#121415]'>
                            <p className='text-[1vw] leading-[1.2vw] quicksand'><span className='text-red-500 font-bold'>BACKEND:</span> Node.js, Express, MongoDB, GraphQL, REST, PostgreSQL...</p>
                        </TornPaper>
                    </TornPaper>
                </div>
                <div className="flex-1 flex flex-col gap-3">
                    <TornPaper className="h-fit gap-3 text-black p-0 -rotate-1" innerClassName='flex'>
                        <div className="flex-1 max-w-2/5 text-black text-[2.2vw] flex justify-around gap-2 flex-wrap p-2 ">
                            <FaGitAlt />
                            <FaDocker />
                            <VscVscodeInsiders />
                            <SiVercel />
                        </div>
                        <TornPaper className="flex-1 text-white p-3" paperColor='bg-linear-to-br from-[#1f2a2c] to-[#121415]'>
                            <p className='text-[1vw] leading-[1.2vw] quicksand'><span className='text-red-500 font-bold'>TOOLS:</span> Git, Docker, VS Code, Vercel, CI/CD...</p>
                        </TornPaper>
                    </TornPaper>
                    <TornPaper className="gap-3 text-black p-0 " innerClassName='flex'>
                        <div className="flex-1 max-w-2/5 text-black text-[2.2vw]  flex justify-around gap-2 flex-wrap p-2">
                            <IoLogoFigma />
                            <DiPhotoshop />
                            <DiIllustrator />
                            <SiBlender />
                        </div>
                        <TornPaper className="flex-1 text-white p-3" paperColor='bg-linear-to-br from-[#1f2a2c] to-[#121415]'>
                            <p className='text-[1vw] leading-[1.2vw] quicksand'><span className='text-red-500 font-bold'>DESIGN:</span> Figma, Adobe Photoshop, Adobe Illustrator, Blender, Canva...</p>
                        </TornPaper>
                    </TornPaper>
                </div>
            </div>
        </div>
    )
}
