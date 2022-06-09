import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper';
import 'swiper/css/navigation';




type SectionProps = {
    sectionName: string
    isDarkBg?: boolean
    gap?: number
    children: React.ReactNode[]
}


const Section = ({sectionName,isDarkBg,gap,children}:SectionProps) => {

    let nextBtn = React.useRef<any>(null)
    let prevBtn = React.useRef<any>(null)


  return (
    <section className={`section ${isDarkBg ? ' dark-bg': ''}`}>
        <div className="container">
            <div className="section__header">
                <div className="section__header__title headline-s">{sectionName}</div>
                {/* <a href="#" className='section__header__link link-s'>View all</a> */}
                <div className="section__header__navigation">
                    <i className="section__header__navigation--prev fa-solid fa-chevron-left" ref={prevBtn}></i>
                    <i className="section__header__navigation--next fa-solid fa-chevron-right" ref={nextBtn}></i>
                </div>
            </div>
            <Swiper className="section__holder"
            modules={[Navigation]}
            navigation={{
                nextEl:nextBtn.current,
                prevEl:prevBtn.current,
            }}
            speed={800}
            slidesPerView={'auto'}
            spaceBetween={gap || 0}
            onInit={(swiper) => {
                //@ts-ignore
                swiper.params.navigation.prevEl = prevBtn.current;
                //@ts-ignore
                swiper.params.navigation.nextEl = nextBtn.current;
                swiper.navigation.init();
                swiper.navigation.update();
            }}
            >
             {
                 children.map((Card,key) => {
                     return <SwiperSlide className='section__holder__cards' key={key}>{Card}</SwiperSlide>
                 })
             }   
            </Swiper>
        </div>
    </section>
  )
}

export default Section