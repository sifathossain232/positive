"use client"
import Image from "next/image";
import { useState } from "react";
import { RxCross2 } from "react-icons/rx";
import { MdOutlineMenu } from "react-icons/md";

const Navbar = () => {
    const [open, setOpen] = useState(false)
    return (
        <div className="flex items-center justify-between xl:w-[1240px] w-full mx-auto xl:mt-[60px] lg:mt-10 mt-[30px] space_grotesk relative xl:px-0 px-5 lg:px-0">
            <div className="flex items-center gap-[4.44px]">
                <Image className="xl:block hidden" src="/Images/Header/Logo.png" width={219.54} height={36} alt="Loading..." />
                <Image className="xl:hidden block" src="/Images/Header/Logo (2).png" width={144} height={23.61} alt="Loading..." />
            </div>
            <div onClick={() => setOpen(!open)} className='lg:hidden absolute right-5 top-0  text-2xl'>
                {open ?<RxCross2 /> : <MdOutlineMenu />}
            </div>
            <div className={`flex lg:flex-row flex-col items-center gap-10  absolute  ${open ? "top-10 right-20  max-w-full overflow-hidden opacity-0 max-h-0" : "  duration-300 lg:right-[1px] right-5 lg:-top-4 top-10 lg:bg-none bg-white lg:border-none border lg:p-0 p-5 lg:rounded-none rounded-lg max-w-full overflow-hidden"}`}>
                <ul className={`xl:text-xl font-normal leading-7 flex lg:flex-row flex-col lg:gap-[40.48px] gap-4 cursor-pointer`}>
                    <li>About us</li>
                    <li>Services</li>
                    <li>Use Cases</li>
                    <li>Pricing</li>
                    <li>Blog</li>
                </ul>
                <button className="border border-[#191A23] xl:py-5 lg:py-3.5 py-2.5 lg:px-[35px] px-5 xl:text-xl font-normal leading-7 cursor-pointer rounded-[14px] whitespace-nowrap hover:bg-black hover:border-none hover:text-white duration-500">Request a quote</button>
            </div>
        </div>
    );
};

export default Navbar;