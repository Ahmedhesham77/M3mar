'use client'

import React, { useState } from 'react'

import Image from "next/image";
import Navbar from '@/components/NavBar'
import Fotter from '@/components/Footer'
import { useSearchParams } from 'next/navigation'
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";
import { FaLongArrowAltRight } from "react-icons/fa";
import { Swiper, SwiperSlide } from 'swiper/react';
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'
import { CiUser, CiPhone, CiMail } from "react-icons/ci";
import CustomerOpinions from '@/components/CustomerOpinions';
import DiscoverProjects from '@/components/DiscoverProjects';



import 'swiper/css';
import 'swiper/css/pagination';
import '../../globals.css';


export default function AboutProject() {
    const searchParams = useSearchParams();
    // const title = searchParams.get("title");
    // const date = searchParams.get("date");
    const location = searchParams.get("location");
    // const id = searchParams.get("id");
    const [activeFilter, setActiveFilter] = useState<string | null>(null);


    return (
        <>
            <Navbar />
            <main className='w-full'>
                <div className='w-full flex flex-col justify-center min-h-[90vh] md:min-h-[85vh] overflow-hidden ' style={{ backgroundImage: 'url(/projectDescriptionHero.png)', backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundPosition: 'center' }}>
                </div>
                <div className='flex flex-row-reverse w-full justify-start items-start gap-2  px-4 md:px-8 mt-2 mb-4'>
                    <p className='text-[12px] sm:text-[14px] md:text-[16px] text-[#333333] font-semibold'> مشاريعنا</p>
                    <MdOutlineKeyboardArrowLeft className='text-[18px] text-[#333333] self-center ' />
                    <p className='text-[12px] sm:text-[14px] md:text-[16px] text-[#333333] font-semibold'> الوكلاء</p>
                </div>
                <section className='w-full flex flex-col items-center justify-center  gap-4 px-4 md:px-8'>
                    <div className='flex flex-col justify-end items-end gap-3 w-full mb-4'>
                        <p className='text-[18px] sm:text-[22px] md:text-[24px] text-[#333333] font-bold'>
                            {location}
                        </p>
                        <p className='text-[12px] sm:text-[14px] md:text-[16px] text-[#333333] font-light'>
                            تبدأ عملية إنشاء مشروع سكني بتخطيط دقيق يتضمن دراسة شاملة للموقع والتصميم المعماري. بعد ذلك، يتم تجهيز الأرض للبناء من خلال إزالة العوائق وتحديد الأساسات بشكل دقيق. تلي هذه المرحلة عملية البناء الفعلية، التي تشمل إنشاء الهيكل الخارجي وتوزيع المساحات الداخلية بشكل متوازن. بعد الانتهاء من الهيكل، تأتي مرحلة التشطيبات النهائية، حيث يتم تركيب النوافذ والأبواب والديكورات بعناية. أخيراً، يتم تسليم المشروع بعد التأكد من مطابقته للمواصفات والمعايير المطلوبة، مما يضمن جودة العمل ورضا العملاء.
                        </p>

                    </div>
                    <Swiper
                        slidesPerView={4}
                        spaceBetween={5}
                        pagination={{ clickable: true }}
                        breakpoints={{
                            320: { slidesPerView: 3, spaceBetween: 10 },
                            440: { slidesPerView: 4, spaceBetween: 10 },
                            640: { slidesPerView: 5, spaceBetween: 10 },
                            768: { slidesPerView: 5, spaceBetween: 20 },
                            1024: { slidesPerView: 5, spaceBetween: 20 },
                        }}


                        className="mySwiper px-18"
                    >
                        <SwiperSlide>
                            <div className="relative w-full h-40 sm:h-48 md:h-48 lg:h-74 rounded-lg overflow-hidden">
                                <div className="absolute rounded-4xl text-[8px] p-1 right-1.5 md:text-[14px] bg-white  top-2 sm:right-2 z-10"> +22 مشروع</div>
                                <Image src="/elfayoum.png" alt="الفيوم" fill className="object-cover" />
                            </div>
                            <div className="absolute z-10 bottom-0 text-white flex flex-row-reverse justify-between w-full p-1 ">
                                <div className="flex flex-col gap-1">
                                    <p className="text-[6px] md:text-[12px]">سوهاج الجديدة</p>
                                    <p className="text-[4px] md:text-[10px]">12 نوفمبر 2024</p>
                                </div>
                                <button className="w-4 sm:w-6 sm:h-6 md:w-8 h-4 md:h-8 flex items-center justify-center rounded-full bg-[#E37C35] text-white hover:bg-white hover:text-[#E37C35]">
                                    <FaLongArrowAltRight className="text-[8px] sm:text-[10px]" />
                                </button>
                            </div>
                        </SwiperSlide>

                        <SwiperSlide>
                            <div className="relative w-full h-40 sm:h-48 md:h-48 lg:h-74 rounded-lg overflow-hidden">
                                <div className="absolute rounded-4xl text-[8px] p-1 right-1.5 md:text-[14px] bg-white  top-2 sm:right-2 z-10"> +22 مشروع</div>
                                <Image src="/newCairo.png" alt="القاهرة الجديدة" fill className="object-cover" />
                            </div>
                            <div className="absolute z-10 bottom-0 text-white flex flex-row-reverse justify-between w-full p-1 ">
                                <div className="flex flex-col gap-1">
                                    <p className="text-[6px] md:text-[12px]">سوهاج الجديدة</p>
                                    <p className="text-[4px] md:text-[10px]">12 نوفمبر 2024</p>
                                </div>
                                <button className="w-4 sm:w-6 sm:h-6 md:w-8 h-4 md:h-8 flex items-center justify-center rounded-full bg-[#E37C35] text-white hover:bg-white hover:text-[#E37C35]">
                                    <FaLongArrowAltRight className="text-[8px] sm:text-[10px]" />
                                </button>
                            </div>
                        </SwiperSlide>

                        <SwiperSlide>
                            <div className="relative w-full h-40 sm:h-48 md:h-48 lg:h-74 rounded-lg overflow-hidden">
                                <div className="absolute rounded-4xl text-[8px] p-1 right-1.5 md:text-[14px] bg-white  top-2 sm:right-2 z-10"> +22 مشروع</div>
                                <Image src="/elsadat.png" alt="السادات" fill className="object-cover" />
                            </div>
                            <div className="absolute z-10 bottom-0 text-white flex flex-row-reverse justify-between w-full p-1 ">
                                <div className="flex flex-col gap-1">
                                    <p className="text-[6px] md:text-[12px]">سوهاج الجديدة</p>
                                    <p className="text-[4px] md:text-[10px]">12 نوفمبر 2024</p>
                                </div>
                                <button className="w-4 sm:w-6 sm:h-6 md:w-8 h-4 md:h-8 flex items-center justify-center rounded-full bg-[#E37C35] text-white hover:bg-white hover:text-[#E37C35]">
                                    <FaLongArrowAltRight className="text-[8px] sm:text-[10px]" />
                                </button>
                            </div>
                        </SwiperSlide>

                        <SwiperSlide>
                            <div className="relative w-full h-40 sm:h-48 md:h-48 lg:h-74 rounded-lg overflow-hidden">
                                <div className="absolute rounded-4xl text-[8px] p-1 right-1.5 md:text-[14px] bg-white  top-1 sm:right-1  z-10"> +22 مشروع</div>
                                <Image src="/elfayoum2.png" alt="الفيوم الجديدة" fill className="object-cover" />
                            </div>
                            <div className="absolute z-10 bottom-0 text-white flex flex-row-reverse justify-between w-full p-1 ">
                                <div className="flex flex-col gap-1">
                                    <p className="text-[6px] md:text-[12px]">سوهاج الجديدة</p>
                                    <p className="text-[4px] md:text-[10px]">12 نوفمبر 2024</p>
                                </div>
                                <button className="w-4 sm:w-6 sm:h-6 md:w-8 h-4 md:h-8 flex items-center justify-center rounded-full bg-[#E37C35] text-white hover:bg-white hover:text-[#E37C35]">
                                    <FaLongArrowAltRight className="text-[8px] sm:text-[10px]" />
                                </button>
                            </div>
                        </SwiperSlide>

                        <SwiperSlide>
                            <div className="relative w-full h-40 sm:h-48 md:h-48 lg:h-74 rounded-lg overflow-hidden">
                                <div className="absolute rounded-4xl text-[8px] p-1 right-1.5 md:text-[14px] bg-white  top-2 sm:right-2 z-10"> +22 مشروع</div>
                                <Image src="/newSohag.png" alt="سوهاج الجديدة" fill className="object-cover" />
                            </div>
                            <div className="absolute z-10 bottom-0 text-white flex flex-row-reverse justify-between w-full p-1 ">
                                <div className="flex flex-col gap-1">
                                    <p className="text-[6px] md:text-[12px]">سوهاج الجديدة</p>
                                    <p className="text-[4px] md:text-[10px]">12 نوفمبر 2024</p>
                                </div>
                                <button className="w-4 sm:w-6 sm:h-6 md:w-8 h-4 md:h-8 flex items-center justify-center rounded-full bg-[#E37C35] text-white hover:bg-white hover:text-[#E37C35]">
                                    <FaLongArrowAltRight className="text-[8px] sm:text-[10px]" />
                                </button>
                            </div>
                        </SwiperSlide>

                        <SwiperSlide>
                            <div className="relative img-cont w-full h-40 sm:h-48 md:h-48 lg:h-74 rounded-lg overflow-hidden">
                                <div className="absolute rounded-4xl text-[8px] p-1 right-1.5 md:text-[14px] bg-white  top-2 sm:right-2 z-10"> +22 مشروع</div>
                                <Image src="/elsadat.png" alt="السادات" fill className="object-cover" />
                            </div>
                            <div className="absolute z-10 bottom-0 text-white flex flex-row-reverse justify-between w-full p-1 ">
                                <div className="flex flex-col gap-1">
                                    <p className="text-[6px] md:text-[12px]">سوهاج الجديدة</p>
                                    <p className="text-[4px] md:text-[10px]">12 نوفمبر 2024</p>
                                </div>
                                <button className="w-4 sm:w-6 sm:h-6 md:w-8 h-4 md:h-8 flex items-center justify-center rounded-full bg-[#E37C35] text-white hover:bg-white hover:text-[#E37C35]">
                                    <FaLongArrowAltRight className="text-[8px] sm:text-[10px]" />
                                </button>
                            </div>
                        </SwiperSlide>

                        <SwiperSlide>
                            <div className="relative w-full h-40 sm:h-48 md:h-48 lg:h-74 rounded-lg overflow-hidden">
                                <div className="absolute rounded-4xl text-[8px] p-1 right-1.5 md:text-[14px] bg-white  top-1 sm:right-1 z-10"> +22 مشروع</div>
                                <Image src="/newCairo.png" alt="القاهرة الجديدة" fill className="object-cover" />
                            </div>
                            <div className="absolute z-10 bottom-0 text-white flex flex-row-reverse justify-between w-full p-1 ">
                                <div className="flex flex-col gap-1">
                                    <p className="text-[6px] md:text-[12px]">سوهاج الجديدة</p>
                                    <p className="text-[4px] md:text-[10px]">12 نوفمبر 2024</p>
                                </div>
                                <button className="w-4 sm:w-6 sm:h-6  h-4 md:h-8 md:w-8  flex items-center justify-center rounded-full bg-[#E37C35] text-white hover:bg-white hover:text-[#E37C35]">
                                    <FaLongArrowAltRight className="text-[8px] sm:text-[10px]" />
                                </button>
                            </div>
                        </SwiperSlide>
                    </Swiper>
                    <div className='flex flex-row justify-between  gap-2 w-full mt-4'>
                        <div className='flex flex-row justify-end items-end gap-2 w-full'>
                            {["مراحل المشروع", "وحدات المشروع", "وصف ومميزات و الخريطه المشروع"].map((type) => (
                                <div
                                    key={type}
                                    onClick={() => setActiveFilter(type)}
                                    className={`flex flex-row rounded-2xl py-2 px-3 transition-all duration-200 cursor-pointer border-2 ${activeFilter === type
                                        ? "bg-white text-[#E37C35] border-[#E37C35]"
                                        : "bg-[#F3F3F3] text-[#333333] border-transparent"
                                        }`}
                                >
                                    <p className='text-[12px] sm:text-[14px] md:text-[16px]'>{type}</p>

                                </div>
                            ))}

                        </div>


                    </div>
                    <div className='flex flex-col gap-4 justify-end items-end mb-4'>
                        <h1 className='text-[16px] sm:text-[18px] md:text-[20px] font-bold'>
                            تفاصيل المشروع وخريطه المشروع
                        </h1>

                        <p className='text-[10px] sm:text-[12px] md:text-[14px] font-semibold text-end text-[#333333]'>
                            موقعها المركزي ما بين الرحاب ومدينتي وتوسطها أرقى المجتمعات العمرانية وقربها من العاصمة الإدارية الجديدة جعل لها مكانه استراتيجية هامة, فهي تعتبر المدخل الجديد للقاهرة الجديدة.
                            مساحة منطقة بيت الوطن 4700 فدان يضم حوالي 12000 قطعة سكنية من المتوقع ان تضم 150 ألف وحدة سكنية ومن المتوقع ان يسكنه اكتر من نص مليون نسمة.
                            يتكون بيت الوطن من 8 احياء سكنية تنوعت الكثافة السكانية لكل حي – كل منطقه لها الخدمات الخاصة بيها.
                            منطقة بيت الوطن متصلة بشبكة طرق رئيسية:
                            – شارع التسعين الشمالي
                            – طريق السويس
                            – محور محمد بن زايد
                            – والدائري الاوسطي
                            طرق متسعة تم تصميمها وفقا لرؤى الدولة في التطوير لتفادى الزحام والتكدس المروري.
                            نظراً لأهمية الموقع الحيوي والإستراتيجي لمنطقة بيت الوطن، فقد جذبت أنظار أكبر الأندية فى مصر والتي بدأت تتجسد ملامحها على ارض الواقع:
                            – النادي الأهلي
                            – نادى الشرطة
                            نادي الجزيرة
                            بنيه تحتية متطورة (شبكه كهرباء جديده كلياً – خط قطار كهربي جديد ” مونوريل ” – شبكه معلومات حديثه – شبكات مرافق حديثه وصرف صحي – مسارات خاصه للدراجات – اماكن انتظار للسيارات).
                            بالقرب من الخدمات والمناطق التجارية والترفيهية والمطاعم والمدارس والجامعات.
                            ” كل هذه الخدمات جعلت من بيت الوطن – اختيارك الأول في القاهرة الجديدة “

                            اختار وحدتك الآن من قنديل للتطوير العقاري في أفضل مواقع بيت الوطن القاهرة الجديدة بـ اطلالة على حديقة – اطلاله على شوارع رئيسية – اطلالة على شوارع فاصلة – اطلالة بانوراما بـ مساحات تبدأ من 137 متر

                            ” قنديل للتطوير العقاري اختيارك الأول في القاهرة الجديدة “

                            خريطة بيت الوطن | خريطة القاهرة الجديدة | New Cairo Map | خريطة التجمع الخامس | قنديل للتطوير العقاري
                        </p>

                    </div>
                    <div className='flex flex-col sm:flex-row-reverse justify-center gap-2 w-full mb-4 relative'>

                        {/* الفيديو */}
                        <div className='w-full md:w-3/5 aspect-video relative'>
                            <iframe
                                className="w-full h-full absolute top-0 left-0"
                                src="https://www.youtube.com/embed/ZgxsmWBfkUw"
                                title="YouTube video player"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                            ></iframe>
                        </div>

                        {/* الخريطة */}
                        <div className='w-full md:w-2/5 relative aspect-video'>
                            <Image src="/map.png" fill alt='map' className='object-cover' />

                            <div className='absolute bottom-1 right-1 rounded-3xl bg-[#E37C35] flex flex-row-reverse justify-start items-start gap-2 p-2'>
                                <Image src="/maximize-2.svg" alt="location" width={20} height={20} className='self-center' />
                                <p className='text-[12px] sm:text-[14px] md:text-[16px] text-white font-semibold'>
                                    عرض خريطه المشروع
                                </p>
                            </div>
                        </div>


                    </div>
                    <div className='flex flex-col justify-end items-end gap-2 text-end w-full mb-4'>
                        <h2 className='text-[16px] sm:text-[18px] md:text-[20px] text-color[#333333] mb-1 font-bold'>مميزات المشروع</h2>
                        <p className='text-[14px] sm:text-[16px] text-[#333333] font-light'>
                            موقعها المركزي ما بين الرحاب ومدينتي وتوسطها أرقى المجتمعات العمرانية وقربها من العاصمة الإدارية الجديدة جعل لها مكانه استراتيجية هامة, فهي تعتبر المدخل الجديد للقاهرة الجديدة.
                            مساحة منطقة بيت الوطن 4700 فدان يضم حوالي 12000 قطعة سكنية من المتوقع ان تضم 150 ألف وحدة سكنية ومن المتوقع ان يسكنه اكتر من نص مليون نسمة.
                            يتكون بيت الوطن من 8 احياء سكنية تنوعت الكثافة السكانية لكل حي – كل منطقه لها الخدمات الخاصة بيها.
                            منطقة بيت الوطن متصلة بشبكة طرق رئيسية
                        </p>
                    </div>
                    <div className='flex flex-col justify-center items-center gap-2 text-end w-full mb-4 border-2 border-[#626262] rounded-2xl px-4 sm:px-16 md:px-18 py-4'>
                        <form className='w-full flex flex-col justify-start  gap-2 '>
                            <div className='flex flex-col justify-start  gap-2 mb-4'>
                                <h2 className='text-[18px] sm:text-[20px] md:text-[22px] font-bold text-[#333333]'>
                                    احجز مكانك الان
                                </h2>
                                <p className='text-[12px] sm:text-[14px] md:text-[16px] text-[#333333] font-semibold'>
                                    تقدر تتواصل معانا في أي وقت، إحنا هنا دايمًا!
                                </p>
                            </div>


                            <div className='flex flex-col sm:flex-row-reverse gap-2 justify-center w-full mb-4'>
                                <div className='flex justify-end  gap-2 border-2 border-[#C3C3C3] rounded-2xl w-full p-2  '>
                                    <input className='text-end ' type="text" placeholder='الاسم الكامل*' />
                                    <CiUser className='text-[#333333] text-[20px] sm:text-[22px] md:text-[24px] self-center' />
                                </div>
                                <div className='flex flex-row gap-2 border-2 border-[#C3C3C3] rounded-2xl w-full p-2 '>
                                    <PhoneInput
                                        inputStyle={{
                                            direction: 'rtl',
                                            width: '100%',
                                            border: 'none',
                                            outline: 'none',
                                            textAlign: 'right',
                                            fontSize: '14px',
                                            fontFamily: 'alexandria, sans-serif',
                                        }}
                                        dropdownStyle={{ direction: 'rtl' }}
                                        country={'eg'} // Egypt as default
                                        enableSearch
                                        placeholder="رقم الهاتف المحمول*"
                                        specialLabel=""

                                    />
                                    <CiPhone className='text-[#333333] text-[20px] sm:text-[22px] md:text-[24px] self-center' />
                                </div>


                            </div>

                            <div className='flex flex-row-reverse gap-2 justify-start  w-full  border-2 border-[#C3C3C3] rounded-2xl p-2'>
                                <CiMail className='text-[#333333] text-[20px] sm:text-[22px] md:text-[24px] self-center' />
                                <input type="email" placeholder='البريد الإلكتروني*' className='text-end ' />


                            </div>
                            <div className='flex flex-row-reverse gap-2 justify-start w-full border-2 border-[#C3C3C3] rounded-2xl p-2'>
                                <textarea placeholder='أكتب رسالتلك هنا..' className='w-full p-3 border border-gray-300 rounded-lg text-end resize-none focus:outline-none focus:ring-2 focus:ring-blue-500 ' />

                            </div>

                        </form>

                        <button className='rounded-2xl bg-[#E37C35] border text-white py-3 px-4 hover:bg-white  hover:border-[#E37c35] hover:text-[#E37C35] transition-all duration-300 self-end'>إرسال الرساله</button>

                    </div>
                </section>
                <CustomerOpinions />
                <DiscoverProjects />
            </main>
            <Fotter />
        </>
    )
}
