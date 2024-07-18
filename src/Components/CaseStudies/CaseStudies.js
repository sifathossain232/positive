import { GoArrowUpRight } from "react-icons/go";
import SectionTitle from "../SectionTitle/SectionTitle";

const CaseStudies = () => {
    return (
        <div>
            <SectionTitle
            // headingClass="lg:w-[265px] w-[200px] lg:text-[40px] text-xl text-center"
                heading={"Case Studies"}
                subHeading={"Explore Real-Life Examples of Our Proven Digital Marketing Success through Our Case Studies"}
                customClass="lg:w-[580px]"
            />
            <div className="xl:w-[1234px] xl:h-[326px] lg:w-[1000px] w-[350px] mx-auto bg-black rounded-[45px] lg:flex px-[60px] lg:pt-[50px] !justify-items-center">
                <div className="flex gap-16">
                    <div className="w-[286px]">
                        <p className="text-white xl:text-lg text-base font-normal leading-[22.97px]">For a local restaurant, we implemented a targeted PPC campaign that resulted in a 50% increase in website traffic and a 25% increase in sales.</p>
                        <button className="text-xl font-normal mt-5 left-7 text-[#B9FF66] flex items-center gap-[15px] group">Learn more<span className="font-extrabold w-[17.32px] text-3xl group-hover:translate-x-3 duration-500"><GoArrowUpRight /></span></button>
                    </div>
                    <div className="xl:border-r h-[186px] border-white"></div>
                </div>
               <div className="flex gap-16">
               <div className="xl:ml-16 w-[286px]">
                    <p className="text-white xl:text-lg text-base  font-normal leading-[22.97px]">For a B2B software company, we developed an SEO strategy that resulted in a first page ranking for key keywords and a 200% increase in organic traffic.</p>
                    <button className="text-xl font-normal mt-5 left-7 text-[#B9FF66] flex items-center gap-[15px] group">Learn more<span className="font-extrabold w-[17.32px] text-3xl group-hover:translate-x-3 duration-500"><GoArrowUpRight /></span></button>
                </div>
                <div className="xl:border-r w-[] h-[186px] border-white"></div>
               </div>
                <div className="xl:ml-16 w-[286px] lg:h-[186px]">
                    <p className="text-white xl:text-lg text-base  font-normal leading-[22.97px]">For a national retail chain, we created a social media marketing campaign that increased followers by 25% and generated a 20% increase in online sales.</p>
                    <button className="text-xl font-normal mt-5 left-7 text-[#B9FF66] flex items-center gap-[15px] group">Learn more<span className="font-extrabold w-[17.32px] text-3xl group-hover:translate-x-3 duration-500"><GoArrowUpRight /></span></button>
                </div>
            </div>
        </div>
    );
};

export default CaseStudies;