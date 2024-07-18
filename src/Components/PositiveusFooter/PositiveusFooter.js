import Image from "next/image";
import Link from "next/link";
import { FaLinkedinIn } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { AiOutlineTwitter } from "react-icons/ai";

const PositiveusFooter = () => {
    return (
        <div className="xl:w-[1241px] w-full xl:h-[514px] h-full bg-[#191A23] mt-[140px] rounded-t-[45px] lg:px-[60px] pt-[55px] space_grotesk">
            <div className="flex md:justify-between xl:gap-[155px] items-center text-lg font-normal leading-[22.97px]">
                <div className="flex md:flex-row flex-col md:justify-between w-full items-center">
                    <Image src="/Images/Footer/Logo.png" width={180} height={29} alt="Loading..." />
                    <div className="text-white md:text-lg text-base flex md:flex-row flex-col text-center md:my-0 my-[37px] lg:gap-10 gap-4 md:underline">
                        <Link href={"/"}>About us</Link>
                        <Link href={"/"}>Services</Link>
                        <Link href={"/"}>Use Cases</Link>
                        <Link href={"/"}>Pricing</Link>
                        <Link href={"/"}>Blog</Link>
                    </div>
                </div>
                <div className="xl:block hidden">
                    <div className="flex gap-5 ">
                        <div className="w-[30px] h-[30px] bg-white rounded-full flex items-center justify-center">
                            <FaLinkedinIn className="w-[15px] h-[15px]" />
                        </div>
                        <div className="w-[30px] h-[30px] bg-white rounded-full flex items-center justify-center">
                            <FaFacebookF className="w-[15px] h-[15px]" />
                        </div>
                        <div className="w-[30px] h-[30px] bg-white rounded-full flex items-center justify-center">
                            <AiOutlineTwitter className="w-[15px] h-[15px]" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="md:mt-[66px] flex lg:flex-row items-center text-center lg:text-start flex-col xl:gap-[154px] gap">
                <div className="lg:mb-0 mb-[37px]">
                    <h4 className="bg-[#B9FF66] w-[126px] lg:ml-0 ml-[105px] h-[26px] text-xl font-medium leading-[25.52px] px-[7px] rounded-[7px]">Contact us:</h4>
                    <p className="mt-[27px] lg:text-lg text-base text-white font-normal leading-[22.97px]">Email: info@positivus.com</p>
                    <p className="my-5 lg:text-lg text-base text-white font-normal leading-[22.97px">Phone: 555-567-8901</p>
                    <p className="lg:text-lg text-base text-white font-normal leading-[22.97px] w-[332px]">Address: 1234 Main St Moonstone City, Stardust State 12345</p>
                </div>
                <div className="bg-[#292A32] rounded-[14px] xl:w-[634px] p-5 w-full h-[188px] flex justify-center items-center">
                    <div className="flex xl:flex-row flex-col gap-5">
                        <input className="outline-none border border-white w-[285px] h-[67px] pl-[35px] text-lg placeholder:text-white rounded-[14px] bg-[#292A32] font-normal leading-[22.97px]" type="email" name="Email" id="Email" placeholder="Email" />
                        <input className="bg-[#B9FF66] xl:w-[249px] w-[285px] h-[68px] rounded-[14px] text-xl cursor-pointer font-normal leading-7 hover:opacity-70 duration-500" type="button" value="Subscribe to news" />
                    </div>
                </div>
                <div className="md:hidden block mt-[37px]">
                    <div className="flex gap-5 ">
                        <div className="w-[30px] h-[30px] bg-white rounded-full flex items-center justify-center">
                            <FaLinkedinIn className="w-[15px] h-[15px]" />
                        </div>
                        <div className="w-[30px] h-[30px] bg-white rounded-full flex items-center justify-center">
                            <FaFacebookF className="w-[15px] h-[15px]" />
                        </div>
                        <div className="w-[30px] h-[30px] bg-white rounded-full flex items-center justify-center">
                            <AiOutlineTwitter className="w-[15px] h-[15px]" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="border border-white opacity-[17%] xl:w-[1120px] w-full my-[50px]"></div>
            <div className="flex lg:flex-row flex-col text-center justify-center lg:gap-10 gap-[15px] lg:mt-0 mt-[37px]">
                <p className="text-lg text-white font-normal leading-7">© 2024 Positivus. All Rights Reserved.</p>
                <Link className="text-lg text-white font-normal leading-7 md:underline" href={"/"}>Privacy Policy</Link>
            </div>
        </div>
    );
};

export default PositiveusFooter;