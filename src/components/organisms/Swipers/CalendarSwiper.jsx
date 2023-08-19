import { Link } from 'react-router-dom';
import { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper';
import React from "react";
// Import Swiper styles
import 'swiper/css';
import "swiper/css/effect-cards";
import "swiper/css/navigation";

import './calendar-swiper.scss';


import CalendarCard from '../../molecules/Calendar/CalendarCard';
import swiperArrow from '../../../images/swiper-arrow.svg';

const CalendarSwiper = () => {

    return (
        <>
            <div className="calendar-swiper">
                <Swiper className='calendar-swiper__slider'
                    modules={[Navigation]}
                    navigation={{
                        nextEl: '.calendar-swiper-swiper-button-next',
                        prevEl: '.calendar-swiper-swiper-button-prev',
                    }}
                    // initialSlide={ 0.9 }
                    spaceBetween={30}
                    onSwiper={(swiper) => console.log(swiper)}
                    onSlideChange={() => console.log('slide change')}
                    breakpoints={{
                        250: {
                            slidesPerView: 3.5,
                        },
                        650: {
                            slidesPerView: 3.5,
                        },
                        1200: {
                            slidesPerView: 4.7,
                        },
                    }}
                >
                    <SwiperSlide className='calendar-swiper__slide'>
                        <CalendarCard title="Май"></CalendarCard>
                    </SwiperSlide>
                    <SwiperSlide className='calendar-swiper__slide'>
                        <CalendarCard title="Июнь"></CalendarCard>
                    </SwiperSlide>
                    <SwiperSlide className='calendar-swiper__slide'>
                        <CalendarCard title="Июль"></CalendarCard>
                    </SwiperSlide>
                    <SwiperSlide className='calendar-swiper__slide'>
                        <CalendarCard title="Август"></CalendarCard>
                    </SwiperSlide>
                    <SwiperSlide className='calendar-swiper__slide'>
                        <CalendarCard title="Сентябрь"></CalendarCard>
                    </SwiperSlide>

                    <SwiperSlide className='calendar-swiper__slide'>
                        <CalendarCard title="Май"></CalendarCard>
                    </SwiperSlide>
                    <SwiperSlide className='calendar-swiper__slide'>
                        <CalendarCard title="Июнь"></CalendarCard>
                    </SwiperSlide>
                    <SwiperSlide className='calendar-swiper__slide'>
                        <CalendarCard title="Июль"></CalendarCard>
                    </SwiperSlide>
                    <SwiperSlide className='calendar-swiper__slide'>
                        <CalendarCard title="Август"></CalendarCard>
                    </SwiperSlide>
                    <SwiperSlide className='calendar-swiper__slide'>
                        <CalendarCard title="Сентябрь"></CalendarCard>
                    </SwiperSlide>

                    <SwiperSlide className='calendar-swiper__slide'>
                        <CalendarCard title="Май"></CalendarCard>
                    </SwiperSlide>
                    <SwiperSlide className='calendar-swiper__slide'>
                        <CalendarCard title="Июнь"></CalendarCard>
                    </SwiperSlide>
                    <SwiperSlide className='calendar-swiper__slide'>
                        <CalendarCard title="Июль"></CalendarCard>
                    </SwiperSlide>
                    <SwiperSlide className='calendar-swiper__slide'>
                        <CalendarCard title="Август"></CalendarCard>
                    </SwiperSlide>
                    <SwiperSlide className='calendar-swiper__slide'>
                        <CalendarCard title="Сентябрь"></CalendarCard>
                    </SwiperSlide>

                </Swiper>
                <div className="calendar-swiper-swiper-button-next">
                    <img src={swiperArrow} alt="" className="calendar-swiper__arrow" />
                </div>
                <div className="calendar-swiper-swiper-button-prev">
                    <img src={swiperArrow} alt="" className="calendar-swiper__arrow" />
                </div>
            </div>
        </>
    );
}

export default CalendarSwiper;