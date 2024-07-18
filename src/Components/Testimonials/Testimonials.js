"use client"
import { useEffect, useState } from "react";
import SectionTitle from "../SectionTitle/SectionTitle";
import { testimonialsData } from "./TestimonialsData";
import { Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css'; import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { SwiperButton } from './../swiperButton/SwiperButton';

const Testimonials = () => {

    const [items, setItems] = useState([])
    useEffect(() => {
        setItems(testimonialsData)
    }, [])

    return (
        <div>
            <SectionTitle
                heading={"Testimonials"}
                subHeading={"Hear from Our Satisfied Clients: Read Our Testimonials to Learn More about Our Digital Marketing Services"}
                customClass={"lg:w-[473px]"}
            />
            <div className="xl:w-[1240px] w-full sm:h-[625px] h-[500px] bg-[#191A23] rounded-[45px] space_grotesk ">
                <Swiper pagination={{ clickable: true, }} navigation={true} modules={[Navigation, Pagination]} breakpoints={{
                    1024: {
                        slidesPerView: 2.5,
                        spaceBetween: 32,
                    },
                    768: {
                        slidesPerView: 1.5,
                        spaceBetween: 30,
                    },
                    640: {
                        slidesPerView: 1,
                        spaceBetween: 20,
                    },
                }}
                    className="mySwiper">
                    {
                        items.map(item =>
                            <SwiperSlide key={item.id}>
                                <div className="relative">
                                    <div className="mt-[84px] flex gap-5">
                                        <div className="border border-[#B9FF66] rounded-[45px] p-[30px]">
                                            <p className="text-white text-base font-normal leading-[22.97px]">"{item.disc}"</p>
                                        </div>
                                    </div>
                                    <div className="rotate-45 absolute left-[80px] -bottom-5">
                                        <div className="w-[40px] h-[40px] border-b border-r border-[#B9FF66] bg-[#191A23]"></div>
                                    </div>
                                </div>
                                <div className="ml-[80px] mt-10">
                                    <h4 className="text-[#B9FF66] text-xl font-medium leading-[25.52px]">{item.name}</h4>
                                    <p className="text-white text-lg font-normal leading-[22.97px]">{item.title}</p>
                                </div>
                            </SwiperSlide>
                        )
                    }
                    {/* <div className="relative -top-[25%] ">
                        <SwiperButton />
                    </div> */}
                </Swiper>
            </div>
        </div>
    );
};

export default Testimonials;