import { AmazonIcon, NetflixIcon } from "@/icons/icons";
import Image from "next/image";

const Banner = () => {
    return (
        <div className="mt-[70px] space_grotesk">
            <div className="flex lg:gap-0 gap-10 justify-between">
                <div className="md:w-[531px]">
                    <h1 className="xl:text-[60px] md:text-[38px] text-[40px]  font-medium lg:leading-[76.56px] leading-[54.87px]">Navigating the <span className="lg:block"> digital landscape</span> for success</h1>
                    <div className="flex justify-center">
                        <Image className=" md:hidden block  w-[429.44px] h-[310px]" src="/Images/Banner/Illustration.png" width={600.46} height={515} alt="Loading..." />
                    </div>
                    <p className="lg:text-xl text-base font-normal lg:leading-7 leading-6 lg:my-[35px] my-6">Our digital marketing agency helps businesses  <span className="lg:block">grow and succeed online through a range of</span>  services including SEO, PPC, social media marketing,  <span className="lg:block">and content creation.</span></p>
                    <button className="bg-black sm:w-[264px] w-full h-[68px] text-white rounded-[14px] text-xl font-normal shine">Book a consultation</button>
                </div>
                <div className="md:block hidden mt-2.5 mb-5">
                    <Image className="lg:w-[600.46px]   lg:h-[515px] h-96" src="/Images/Banner/Illustration.png" width={600.46} height={515} alt="Loading..." />
                </div>
            </div>
            <div className="grid lg:grid-cols-6  grid-cols-3 lg:gap-[95px] !justify-items-center gap-5 mt-[70px]">
                <AmazonIcon className="md:w-[124.11px] lg:h-[48px] !w-[10px] !h-[10px]" />
                <Image className="lg:w-[126.37px] lg:h-[48px] w-[90px] h-[48px]" src="/Images/Banner/driIcon.svg" width={126.37} height={48} alt="loading" />
                <Image className="lg:w-[128.63px] lg:h-[48px] w-[90px] h-[48px]" src="/Images/Banner/hubspot.svg" width={128.63} height={48} alt="loading" />
                <Image className="lg:w-[145.55px] lg:h-[48px] w-[90px] h-[48px]" src="/Images/Banner/notion.svg" width={145.55} height={48} alt="loading" />
                <NetflixIcon className="lg:w-[125.24px] lg:h-[48px] !w-[10px] !h-[10px]" />
                <Image className="lg:w-[110.57px] lg:h-[48px] w-[90px]  h-[48px]" src="/Images/Banner/zoom.svg" width={110.57} height={48} alt="loading" />
            </div>
        </div>
    );
};

export default Banner;