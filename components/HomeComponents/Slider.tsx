import Image from 'next/image';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination,Scrollbar,Autoplay } from 'swiper';

import 'swiper/css';
import 'swiper/css/pagination';

//checked

const Slider = () => {

  const images = [
    'https://www-file.huawei.com/-/media/corp2020/home/cbg/0518/mate_xs_2.jpg',
    'https://i01.appmifile.com/webfile/globalimg/0320/TO-B/New-Product-Banner/mi-11t-pro-banner.jpg',
    'http://image.oppo.com/content/dam/oppo/eg/homepage/Pc-website-2880x1440-arabic-version.jpg',
    'https://www.hihonor.com/content/dam/honor/global/home-page/image-banner-v4/home-s1-magic-v-pc-0406.png'
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
              <Image className='swiper-edit__swiper__swiperslides__img' alt='slider' layout='fill' src={img}  />
            </SwiperSlide>
          ))
        }
      </Swiper>
    </div>
  )
}

export default Slider