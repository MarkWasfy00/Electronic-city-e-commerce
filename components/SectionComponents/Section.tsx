import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper';
import { useRef } from 'react';
import { AnimationOnScroll } from 'react-animation-on-scroll';
//------
import 'swiper/css/navigation';


//checked

type SectionProps = {
    sectionName: string
    isDarkBg?: boolean
    gap?: number
    children: React.ReactNode[]
}


const Section = ({sectionName,isDarkBg,gap,children}:SectionProps) => {
    let nextBtn = useRef<any>(null);
    let prevBtn = useRef<any>(null);


  return (
    <AnimationOnScroll animateIn='animate__slideInUp' animateOnce>
        <section className={`section ${isDarkBg ? ' section--dark-bg': ''}`}>
            <div className="container">
                <div className="section__header">
                    <div className="section__header__title headline-s">{sectionName}</div>
                    {/* <a href="#" className='section__header__link link-s'>View all</a> */}
                    <div className="section__header__navigation">
                        <i className="section__header__navigation__prev fa-solid fa-chevron-left" ref={prevBtn}></i>
                        <i className="section__header__navigation__next fa-solid fa-chevron-right" ref={nextBtn}></i>
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
                        return <SwiperSlide className='section__holder__card' key={key}>{Card}</SwiperSlide>
                    })
                }   
                </Swiper>
            </div>
        </section>
    </AnimationOnScroll>
  )
}

export default Section