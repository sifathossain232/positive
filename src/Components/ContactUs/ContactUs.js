"use client"
import { useState } from "react";
import SectionTitle from "../SectionTitle/SectionTitle";
import { Checkbox, CheckboxChecked, CheckboxCheckedTwo, CheckboxTwo } from "@/icons/icons";
import Image from "next/image";
import ContactImg from "/public/Images/ContactUs/Contact-Img.png"

const ContactUs = () => {
    const [check, setCheck] = useState(false);
    const [checkTwo, setCheckTwo] = useState(false);
    return (
        <div>
            <SectionTitle
                heading={"Contact Us"}
                subHeading={"Connect with Us: Let's Discuss Your Digital Marketing Needs"}
                customClass={"!w-[323px]"}
            />
            <div className="xl:w-[1240px] w-full xl:h-[773px] h-full bg-[#F3F3F3] rounded-[45px] space_grotesk">
                <div className="flex lg:justify-between justify-center lg:gap-5">
                    <div className="lg:ml-[100px] py-[60px]">
                        <div className="flex gap-[35px]">
                            <div className="flex gap-[14px] items-center">
                                {
                                    !check ? <span onClick={() => setCheck((prev) => !prev)}><Checkbox /></span> :
                                        <span onClick={() => setCheck((prev) => !prev)}><CheckboxChecked /></span>
                                }
                                <label className="text-lg font-normal leading-[22.97px]" htmlFor="Say Hi">Say Hi</label>
                            </div>
                            <div className="flex gap-[14px] items-center">
                                {
                                    !checkTwo ? <span onClick={() => setCheckTwo((prevTwo) => !prevTwo)}><CheckboxTwo /></span> :
                                        <span onClick={() => setCheckTwo((prevTwo) => !prevTwo)}><CheckboxCheckedTwo /></span>
                                }
                                <label className="text-lg font-normal leading-[22.97px]" htmlFor="Get a Quote">Get a Quote</label>
                            </div>
                        </div>
                        <div>
                            <div className="flex flex-col gap-[5px] mt-10">
                                <label className="text-base font-normal leading-7" htmlFor="Name">Name</label>
                                <input className="lg:w-[556px] md:w-[450px] h-[59px] border border-[#000000] outline-none pl-[30px] rounded-[14px] text-lg text-[#898989] font-normal leading-[22.97px]" type="text" name="Name" id="name" placeholder="Name" />
                            </div>
                            <div className="flex flex-col gap-[5px] mt-10">
                                <label className="text-base font-normal leading-7" htmlFor="Email">Email*</label>
                                <input className="lg:w-[556px] md:w-[450px] h-[59px] border border-[#000000] outline-none pl-[30px] rounded-[14px] text-lg text-[#898989] font-normal leading-[22.97px]" type="email" name="Email" id="Email" placeholder="Email" />
                            </div>
                            <div className="flex flex-col gap-[5px] mt-10">
                                <label className="text-base font-normal leading-7" htmlFor="Message">Message*</label>
                                <textarea className="lg:w-[556px] md:w-[450px] h-[190px] border border-[#000000] outline-none pl-[30px] pt-[18px] rounded-[14px] text-lg text-[#898989] font-normal leading-[22.97px] resize-none" name="Message" id="Message" placeholder="Message">Message</textarea>
                            </div>
                            <input className="lg:w-[556px] md:w-[450px] w-full h-[59px] mt-10 outline-none bg-black rounded-[14px] cursor-pointer shine text-white text-xl font-normal leading-7 hover:opacity-80 duration-500" type="button" value="Send Message" />
                        </div>
                    </div>
                    <div className="xl:mt-[78px] lg:mt-[80px] lg:!w-[345.78px] !h-[648px] lg:block hidden">
                        <Image src={ContactImg}  alt="Loading..." />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactUs;