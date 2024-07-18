import Image from "next/image";

const About = () => {
    return (
        <div className='xl:w-[1240px] lg:w-[1000px] w-[390px] xl:h-[347px] h-[370px] mx-auto bg-[#F3F3F3] rounded-[45px] mt-[123.5px] space_grotesk'>
           <div className="flex items-center gap-[186px] pr-[135px] pl-[60px]">
            <div className="py-[60px]">
                <h3 className="text-3xl font-medium leading-[38.28px]">Let’s make things happen</h3>
                <p className="text-lg font-normal leading-[22.97px] my-[26px]">Contact us today to learn more about how our digital marketing services can help your business grow and succeed online.</p>
                <button className="bg-black rounded-[14px] w-[288px] h-[68px] text-white text-xl font-normal leading-7 shine">Get your free proposal</button>
            </div>
            <Image className="lg:flex lg:justify-center lg:items-center lg:-mt-[23.5px] block hidden" src="/Images/About/Illustration (7).png" alt="Loading..." width={359} height={394.27} />
           </div> 
        </div>
    );
};

export default About;