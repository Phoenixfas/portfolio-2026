'use client'
import { useState } from 'react';
import TornPaper from './TornPaper';
const accessKey = process.env.NEXT_PUBLIC_WB3F_ACCESS_KEY

export default function ContactForm() {
    const [result, setResult] = useState("");
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    const onSubmit = async (event: any) => {
        event.preventDefault();
        setIsLoading(true);
        const formData = new FormData();
        formData.append("access_key", accessKey || "");
        formData.append("name", name);
        formData.append("email", email);
        formData.append("message", message);

        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: formData
        });

        const data = await response.json();
        setResult(data.success ? "Sent!" : "Error");
        setIsLoading(false);
    };
    return (
        <form className="w-full h-fit flex flex-col gap-5 lg:gap-[1vw]" onSubmit={onSubmit}>
            <TornPaper className="w-full text-black px-3 py-2 lg:px-[0.7vw] lg:py-0 xl:py-[0.6vh] z-10">
                <input className='w-full text-base lg:text-[.9vw] lg:leading-[1.2vw] outline-none border-b-2 border-gray-400 focus:border-red-500 placeholder:text-gray-400 duration-300' placeholder="Name" type="text" name="name" required value={name} onChange={(e) => setName(e.target.value)} />
            </TornPaper>
            <TornPaper className="w-full text-black px-3 py-2 lg:px-[0.7vw] lg:py-0 xl:py-[0.6vh] z-10">
                <input className='w-full text-base lg:text-[.9vw] lg:leading-[1.2vw] outline-none border-b-2 border-gray-400 focus:border-red-500 placeholder:text-gray-400 duration-300' placeholder="Email" type="email" name="email" required value={email} onChange={(e) => setEmail(e.target.value)} />
            </TornPaper>
            <TornPaper className="w-full text-black px-3 py-2 lg:px-[0.7vw] lg:py-0 xl:py-[0.6vh] z-10">
                <textarea className='w-full text-base lg:text-[.9vw] lg:leading-[1.2vw] outline-none border-b-2 border-gray-400 focus:border-red-500 placeholder:text-gray-400 duration-300' name="message" required value={message} onChange={(e) => setMessage(e.target.value)} placeholder="Message"></textarea>
            </TornPaper>
            <div className="w-full flex justify-end">
                <button type="submit" className="group w-fit">
                    <TornPaper className="p-[0.1vw] rotate-6 -translate-y-3/4 group-hover:scale-110 z-20 duration-300" paperColor="bg-black">
                        <TornPaper className="w-fit text-base lg:text-[1vw] font-black text-white group-hover:text-red-500 px-[1.5vw] py-[0.4vh] cursor-pointer duration-300" paperColor="bg-red-500 group-hover:bg-white">
                            {isLoading ? "Sending..." : result ? result : "SUBMIT"}
                        </TornPaper>
                    </TornPaper>
                </button>
            </div>
        </form>
    )
}