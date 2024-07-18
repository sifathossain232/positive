"use client"
import Image from "next/image";
import SectionTitle from "../SectionTitle/SectionTitle";
import { servicesData } from "./ServicesData";
import { GoArrowUpRight } from "react-icons/go";
import { useEffect, useState } from "react";


const Services = () => {

    const [index, setIndex] = useState([])
    useEffect(() => {
        setIndex(servicesData)
    }, [])
    return (
        <div>
            <SectionTitle
                headingClass="lg:text-[40px] text-[36px] w-[180px] lg:w-[178px]"
                customClass="text-base leading-[24px] lg:text-lg lg:leading-[22.97px] lg:w-[580px] w-full"
                heading={"Services"}
                subHeading={"At our digital marketing agency, we offer a range of services to help businesses grow and succeed online. These services include:"}
            />
            <div className="lg:grid lg:grid-cols-2 flex flex-col items-center !gap-10 space_grotesk">
                {
                    servicesData.map(item => <div
                        key={item.id}
                        className={`cardShadow border-x border-t border-[#191A23] rounded-[45px] md:w-[600px] md:h-[310px] xl:w-[600px] xl:h-[310px] w-[390px] h-[322px] lg:w-[510px] lg:h-[322px] lg:mx-auto !p-[50px] ${item.id == 1 && "first-card"} ${item.id == 2 && "second-card"} ${item.id == 3 && "thard-card"} ${item.id == 4 && "fourth-card"} ${item.id == 5 && "fifth-card"} ${item.id == 6 && "sixth-card"}`}
                    >
                        <div className="flex justify-between items-center">
                            <div>
                                <div className="mb-[93px]">
                                    <h3 className="text-[30px] font-medium whitespace-nowrap">{item.title}</h3>
                                    <h2 className="text-[30px] font-medium ">{item.titleTow}</h2>
                                </div>
                                <button className="flex items-center gap-[15px] lg:text-xl font-normal lg:leading-7 whitespace-nowrap"><span className="w-5 text-3xl font-extrabold"><GoArrowUpRight /></span>{item.button}</button>
                            </div>
                            <Image className="lg:w-[210px] lg:h-[170px]" src={item.img} width={210} height={170} alt="Loading..." />
                        </div>
                    </div>)
                }
            </div>
        </div>
    );
};

export default Services;