'use client';

import { useAppSelector } from "@/redux/hooks";
import { selectStation } from "@/redux/slices/stationSlice";
import Billboard_content from "./Billboard_content"
import { motion } from "motion/react";
import { useEffect, useRef } from "react";


export default function Billboard_f() {
    const screenSize = useAppSelector((state) => state.screen.size);
    const station = useAppSelector(selectStation);

    const prevStationRef = useRef<number>(station);
    const longTransition = Math.abs(station - prevStationRef.current) > 1;

    useEffect(() => {
        // update the stored previous station after render
        prevStationRef.current = station;
    }, [station]);
    return (
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
            <motion.div style={{ translateX: `-${100 / 4 * station}%`, transition: `transform ${longTransition ? 6 : 3}s ease 0s` }} className="relative w-fit h-full flex">
                <div className={`min-w-screen w-screen h-full flex flex-col ${screenSize === "dp" ? "items-end" : "items-center"} justify-end`}>
                    <div className={`relative ${screenSize === "dp" ? "w-full h-auto aspect-[2.57028/1]" : "w-[85%] h-auto xs:w-auto xs:h-4/5 aspect-1393/2811"}`}>
                        <Billboard_content tabIndex={0} />
                    </div>
                </div>
                <div className={`min-w-screen w-screen h-full flex flex-col ${screenSize === "dp" ? "items-end" : "items-center"} justify-end`}>
                    <div className={`relative ${screenSize === "dp" ? "w-full h-auto aspect-[2.57028/1]" : "w-[85%] h-auto xs:w-auto xs:h-4/5 aspect-1393/2811"}`}>
                        <Billboard_content tabIndex={1} />
                    </div>
                </div>
                <div className={`min-w-screen w-screen h-full flex flex-col ${screenSize === "dp" ? "items-end" : "items-center"} justify-end`}>
                    <div className={`relative ${screenSize === "dp" ? "w-full h-auto aspect-[2.57028/1]" : "w-[85%] h-auto xs:w-auto xs:h-4/5 aspect-1393/2811"}`}>
                        <Billboard_content tabIndex={2} />
                    </div>
                </div>
                <div className={`min-w-screen w-screen h-full flex flex-col ${screenSize === "dp" ? "items-end" : "items-center"} justify-end`}>
                    <div className={`relative ${screenSize === "dp" ? "w-full h-auto aspect-[2.57028/1]" : "w-[85%] h-auto xs:w-auto xs:h-4/5 aspect-1393/2811"}`}>
                        <Billboard_content tabIndex={3} />
                    </div>
                </div>
            </motion.div>
        </div>
    )
}
