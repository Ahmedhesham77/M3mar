import React, { useRef } from 'react'
import { useRouter } from 'next/navigation'; // Next 13+ App Router
import Image from 'next/image'
import { CiCalendarDate } from "react-icons/ci";
import { FaLocationDot } from "react-icons/fa6";
import { IoLogoWhatsapp } from "react-icons/io";
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore from "swiper";


import "swiper/css";
import "./style.css";

// ✅ دالة تقسيم المصفوفة إلى chunks
const chunkArray = <T,>(arr: T[], size: number): T[][] => {
    const result: T[][] = [];
    for (let i = 0; i < arr.length; i += size) {
        result.push(arr.slice(i, i + size));
    }
    return result;
};

interface ReusableSectionProps {
    directionOfHead?: string;
    soldUnitIds?: number[];
    subtitle?: string;
    className?: string;
    button?: React.ReactNode;
    unitsPerSlide?: number; // ✅ استخدام عدد الوحدات في كل شريحة
    units: {
        id: number;
        title: string;
        date: string;
        location: string;
    }[]; // ✅ وحدات المشاريع
}

const NewProject = ({
    directionOfHead,
    soldUnitIds = [],
    button,
    unitsPerSlide = 6,
    units = [],
}: ReusableSectionProps) => {

    const router = useRouter();

    // ✅ تقسيم الوحدات حسب العدد المطلوب لكل شريحة
    const unitSlides = chunkArray(units, unitsPerSlide);
    const swiperRef = useRef<SwiperCore | null>(null);

    return (
        <section className='py-12 px-4 md:px-8 bg-white'>
            <div className={`flex ${directionOfHead} items-baseline justify-between`}>
                <div className='flex flex-col items-end text-start bg-white rounded-lg'>
                    <h2 className='text-lg sm:text-2xl font-bold mb-4'>احدث مشاريع معمار</h2>
                    <p className='text-gray-600 mb-6 text-end text-[12px] sm:text-md'>
                        تعمل شرکة معمار للتطویر العقاري وإدارة المشروعات ﻋﻠﯽ تقدیم أفضل خدمات المقاولات التشیید والبناء
                    </p>
                </div>
                {button && (
                    <div className='w-full sm:w-1/5 flex justify-end mb-4'>
                        {button}
                    </div>
                )}
            </div>

            {/* ✅ Swiper مع شرائح متعددة حسب unitsPerSlide */}
            <Swiper
                onBeforeInit={(swiper) => {
                    swiperRef.current = swiper;
                }}
                className="mySwiper"
            >
                {unitSlides.map((slideUnits, index) => (
                    <SwiperSlide key={index}>
                        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 px-2 md:px-16 mt-2">
                            {slideUnits.map((unit) => {
                                const isSold = soldUnitIds.includes(unit.id);
                                return (
                                    <div key={unit.id} className='flex flex-col gap-1'
                                        onClick={() => {
                                            router.push(`/about-project/ID ${unit.id} ?title=${encodeURIComponent(unit.title)}&date=${encodeURIComponent(unit.date)}&location=${encodeURIComponent(unit.location)}`);
                                        }}

                                    >
                                        <div className="relative w-full h-48 md:h-78 rounded-xl overflow-hidden">
                                            <Image
                                                src={isSold ? "/soldOut.png" : "/elandlus.svg"}
                                                alt={unit.title}
                                                fill
                                                className="object-cover"
                                            />
                                            <div className="absolute rounded-2xl bottom-0 right-0 left-0 bg-black/40 z-10 flex flex-col justify-start p-3 text-white">
                                                <div className="flex flex-row-reverse justify-between text-[9px] sm:text-[12px]">
                                                    <p>{unit.title}</p>
                                                    <div className="bg-[#E37C35] rounded-2xl px-2 py-1 text-[7px] sm:text-[10px]">رقم {unit.id}</div>
                                                </div>
                                                <div className="flex items-center rounded-2xl border-1 border-white w-fit px-2 py-1 gap-1 mt-1 self-end text-[9px] sm:text-xs">
                                                    <p>{unit.date}</p>
                                                    <CiCalendarDate className="text-white text-sm" />
                                                </div>
                                                <div className="flex items-center rounded-2xl border-1 border-white w-fit px-2 py-1 gap-1 mt-1 self-end text-[9px] sm:text-xs">
                                                    <p>{unit.location}</p>
                                                    <FaLocationDot className="text-white text-sm" />
                                                </div>
                                            </div>
                                        </div>

                                        <button className={`w-full flex justify-center gap-1 items-center text-white rounded-2xl py-3 ${isSold ? "bg-[#C3C3C3]" : "bg-[#383191]"}`}>
                                            <p className='text-[8px] sm:text-[12px]'>تواصل عبر الواتساب</p>
                                            <IoLogoWhatsapp className='text-[12px] sm:text-[18px]' />
                                        </button>
                                    </div>
                                );
                            })}
                        </div>
                    </SwiperSlide>
                ))}

                <div className='flex items-center gap-2 justify-center md:justify-end px-15 mt-4'>
                    <button onClick={() => swiperRef.current?.slidePrev()} className='rounded-full bg-[#E37C35] p-1 text-[16px] sm:text-[20px] text-white transition-all hover:bg-white hover:text-[#E37c35] duration-300'><FiArrowLeft /></button>
                    <button onClick={() => swiperRef.current?.slideNext()} className='rounded-full bg-[#E37C35] p-1 text-[16px] sm:text-[20px] text-white transition-all hover:bg-white hover:text-[#E37c35] duration-300'><FiArrowRight /></button>
                </div>
            </Swiper>
        </section>
    )
}

export default NewProject;
