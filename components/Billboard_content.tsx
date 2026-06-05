import BIO from './BIO'
import SKILLS from './SKILLS'
import PORTFOLIO from './PORTFOLIO'
import CONTACT from './CONTACT'

export default function Billboard_content({ tabIndex }: { tabIndex?: number }) {
    return (
        <div className={`absolute top-[2%] left-[38.3%] w-[45.7%] h-auto aspect-[2.48/1] bg-linear-to-br from-[#1f2a2c] to-[#121415] shadow-[inset_0px_0px_6px_0px_#000000] px-2 py-5 ${tabIndex === 0 && 'pb-0'} flex flex-col overflow-hidden`}>
            {/* <div className="absolute top-0 left-0 w-full h-full">
                <Image src="/images/env/paper_tex.webp" alt="paper_texture" fill className='object-cover mix-blend-color-dodge brightness-150 invert' />
            </div> */}
            {tabIndex === 0 && <BIO />}
            {tabIndex === 1 && <SKILLS />}
            {tabIndex === 2 && <PORTFOLIO />}
            {tabIndex === 3 && <CONTACT />}
        </div>
    )
}

// const MyIcon = ({ color }: { color: string }) => (
//     <svg className="absolute duration-500 w-full h-full" width="100%" height="100%" viewBox="0 0 500 500" fill={"#00ff00"} xmlns="http://www.w3.org/2000/svg">
//         <path d="M15 50C25 30 60 15 100 20C130 10 170 20 210 12C270 5 320 18 380 10C430 5 470 25 485 50L475 120L490 180L480 260L492 340L475 430C460 470 420 490 370 485C330 495 270 485 220 490C160 495 110 480 70 488C35 480 15 460 10 420L20 340L10 260L20 180L8 100Z" />
//     </svg>
// );
