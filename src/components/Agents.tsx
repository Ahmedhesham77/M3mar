import React, { useRef } from 'react'
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import './style.css';

import { FiPhone } from "react-icons/fi";
import { PiHandbag } from "react-icons/pi";
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";
import SwiperCore from "swiper";
const Agents = () => {
    const swiperRef = useRef<SwiperCore | null>(null);
    return (
        <div className='flex flex-col items-center justify-center w-full h-full px-4 bg-white sm:px-16  py-8 '>
            <div className='flex flex-row-reverse justify-between items-center w-full mb-8'>
                <div className='flex-col gap-1'>
                    <h2 className='text-md sm:text-xl font-bold text-right'> قابل وكلائنا</h2>
                    <p className='text-xs sm:text-md text-right'> تعمل شرکة معمار للتطویر العقاري وإدارة المشروعات ﻋﻠﯽ تقدیم أفضل خدمات المقاولات التشیید والبناء</p>

                </div>
                <button className='rounded-3xl border-1 border-[#E37C35] text-[#E37C35]  text-[8px] w-1/3 sm:text-[12px]  md:w-1/6 py-2 px-3 hover:text-white hover:bg-[#E37C35] transition-all duration-300'> قابل وكلاء أكثر</button>
            </div>
            <Swiper
                slidesPerView={3}
                spaceBetween={10}
                pagination={{
                    clickable: true,
                }}
                breakpoints={{
                    0: {
                        slidesPerView: 2, // 👈 شريحتان في الشاشات الصغيرة
                    },
                    640: {
                        slidesPerView: 3, // 👈 3 شرائح من 640px وما فوق
                    },
                }}
                className="mySwiper"
                onBeforeInit={(swiper) => {
                    swiperRef.current = swiper;
                }}
            >
                <SwiperSlide>
                    <div className='flex flex-col lg:flex-row-reverse justify-between rounded-xl border-2 border-[#333333] py-2 px-2'>

                        <div className='relative flex flex-col justify-center items-center gap-1'>
                            <Image
                                alt="avatar"
                                src="/avatar.svg"
                                width={0}
                                height={0}

                                className="  w-15!  "
                            />
                            <p className='text-[#333333] text-[14px]'>اسم الوكيل</p>
                            <div className='bg-[#333333] rounded-2xl text-[12px] text-white py-1 px-2'>استشاري عقارات</div>
                        </div>
                        <div className='flex flex-col justify-between py-2 gap-2 lg:w-2/3'>

                            <div className='flex flex-row-reverse justify-between w-full gap-2 text-[#333333] text-[12px]'>
                                <p className='text-[9px] md:text-[12px] self-center'>المبيعات الناجحة</p>
                                <div className='flex flex-row-reverse gap-1'>
                                    <p className='text-[12px] md:text-[16px] font-medium'>100+</p>
                                    <p className='text-[12px] md:text-[16px] font-medium'> عقار </p>
                                </div>
                            </div>
                            <div className='flex flex-row-reverse justify-between text-[#333333] text-[12px]'>
                                <p className='text-[9px] md:text-[12px] self-center'>مناطق التغطية</p>
                                <div className='flex flex-row-reverse gap-1'>
                                    <p className='text-[12px] md:text-[16px] font-medium'>5</p>
                                    <p className='text-[12px] md:text-[16px] font-medium'> مناطق </p>
                                </div>

                            </div>
                            <div className='flex flex-col self-end gap-2 text-[#333333] text-[12px]'>
                                <p>طرق التواصل مع الوكيل </p>
                                <div className='flex flex-row-reverse justify-center gap-1'>
                                    <FiPhone className='text-[14px] self-center' />
                                    <p>03231321656552</p>
                                </div>
                                <div className='flex flex-row-reverse justify-center gap-1'>
                                    <PiHandbag className='text-[14px] self-center' />
                                    <p>03231321656552</p>
                                </div>
                            </div>
                        </div>


                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='flex flex-col lg:flex-row-reverse justify-between rounded-xl border-2 border-[#333333] py-2 px-2'>

                        <div className='relative flex flex-col justify-center items-center gap-1'>
                            <Image
                                alt="avatar"
                                src="/avatar.svg"
                                width={0}
                                height={0}

                                className="  w-15!  "
                            />
                            <p className='text-[#333333] text-[14px]'>اسم الوكيل</p>
                            <div className='bg-[#333333] rounded-2xl text-[12px] text-white py-1 px-2'>استشاري عقارات</div>
                        </div>
                        <div className='flex flex-col justify-between py-2 gap-2 lg:w-2/3'>

                            <div className='flex flex-row-reverse justify-between w-full gap-2 text-[#333333] text-[12px]'>
                                <p className='text-[9px] md:text-[12px] self-center'>المبيعات الناجحة</p>
                                <div className='flex flex-row-reverse gap-1'>
                                    <p className='text-[12px] md:text-[16px] font-medium'>100+</p>
                                    <p className='text-[12px] md:text-[16px] font-medium'> عقار </p>
                                </div>
                            </div>
                            <div className='flex flex-row-reverse justify-between text-[#333333] text-[12px]'>
                                <p className='text-[9px] md:text-[12px] self-center'>مناطق التغطية</p>
                                <div className='flex flex-row-reverse gap-1'>
                                    <p className='text-[12px] md:text-[16px] font-medium'>5</p>
                                    <p className='text-[12px] md:text-[16px] font-medium'> مناطق </p>
                                </div>

                            </div>
                            <div className='flex flex-col self-end gap-2 text-[#333333] text-[12px]'>
                                <p>طرق التواصل مع الوكيل </p>
                                <div className='flex flex-row-reverse justify-center gap-1'>
                                    <FiPhone className='text-[14px] self-center' />
                                    <p>03231321656552</p>
                                </div>
                                <div className='flex flex-row-reverse justify-center gap-1'>
                                    <PiHandbag className='text-[14px] self-center' />
                                    <p>03231321656552</p>
                                </div>
                            </div>
                        </div>


                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className='flex flex-col lg:flex-row-reverse justify-between rounded-xl border-2 border-[#333333] py-2 px-2'>

                        <div className='relative flex flex-col justify-center items-center gap-1'>
                            <Image
                                alt="avatar"
                                src="/avatar.svg"
                                width={0}
                                height={0}

                                className="  w-15!  "
                            />
                            <p className='text-[#333333] text-[14px]'>اسم الوكيل</p>
                            <div className='bg-[#333333] rounded-2xl text-[12px] text-white py-1 px-2'>استشاري عقارات</div>
                        </div>
                        <div className='flex flex-col justify-between py-2 gap-2 lg:w-2/3'>

                            <div className='flex flex-row-reverse justify-between w-full gap-2 text-[#333333] text-[12px]'>
                                <p className='text-[9px] md:text-[12px] self-center'>المبيعات الناجحة</p>
                                <div className='flex flex-row-reverse gap-1'>
                                    <p className='text-[12px] md:text-[16px] font-medium'>100+</p>
                                    <p className='text-[12px] md:text-[16px] font-medium'> عقار </p>
                                </div>
                            </div>
                            <div className='flex flex-row-reverse justify-between text-[#333333] text-[12px]'>
                                <p className='text-[9px] md:text-[12px] self-center'>مناطق التغطية</p>
                                <div className='flex flex-row-reverse gap-1'>
                                    <p className='text-[12px] md:text-[16px] font-medium'>5</p>
                                    <p className='text-[12px] md:text-[16px] font-medium'> مناطق </p>
                                </div>

                            </div>
                            <div className='flex flex-col self-end gap-2 text-[#333333] text-[12px]'>
                                <p>طرق التواصل مع الوكيل </p>
                                <div className='flex flex-row-reverse justify-center gap-1'>
                                    <FiPhone className='text-[14px] self-center' />
                                    <p>03231321656552</p>
                                </div>
                                <div className='flex flex-row-reverse justify-center gap-1'>
                                    <PiHandbag className='text-[14px] self-center' />
                                    <p>03231321656552</p>
                                </div>
                            </div>
                        </div>


                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='flex flex-col lg:flex-row-reverse justify-between rounded-xl border-2 border-[#333333] py-2 px-2'>

                        <div className='relative flex flex-col justify-center items-center gap-1'>
                            <Image
                                alt="avatar"
                                src="/avatar.svg"
                                width={0}
                                height={0}

                                className="  w-15!  "
                            />
                            <p className='text-[#333333] text-[14px]'>اسم الوكيل</p>
                            <div className='bg-[#333333] rounded-2xl text-[12px] text-white py-1 px-2'>استشاري عقارات</div>
                        </div>
                        <div className='flex flex-col justify-between py-2 gap-2 lg:w-2/3'>

                            <div className='flex flex-row-reverse justify-between w-full gap-2 text-[#333333] text-[12px]'>
                                <p className='text-[9px] md:text-[12px] self-center'>المبيعات الناجحة</p>
                                <div className='flex flex-row-reverse gap-1'>
                                    <p className='text-[12px] md:text-[16px] font-medium'>100+</p>
                                    <p className='text-[12px] md:text-[16px] font-medium'> عقار </p>
                                </div>
                            </div>
                            <div className='flex flex-row-reverse justify-between text-[#333333] text-[12px]'>
                                <p className='text-[9px] md:text-[12px] self-center'>مناطق التغطية</p>
                                <div className='flex flex-row-reverse gap-1'>
                                    <p className='text-[12px] md:text-[16px] font-medium'>5</p>
                                    <p className='text-[12px] md:text-[16px] font-medium'> مناطق </p>
                                </div>

                            </div>
                            <div className='flex flex-col self-end gap-2 text-[#333333] text-[12px]'>
                                <p>طرق التواصل مع الوكيل </p>
                                <div className='flex flex-row-reverse justify-center gap-1'>
                                    <FiPhone className='text-[14px] self-center' />
                                    <p>03231321656552</p>
                                </div>
                                <div className='flex flex-row-reverse justify-center gap-1'>
                                    <PiHandbag className='text-[14px] self-center' />
                                    <p>03231321656552</p>
                                </div>
                            </div>
                        </div>


                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='flex flex-col lg:flex-row-reverse justify-between rounded-xl border-2 border-[#333333] py-2 px-2'>

                        <div className='relative flex flex-col justify-center items-center gap-1'>
                            <Image
                                alt="avatar"
                                src="/avatar.svg"
                                width={0}
                                height={0}

                                className="  w-15!  "
                            />
                            <p className='text-[#333333] text-[14px]'>اسم الوكيل</p>
                            <div className='bg-[#333333] rounded-2xl text-[12px] text-white py-1 px-2'>استشاري عقارات</div>
                        </div>
                        <div className='flex flex-col justify-between py-2 gap-2 lg:w-2/3'>

                            <div className='flex flex-row-reverse justify-between w-full gap-2 text-[#333333] text-[12px]'>
                                <p className='text-[9px] md:text-[12px] self-center'>المبيعات الناجحة</p>
                                <div className='flex flex-row-reverse gap-1'>
                                    <p className='text-[12px] md:text-[16px] font-medium'>100+</p>
                                    <p className='text-[12px] md:text-[16px] font-medium'> عقار </p>
                                </div>
                            </div>
                            <div className='flex flex-row-reverse justify-between text-[#333333] text-[12px]'>
                                <p className='text-[9px] md:text-[12px] self-center'>مناطق التغطية</p>
                                <div className='flex flex-row-reverse gap-1'>
                                    <p className='text-[12px] md:text-[16px] font-medium'>5</p>
                                    <p className='text-[12px] md:text-[16px] font-medium'> مناطق </p>
                                </div>

                            </div>
                            <div className='flex flex-col self-end gap-2 text-[#333333] text-[12px]'>
                                <p>طرق التواصل مع الوكيل </p>
                                <div className='flex flex-row-reverse justify-center gap-1'>
                                    <FiPhone className='text-[14px] self-center' />
                                    <p>03231321656552</p>
                                </div>
                                <div className='flex flex-row-reverse justify-center gap-1'>
                                    <PiHandbag className='text-[14px] self-center' />
                                    <p>03231321656552</p>
                                </div>
                            </div>
                        </div>


                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='flex flex-col lg:flex-row-reverse justify-between rounded-xl border-2 border-[#333333] py-2 px-2'>

                        <div className='relative flex flex-col justify-center items-center gap-1'>
                            <Image
                                alt="avatar"
                                src="/avatar.svg"
                                width={0}
                                height={0}

                                className="  w-15!  "
                            />
                            <p className='text-[#333333] text-[14px]'>اسم الوكيل</p>
                            <div className='bg-[#333333] rounded-2xl text-[12px] text-white py-1 px-2'>استشاري عقارات</div>
                        </div>
                        <div className='flex flex-col justify-between py-2 gap-2 lg:w-2/3'>

                            <div className='flex flex-row-reverse justify-between w-full gap-2 text-[#333333] text-[12px]'>
                                <p className='text-[9px] md:text-[12px] self-center'>المبيعات الناجحة</p>
                                <div className='flex flex-row-reverse gap-1'>
                                    <p className='text-[12px] md:text-[16px] font-medium'>100+</p>
                                    <p className='text-[12px] md:text-[16px] font-medium'> عقار </p>
                                </div>
                            </div>
                            <div className='flex flex-row-reverse justify-between text-[#333333] text-[12px]'>
                                <p className='text-[9px] md:text-[12px] self-center'>مناطق التغطية</p>
                                <div className='flex flex-row-reverse gap-1'>
                                    <p className='text-[12px] md:text-[16px] font-medium'>5</p>
                                    <p className='text-[12px] md:text-[16px] font-medium'> مناطق </p>
                                </div>

                            </div>
                            <div className='flex flex-col self-end gap-2 text-[#333333] text-[12px]'>
                                <p>طرق التواصل مع الوكيل </p>
                                <div className='flex flex-row-reverse justify-center gap-1'>
                                    <FiPhone className='text-[14px] self-center' />
                                    <p>03231321656552</p>
                                </div>
                                <div className='flex flex-row-reverse justify-center gap-1'>
                                    <PiHandbag className='text-[14px] self-center' />
                                    <p>03231321656552</p>
                                </div>
                            </div>
                        </div>


                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='flex flex-col lg:flex-row-reverse justify-between rounded-xl border-2 border-[#333333] py-2 px-2'>

                        <div className='relative flex flex-col justify-center items-center gap-1'>
                            <Image
                                alt="avatar"
                                src="/avatar.svg"
                                width={0}
                                height={0}

                                className="  w-15!  "
                            />
                            <p className='text-[#333333] text-[14px]'>اسم الوكيل</p>
                            <div className='bg-[#333333] rounded-2xl text-[12px] text-white py-1 px-2'>استشاري عقارات</div>
                        </div>
                        <div className='flex flex-col justify-between py-2 gap-2 lg:w-2/3'>

                            <div className='flex flex-row-reverse justify-between w-full gap-2 text-[#333333] text-[12px]'>
                                <p className='text-[9px] md:text-[12px] self-center'>المبيعات الناجحة</p>
                                <div className='flex flex-row-reverse gap-1'>
                                    <p className='text-[12px] md:text-[16px] font-medium'>100+</p>
                                    <p className='text-[12px] md:text-[16px] font-medium'> عقار </p>
                                </div>
                            </div>
                            <div className='flex flex-row-reverse justify-between text-[#333333] text-[12px]'>
                                <p className='text-[9px] md:text-[12px] self-center'>مناطق التغطية</p>
                                <div className='flex flex-row-reverse gap-1'>
                                    <p className='text-[12px] md:text-[16px] font-medium'>5</p>
                                    <p className='text-[12px] md:text-[16px] font-medium'> مناطق </p>
                                </div>

                            </div>
                            <div className='flex flex-col self-end gap-2 text-[#333333] text-[12px]'>
                                <p>طرق التواصل مع الوكيل </p>
                                <div className='flex flex-row-reverse justify-center gap-1'>
                                    <FiPhone className='text-[14px] self-center' />
                                    <p>03231321656552</p>
                                </div>
                                <div className='flex flex-row-reverse justify-center gap-1'>
                                    <PiHandbag className='text-[14px] self-center' />
                                    <p>03231321656552</p>
                                </div>
                            </div>
                        </div>


                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='flex flex-col lg:flex-row-reverse justify-between rounded-xl border-2 border-[#333333] py-2 px-2'>

                        <div className='relative flex flex-col justify-center items-center gap-1'>
                            <Image
                                alt="avatar"
                                src="/avatar.svg"
                                width={0}
                                height={0}

                                className="  w-15!  "
                            />
                            <p className='text-[#333333] text-[14px]'>اسم الوكيل</p>
                            <div className='bg-[#333333] rounded-2xl text-[12px] text-white py-1 px-2'>استشاري عقارات</div>
                        </div>
                        <div className='flex flex-col justify-between py-2 gap-2 lg:w-2/3'>

                            <div className='flex flex-row-reverse justify-between w-full gap-2 text-[#333333] text-[12px]'>
                                <p className='text-[9px] md:text-[12px] self-center'>المبيعات الناجحة</p>
                                <div className='flex flex-row-reverse gap-1'>
                                    <p className='text-[12px] md:text-[16px] font-medium'>100+</p>
                                    <p className='text-[12px] md:text-[16px] font-medium'> عقار </p>
                                </div>
                            </div>
                            <div className='flex flex-row-reverse justify-between text-[#333333] text-[12px]'>
                                <p className='text-[9px] md:text-[12px] self-center'>مناطق التغطية</p>
                                <div className='flex flex-row-reverse gap-1'>
                                    <p className='text-[12px] md:text-[16px] font-medium'>5</p>
                                    <p className='text-[12px] md:text-[16px] font-medium'> مناطق </p>
                                </div>

                            </div>
                            <div className='flex flex-col self-end gap-2 text-[#333333] text-[12px]'>
                                <p>طرق التواصل مع الوكيل </p>
                                <div className='flex flex-row-reverse justify-center gap-1'>
                                    <FiPhone className='text-[14px] self-center' />
                                    <p>03231321656552</p>
                                </div>
                                <div className='flex flex-row-reverse justify-center gap-1'>
                                    <PiHandbag className='text-[14px] self-center' />
                                    <p>03231321656552</p>
                                </div>
                            </div>
                        </div>


                    </div>
                </SwiperSlide>

            </Swiper>

            <div className="flex flex-row-reverse gap-3 mt-4 self-center md:self-end ">
                <button onClick={() => swiperRef.current?.slideNext()} className='rounded-full bg-[#E37C35] p-1 text-[16px] sm:text-[20px] text-white transition-all hover:bg-white hover:text-[#E37c35] duration-300'><FiArrowRight /></button>
                <button onClick={() => swiperRef.current?.slidePrev()} className='rounded-full bg-[#E37C35] p-1 text-[16px] sm:text-[20px] text-white transition-all hover:bg-white hover:text-[#E37c35] duration-300'><FiArrowLeft /></button>
            </div>
        </div>
    )
}

export default Agents
