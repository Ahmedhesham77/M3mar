import React, { useRef } from 'react'
import Image from 'next/image'
import { CiCalendarDate } from "react-icons/ci";

import { FiArrowLeft, FiArrowRight } from "react-icons/fi";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore from "swiper";

import "swiper/css";
import "./style.css";


const NewsEvents = () => {
    const swiperRef = useRef<SwiperCore | null>(null);
    return (
        <section className='py-12 px-4 md:px-8 bg-white'>
            <div className='flex flex-row-reverse  items-baseline justify-between   '>
                <div className='flex flex-col  items-end text-start  bg-white rounded-lg '>
                    <h2 className=' text-lg sm:text-2xl font-bold mb-4'>  أخبار و فعليات</h2>
                    <p className='text-gray-600 mb-6 text-end text-[12px] sm:text-md'>تعمل شرکة معمار للتطویر العقاري وإدارة المشروعات ﻋﻠﯽ تقدیم أفضل خدمات المقاولات التشیید والبناء</p>

                </div>
                <div className='w-full sm:w-1/5 flex justify-end mb-4'>
                    <button className='px-4 py-3 bg-white border-[E37C35] border-[1px] text-[#E37C35] w-full text-[12px] md:text-[14px] rounded-2xl hover:bg-[#E37C35] hover:text-white transition duration-200'>
                        إطلع علي الاخبار
                    </button></div>
            </div>
            {/* grid system  */}
            <Swiper
                onBeforeInit={(swiper) => {
                    swiperRef.current = swiper;
                }}

                className="mySwiper">
                <SwiperSlide>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 px-2 md:px-16 ">
                        {/* عنصر 1 */}
                        <div className='flex flex-col gap-1'>
                            <div className="relative w-full h-48 md:h-78 rounded-xl overflow-hidden ">
                                <Image src="/Events1.svg" alt="مشروع" fill className="object-cover" />
                                <div className="absolute rounded-2xl  inset-0 bg-black/40  h-full  z-10 flex flex-col justify-end p-3 text-white">
                                    <div className="flex flex-row-reverse justify-between text-[9px] sm:text-[12px] md:text-[14px] font-semibold">
                                        <p >اسم الخبر/الفعالية</p>

                                    </div>
                                    <div className="flex  items-center rounded-2xl  border-white w-fit px-2 py-1 gap-1 mt-1 self-end text-[9px] sm:text-xs">
                                        <p>
                                            12 نوفمبر
                                        </p>
                                        <p>2025</p>
                                        <CiCalendarDate className="text-white text-sm" />
                                    </div>
                                    <button className='w-full flex justify-center gap-1 items-center  rounded-2xl py-3 mx-auto bg-white text-[#E37C35]  hover:bg-[#E37C35] hover:text-white transition duration-200 mt-2'>
                                        <p className='text-[8px] sm:text-[12px] md:text-[14px] font-semibold '>اقرأ المزيد</p>

                                    </button>
                                </div>


                            </div>


                        </div>


                        {/* عنصر 2 */}
                        <div className='flex flex-col gap-1'>
                            <div className="relative w-full h-48 md:h-78 rounded-xl overflow-hidden ">
                                <Image src="/Events2.svg" alt="مشروع" fill className="object-cover" />
                                <div className="absolute rounded-2xl  inset-0 bg-black/40  h-full  z-10 flex flex-col justify-end p-3 text-white">
                                    <div className="flex flex-row-reverse justify-between text-[9px] sm:text-[12px] md:text-[14px] font-semibold">
                                        <p >اسم الخبر/الفعالية</p>

                                    </div>
                                    <div className="flex  items-center rounded-2xl  border-white w-fit px-2 py-1 gap-1 mt-1 self-end text-[9px] sm:text-xs">
                                        <p>
                                            12 نوفمبر
                                        </p>
                                        <p>2025</p>
                                        <CiCalendarDate className="text-white text-sm" />
                                    </div>
                                    <button className='w-full flex justify-center gap-1 items-center  rounded-2xl py-3 mx-auto bg-white text-[#E37C35]  hover:bg-[#E37C35] hover:text-white transition duration-200 mt-2'>
                                        <p className='text-[8px] sm:text-[12px] md:text-[14px] font-semibold '>اقرأ المزيد</p>

                                    </button>
                                </div>


                            </div>


                        </div>


                        {/* عنصر 3 */}
                        <div className='flex flex-col gap-1'>
                            <div className="relative w-full h-48 md:h-78 rounded-xl overflow-hidden ">
                                <Image src="/Events3.svg" alt="مشروع" fill className="object-cover" />
                                <div className="absolute rounded-2xl  inset-0 bg-black/40  h-full  z-10 flex flex-col justify-end p-3 text-white">
                                    <div className="flex flex-row-reverse justify-between text-[9px] sm:text-[12px] md:text-[14px] font-semibold">
                                        <p >اسم الخبر/الفعالية</p>

                                    </div>
                                    <div className="flex  items-center rounded-2xl  border-white w-fit px-2 py-1 gap-1 mt-1 self-end text-[9px] sm:text-xs">
                                        <p>
                                            12 نوفمبر
                                        </p>
                                        <p>2025</p>
                                        <CiCalendarDate className="text-white text-sm" />
                                    </div>
                                    <button className='w-full flex justify-center gap-1 items-center  rounded-2xl py-3 mx-auto bg-white text-[#E37C35]  hover:bg-[#E37C35] hover:text-white transition duration-200 mt-2'>
                                        <p className='text-[8px] sm:text-[12px] md:text-[14px] font-semibold '>اقرأ المزيد</p>

                                    </button>
                                </div>


                            </div>


                        </div>


                        {/* عنصر 4 */}
                        <div className='flex flex-col gap-1'>
                            <div className="relative w-full h-48 md:h-78 rounded-xl overflow-hidden ">
                                <Image src="/Events4.svg" alt="مشروع" fill className="object-cover" />
                                <div className="absolute rounded-2xl  inset-0 bg-black/40  h-full  z-10 flex flex-col justify-end p-3 text-white">
                                    <div className="flex flex-row-reverse justify-between text-[9px] sm:text-[12px] md:text-[14px] font-semibold">
                                        <p >اسم الخبر/الفعالية</p>

                                    </div>
                                    <div className="flex  items-center rounded-2xl  border-white w-fit px-2 py-1 gap-1 mt-1 self-end text-[9px] sm:text-xs">
                                        <p>
                                            12 نوفمبر
                                        </p>
                                        <p>2025</p>
                                        <CiCalendarDate className="text-white text-sm" />
                                    </div>
                                    <button className='w-full flex justify-center gap-1 items-center  rounded-2xl py-3 mx-auto bg-white text-[#E37C35]  hover:bg-[#E37C35] hover:text-white transition duration-200 mt-2'>
                                        <p className='text-[8px] sm:text-[12px] md:text-[14px] font-semibold '>اقرأ المزيد</p>

                                    </button>
                                </div>


                            </div>


                        </div>

                        {/* عنصر 5 */}
                        <div className='flex flex-col gap-1'>
                            <div className="relative w-full h-48 md:h-78 rounded-xl overflow-hidden ">
                                <Image src="/Events5.svg" alt="مشروع" fill className="object-cover" />
                                <div className="absolute rounded-2xl  inset-0 bg-black/40  h-full  z-10 flex flex-col justify-end p-3 text-white">
                                    <div className="flex flex-row-reverse justify-between text-[9px] sm:text-[12px] md:text-[14px] font-semibold">
                                        <p >اسم الخبر/الفعالية</p>

                                    </div>
                                    <div className="flex  items-center rounded-2xl  border-white w-fit px-2 py-1 gap-1 mt-1 self-end text-[9px] sm:text-xs">
                                        <p>
                                            12 نوفمبر
                                        </p>
                                        <p>2025</p>
                                        <CiCalendarDate className="text-white text-sm" />
                                    </div>
                                    <button className='w-full flex justify-center gap-1 items-center  rounded-2xl py-3 mx-auto bg-white text-[#E37C35]  hover:bg-[#E37C35] hover:text-white transition duration-200 mt-2'>
                                        <p className='text-[8px] sm:text-[12px] md:text-[14px] font-semibold '>اقرأ المزيد</p>

                                    </button>
                                </div>


                            </div>


                        </div>

                        {/* عنصر 6 */}
                        <div className='flex flex-col gap-1'>
                            <div className="relative w-full h-48 md:h-78 rounded-xl overflow-hidden ">
                                <Image src="/Events1.svg" alt="مشروع" fill className="object-cover" />
                                <div className="absolute rounded-2xl  inset-0 bg-black/40  h-full  z-10 flex flex-col justify-end p-3 text-white">
                                    <div className="flex flex-row-reverse justify-between text-[9px] sm:text-[12px] md:text-[14px] font-semibold">
                                        <p >اسم الخبر/الفعالية</p>

                                    </div>
                                    <div className="flex  items-center rounded-2xl  border-white w-fit px-2 py-1 gap-1 mt-1 self-end text-[9px] sm:text-xs">
                                        <p>
                                            12 نوفمبر
                                        </p>
                                        <p>2025</p>
                                        <CiCalendarDate className="text-white text-sm" />
                                    </div>
                                    <button className='w-full flex justify-center gap-1 items-center  rounded-2xl py-3 mx-auto bg-white text-[#E37C35]  hover:bg-[#E37C35] hover:text-white transition duration-200 mt-2'>
                                        <p className='text-[8px] sm:text-[12px] md:text-[14px] font-semibold'>اقرأ المزيد</p>

                                    </button>
                                </div>


                            </div>


                        </div>

                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 px-2 md:px-16 ">
                        {/* عنصر 1 */}
                        <div className='flex flex-col gap-1'>
                            <div className="relative w-full h-48 md:h-78 rounded-xl overflow-hidden ">
                                <Image src="/Events6.svg" alt="مشروع" fill className="object-cover" />
                                <div className="absolute rounded-2xl  inset-0 bg-black/40  h-full  z-10 flex flex-col justify-end p-3 text-white">
                                    <div className="flex flex-row-reverse justify-between text-[9px] sm:text-[12px] md:text-[14px] font-semibold">
                                        <p >اسم الخبر/الفعالية</p>

                                    </div>
                                    <div className="flex  items-center rounded-2xl  border-white w-fit px-2 py-1 gap-1 mt-1 self-end text-[9px] sm:text-xs">
                                        <p>
                                            12 نوفمبر
                                        </p>
                                        <p>2025</p>
                                        <CiCalendarDate className="text-white text-sm" />
                                    </div>
                                    <button className='w-full flex justify-center gap-1 items-center  rounded-2xl py-3 mx-auto bg-white text-[#E37C35]  hover:bg-[#E37C35] hover:text-white transition duration-200 mt-2'>
                                        <p className='text-[8px] sm:text-[12px] md:text-[14px] font-semibold '>اقرأ المزيد</p>

                                    </button>
                                </div>


                            </div>


                        </div>


                        {/* عنصر 2 */}
                        <div className='flex flex-col gap-1'>
                            <div className="relative w-full h-48 md:h-78 rounded-xl overflow-hidden ">
                                <Image src="/Events1.svg" alt="مشروع" fill className="object-cover" />
                                <div className="absolute rounded-2xl  inset-0 bg-black/40  h-full  z-10 flex flex-col justify-end p-3 text-white">
                                    <div className="flex flex-row-reverse justify-between text-[9px] sm:text-[12px] md:text-[14px] font-semibold">
                                        <p >اسم الخبر/الفعالية</p>

                                    </div>
                                    <div className="flex  items-center rounded-2xl  border-white w-fit px-2 py-1 gap-1 mt-1 self-end text-[9px] sm:text-xs">
                                        <p>
                                            12 نوفمبر
                                        </p>
                                        <p>2025</p>
                                        <CiCalendarDate className="text-white text-sm" />
                                    </div>
                                    <button className='w-full flex justify-center gap-1 items-center  rounded-2xl py-3 mx-auto bg-white text-[#E37C35]  hover:bg-[#E37C35] hover:text-white transition duration-200 mt-2'>
                                        <p className='text-[8px] sm:text-[12px] md:text-[14px] font-semibold '>اقرأ المزيد</p>

                                    </button>
                                </div>


                            </div>


                        </div>

                        {/* عنصر 3 */}
                        <div className='flex flex-col gap-1'>
                            <div className="relative w-full h-48 md:h-78 rounded-xl overflow-hidden ">
                                <Image src="/Events2.svg" alt="مشروع" fill className="object-cover" />
                                <div className="absolute rounded-2xl  inset-0 bg-black/40  h-full  z-10 flex flex-col justify-end p-3 text-white">
                                    <div className="flex flex-row-reverse justify-between text-[9px] sm:text-[12px] md:text-[14px] font-semibold">
                                        <p >اسم الخبر/الفعالية</p>

                                    </div>
                                    <div className="flex  items-center rounded-2xl  border-white w-fit px-2 py-1 gap-1 mt-1 self-end text-[9px] sm:text-xs">
                                        <p>
                                            12 نوفمبر
                                        </p>
                                        <p>2025</p>
                                        <CiCalendarDate className="text-white text-sm" />
                                    </div>
                                    <button className='w-full flex justify-center gap-1 items-center  rounded-2xl py-3 mx-auto bg-white text-[#E37C35]  hover:bg-[#E37C35] hover:text-white transition duration-200 mt-2'>
                                        <p className='text-[8px] sm:text-[12px] md:text-[14px] font-semibold '>اقرأ المزيد</p>

                                    </button>
                                </div>


                            </div>


                        </div>
                        {/* عنصر 4 */}
                        <div className='flex flex-col gap-1'>
                            <div className="relative w-full h-48 md:h-78 rounded-xl overflow-hidden ">
                                <Image src="/Events3.svg" alt="مشروع" fill className="object-cover" />
                                <div className="absolute rounded-2xl  inset-0 bg-black/40  h-full  z-10 flex flex-col justify-end p-3 text-white">
                                    <div className="flex flex-row-reverse justify-between text-[9px] sm:text-[12px] md:text-[14px] font-semibold">
                                        <p >اسم الخبر/الفعالية</p>

                                    </div>
                                    <div className="flex  items-center rounded-2xl  border-white w-fit px-2 py-1 gap-1 mt-1 self-end text-[9px] sm:text-xs">
                                        <p>
                                            12 نوفمبر
                                        </p>
                                        <p>2025</p>
                                        <CiCalendarDate className="text-white text-sm" />
                                    </div>
                                    <button className='w-full flex justify-center gap-1 items-center  rounded-2xl py-3 mx-auto bg-white text-[#E37C35]  hover:bg-[#E37C35] hover:text-white transition duration-200 mt-2'>
                                        <p className='text-[8px] sm:text-[12px] md:text-[14px] font-semibold '>اقرأ المزيد</p>

                                    </button>
                                </div>


                            </div>


                        </div>

                        {/* عنصر 5 */}
                        <div className='flex flex-col gap-1'>
                            <div className="relative w-full h-48 md:h-78 rounded-xl overflow-hidden ">
                                <Image src="/Events4.svg" alt="مشروع" fill className="object-cover" />
                                <div className="absolute rounded-2xl  inset-0 bg-black/40  h-full  z-10 flex flex-col justify-end p-3 text-white">
                                    <div className="flex flex-row-reverse justify-between text-[9px] sm:text-[12px] md:text-[14px] font-semibold">
                                        <p >اسم الخبر/الفعالية</p>

                                    </div>
                                    <div className="flex  items-center rounded-2xl  border-white w-fit px-2 py-1 gap-1 mt-1 self-end text-[9px] sm:text-xs">
                                        <p>
                                            12 نوفمبر
                                        </p>
                                        <p>2025</p>
                                        <CiCalendarDate className="text-white text-sm" />
                                    </div>
                                    <button className='w-full flex justify-center gap-1 items-center  rounded-2xl py-3 mx-auto bg-white text-[#E37C35]  hover:bg-[#E37C35] hover:text-white transition duration-200 mt-2'>
                                        <p className='text-[8px] sm:text-[12px] md:text-[14px] font-semibold '>اقرأ المزيد</p>

                                    </button>
                                </div>


                            </div>


                        </div>
                        {/* عنصر 6 */}
                        <div className='flex flex-col gap-1'>
                            <div className="relative w-full h-48 md:h-78 rounded-xl overflow-hidden ">
                                <Image src="/Events5.svg" alt="مشروع" fill className="object-cover" />
                                <div className="absolute rounded-2xl  inset-0 bg-black/40  h-full  z-10 flex flex-col justify-end p-3 text-white">
                                    <div className="flex flex-row-reverse justify-between text-[9px] sm:text-[12px] md:text-[14px] font-semibold">
                                        <p >اسم الخبر/الفعالية</p>

                                    </div>
                                    <div className="flex  items-center rounded-2xl  border-white w-fit px-2 py-1 gap-1 mt-1 self-end text-[9px] sm:text-xs">
                                        <p>
                                            12 نوفمبر
                                        </p>
                                        <p>2025</p>
                                        <CiCalendarDate className="text-white text-sm" />
                                    </div>
                                    <button className='w-full flex justify-center gap-1 items-center  rounded-2xl py-3 mx-auto bg-white text-[#E37C35]  hover:bg-[#E37C35] hover:text-white transition duration-200 mt-2'>
                                        <p className='text-[8px] sm:text-[12px] md:text-[14px] font-semibold '>اقرأ المزيد</p>

                                    </button>
                                </div>


                            </div>


                        </div>

                    </div>
                </SwiperSlide>
                <div className='flex items-center gap-2 justify-center md:justify-end px-15 mt-4'>
                    <button onClick={() => swiperRef.current?.slidePrev()} className='rounded-full bg-[#E37C35] p-1 text-[16px] sm:text-[20px] text-white transition-all hover:bg-white hover:text-[#E37c35] duration-300'><FiArrowLeft /></button>
                    <button onClick={() => swiperRef.current?.slideNext()} className='rounded-full bg-[#E37C35] p-1 text-[16px] sm:text-[20px] text-white transition-all hover:bg-white hover:text-[#E37c35] duration-300'><FiArrowRight /></button>
                </div>
            </Swiper>


        </section>
    )

}

export default NewsEvents
