import Image from 'next/image';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination,Scrollbar,Autoplay } from 'swiper';

import 'swiper/css';
import 'swiper/css/pagination';

//checked

const Slider = () => {

  const images = [
    'https://i01.appmifile.com/webfile/globalimg/0320/TO-B/New-Product-Banner/Xiaomi-12-Pro-banner-en.jpg',
    'https://www.apple.com/v/iphone/home/bh/images/overview/retail/why_apple__ezn1ktvka6oi_large_2x.jpg',
    'https://i01.appmifile.com/webfile/globalimg/dongxuechun/k9dbannerEn.jpg',
    'https://www.apple.com/v/iphone/home/bh/images/overview/ios-16/ios16_preview__fpxyj72zmsuq_large_2x.jpg'
  ]

  return (
    <div className='swiper-edit'>
        <Swiper
        modules={[Pagination,Scrollbar,Autoplay]}
        pagination={{
          clickable:true,
          renderBullet: (index, className) => {
            return `<span class="${className}"></span>`;
          }
        }}
        speed={800}
        slidesPerView={1}
        loop={true}
        autoplay={{delay:5000}}
        scrollbar={{ draggable: true }}
        className={'swiper-edit__swiper'}
        >
        {
          images.map((img) => (
            <SwiperSlide key={img} className='swiper-edit__swiper__swiperslides'>
              <Image className='swiper-edit__swiper__swiperslides__img' alt='slider' layout='fill' src={img} quality={100} />
            </SwiperSlide>
          ))
        }
      </Swiper>
    </div>
  )
}

export default Slider