const SectionTitle = ({heading, subHeading, customClass, headingClass}) => {
    return (
        <div className="flex flex-col items-center text-center xl:items-start xl:justify-start xl:flex xl:flex-row md:text-start xl:gap-10 gap-[30px] mt-[140px] xl:mb-[80px] mb-[40px] space_grotesk">
            <h2 className={`bg-[#B9FF66] text-[40px] font-medium leading-[51.04px] rounded-[7px] px-[7px] ${headingClass}`}>{heading}</h2>
            <p className={`text-lg font-normal leading-[22.97px] ${customClass}`}>{subHeading}</p>
        </div>
    );
};

export default SectionTitle;