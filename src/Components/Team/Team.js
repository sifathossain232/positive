import Image from "next/image";
import SectionTitle from "../SectionTitle/SectionTitle";
import { teamData } from "./TeamData";
import { Linkdin } from "@/icons/icons";

const Team = () => {
    return (
        <div>
            <SectionTitle
                heading={"Team"}
                subHeading={"Meet the skilled and experienced team behind our successful digital marketing strategies"}
                customClass={"sm:!w-[473px] w-[200px] lg:text-lg text-xs"}
            />
            <div className="grid xl:grid-cols-3 lg:grid-cols-2 gap-10 justify-items-center space_grotesk">
                {
                    teamData.map(item => <div key={item.id}
                        className="cardShadow rounded-[45px] border-x border-t border-black sm:w-[387px] w-[320px] h-[331px]"
                    >
                        <div className="pt-10 px-[35px] relative">
                            <div className="flex gap-5">
                                <Image src={item.img} width={105.65} height={102.82} alt="Loading..." />
                                <div className="mt-[53.82px]">
                                    <h4 className="sm:text-xl text-lg font-medium leading-[25.52px] whitespace-nowrap">{item.name}</h4>
                                    <p className="sm:text-lg text-xs font-normal leading-[22.97px] whitespace-nowrap">{item.title}</p>
                                </div>
                            </div>
                            <div className="absolute top-10 right-[35px]">
                                <Linkdin />
                            </div>
                        </div>
                        <div className="w-[317px] mx-auto border-b border-black opacity-[3px] mt-7"></div>
                        <p className="px-[35px] mt-7 sm:text-base text-[10px] font-normal leading-[22.97px]">{item.disc}</p>
                    </div>
                    )
                }
            </div>
            <div className="flex lg:justify-end justify-center">
                <button className="bg-black text-white text-xl font-normal leading-7 w-[269px] h-[68px] rounded-[14px] mt-10 shine">See all team</button>
            </div>
        </div>
    );
};

export default Team;