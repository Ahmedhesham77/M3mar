"use client";
import React, { useState } from 'react'
import Image from 'next/image'
import Navbar from "../../components/NavBar"
import Fotter from '../../components/Footer'
import NewProject from '../../components/NewProject';
import Agents from '@/components/Agents';


export default function OurProjects() {
    const projectUnits = [
        { id: 1, title: "مشروع الاندلس", date: "12 نوفمبر 2025", location: " القاهرة الجديدة" },
        { id: 2, title: "مشروع النرجس", date: "15 ديسمبر 2025", location: "الجيزة" },
        { id: 3, title: "مشروع المعادي", date: "1 يناير 2026", location: "المعادي" },
        { id: 4, title: "مشروع الاندلس", date: "12 نوفمبر 2025", location: "القاهرة" },
        { id: 5, title: "مشروع النرجس", date: "15 ديسمبر 2025", location: "الجيزة" },
        { id: 6, title: "مشروع المعادي", date: "1 يناير 2026", location: "المعادي" },
        { id: 7, title: "مشروع الاندلس", date: "12 نوفمبر 2025", location: "القاهرة" },
        { id: 8, title: "مشروع النرجس", date: "15 ديسمبر 2025", location: "الجيزة" },
        { id: 9, title: "مشروع المعادي", date: "1 يناير 2026", location: "المعادي" },
        { id: 10, title: "مشروع الاندلس", date: "12 نوفمبر 2025", location: "القاهرة" },
        { id: 11, title: "مشروع النرجس", date: "15 ديسمبر 2025", location: "الجيزة" },
        { id: 12, title: "مشروع المعادي", date: "1 يناير 2026", location: "المعادي" },
    ];

    const [activeFilter, setActiveFilter] = useState<string | null>(null);
    return (
        <main className='w-full'>
            <Navbar />
            {/* Header*/}
            <section
                className="w-full flex flex-col justify-center min-h-[90vh] md:min-h-[85vh] overflow-hidden "
                style={{ backgroundImage: "url('/OurProjectsHero.png')" }}
            >
                <div className="flex items-center justify-center w-full">
                    <div className="text-center w-full sm:max-w-screen md:max-w-screen-xl px-4 mx-auto">
                        <h1 className="text-xl md:text-4xl font-bold mb-4 drop-shadow-lg">مشاريعنا</h1>
                        <p className="text-lg md:text-xl drop-shadow-sm">
                            مشاريع تجاريه و سكنيه و طبيه<br />
                            اختيارك الاول دائما للتطوير و الاستثمار العقاري
                        </p>

                        <div className="flex flex-col justify-center items-center gap-4 mt-6 py-4 px-4 bg-white text-black font-medium rounded-2xl w-full">
                            <div className="flex flex-row-reverse gap-2 self-end">
                                <div className="relative w-6 h-6 sm:w-8 sm:h-8">
                                    <Image src="/filter.svg" alt="filter" fill />
                                </div>
                                <div className="flex flex-col gap-2 justify-start items-end">
                                    <p className="font-bold text-[12px] sm:text-[14px] md:text-[16px]">فلتر حسب</p>
                                    <p className="text-[10px] sm:text-[12px] md:text-[14px] text-[#333333]">
                                        يمكنك الفلتره حسب نوع المشروع او المدينه
                                    </p>
                                </div>
                            </div>

                            <div className="flex flex-row-reverse flex-wrap  gap-4 justify-around w-full ">
                                <div className="flex flex-col justify-end gap-2">
                                    <p className="text-[12px] sm:text-[14px] md:text-[16px] text-black font-light">اسم الوحدة</p>
                                    <input
                                        className="text-center p-1 w-[8rem] sm:w-[10rem] md:w-[12rem] rounded-2xl "
                                        type="text"
                                        placeholder="اكتب اسم الوحدة"
                                    />
                                </div>

                                <div className="flex flex-col justify-end gap-2">
                                    <label
                                        htmlFor="unit"
                                        className="text-[12px] sm:text-[14px] md:text-[16px] text-black font-light"
                                    >
                                        نوع المشروع
                                    </label>
                                    <select
                                        name="unit"
                                        id="unit"
                                        dir="rtl"
                                        className="text-center w-[6rem] sm:w-[10rem] md:w-[12rem] p-1 rounded-2xl"
                                    >
                                        <option value="all">الكل</option>
                                        <option value="residential">سكني</option>
                                        <option value="commercial">تجاري</option>
                                        <option value="medical">طبي</option>
                                    </select>
                                </div>

                                <div className="flex flex-col justify-end gap-2">
                                    <label
                                        htmlFor="city"
                                        className="text-[12px] sm:text-[14px] md:text-[16px] text-black font-light"
                                    >
                                        المدينه
                                    </label>
                                    <select
                                        name="city"
                                        id="city"
                                        dir="rtl"
                                        className="text-center w-[6rem] sm:w-[10rem] md:w-[12rem] p-1 rounded-2xl"
                                    >
                                        <option value="all">الكل</option>
                                        <option value="riyadh">الرياض</option>
                                        <option value="jeddah">جدة</option>
                                        <option value="dammam">الدمام</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <NewProject
                units={projectUnits}
                unitsPerSlide={9}
                soldUnitIds={[1, 5, 3, 7, 9]}
                directionOfHead="flex-col items-end"
                button={
                    <div className='flex flex-row-reverse gap-2 justify-end items-end mb-2'>
                        {["سكني", "تجاري", "طبي"].map((type) => (
                            <div
                                key={type}
                                onClick={() => setActiveFilter(type)}
                                className={`flex flex-row rounded-2xl py-1 px-3 transition-all duration-200 cursor-pointer border-2 ${activeFilter === type
                                    ? "bg-white text-[#E37C35] border-[#E37C35]"
                                    : "bg-[#F3F3F3] text-[#333333] border-transparent"
                                    }`}
                            >
                                <p className='text-[12px] sm:text-[14px] md:text-[16px]'>{type}</p>
                                <div className='relative w-6 h-6 sm:w-8 sm:h-8 '>
                                    <Image src="/buildings-2.svg" alt="filter" fill />
                                </div>
                            </div>
                        ))}
                    </div>
                }
            />
            <Agents />
            <Fotter />
        </main >
    )
}



