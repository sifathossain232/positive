"use client"
import { useState } from "react";
import SectionTitle from "../SectionTitle/SectionTitle";
import { workingProcessData } from "./WorkingProcessData";
import { FaPlus } from "react-icons/fa";
import { FaWindowMinimize } from "react-icons/fa";


const WorkingProcess = () => {

    const [open, setOpen] = useState(null)

    const handleClick = (idx) =>{
        setOpen(open === idx ? null : idx)
    }

    return (
        <div>
            <SectionTitle
            headingClass="sm:text-[40px] text-xl"
                heading={"Our Working Process"}
                subHeading={"Step-by-Step Guide to Achieving Your Business Goals"}
                customClass={'!w-[292px] sm:text-lg text-base'}
            />
            <div>
                {
                    workingProcessData.map((item,idx) =>
                        <div key={item.id}
                            className={`cardShadow border-x border-t  border-[#191A23] rounded-[45px] bg-[#F3F3F3] mb-[30px] duration-1000 last:mb-0 ${open === idx ? "max-w-auto py-[41px]  !bg-[#B9FF66]" : "py-[41px] h-[159px]"}`}
                        >
                            <button onClick={() => handleClick(idx)} className="xl:w-[1117px] lg:w-[880px] md:w-[680px] sm:w-[580px] w-[280px] flex justify-between items-center mx-auto">
                                <div className="flex items-center sm:gap-[25px] gap-1">
                                    <h1 className="lg:text-[60px] sm:text-[30px] font-medium leading-[76.56px]">{item.id}</h1>
                                    <h2 className="lg:text-3xl sm:text-xl text-xs font-medium leading-[38.28px]">{item.title}</h2>
                                </div>
                                <div className="sm:w-[58px] sm:h-[58px] w-8 h-8 border border-black rounded-full flex justify-center items-center">
                                    {open === idx ? <FaWindowMinimize className="sm:w-[25.08px] sm:h-[25.08px] font-extrabold -mt-[12px] duration-500" /> : <FaPlus className="sm:w-[25.08px] sm:h-[25.08px] font-extrabold duration-500" /> }
                                </div>
                            </button>
                            <div className={`overflow-hidden ${open === idx ? "max-w-auto" : "max-w-0"}`}>
                                <div className="w-[1114px] mx-auto">
                                <div className="border-t border-black opacity-25 my-[30px]"></div>
                                <p className="sm:text-lg leading-[22.97px] font-normal text-[10px]">{item.disc}</p>
                                </div>
                            </div>
                        </div>
                    )
                }
            </div>
        </div>
    );
};

export default WorkingProcess;








