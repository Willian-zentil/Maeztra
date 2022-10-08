import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from "swiper";
import banner1 from './assets/ftECh3G.png.png';
import banner2 from './assets/ftECh3G-mob.png';
import 'swiper/css';
import './FullBanner.scss'
import "swiper/css/navigation";
import "swiper/css/pagination";


export default function FullBanner() {
  return (
    <div className='fullbanner'>
      <Swiper
          spaceBetween={0}
          navigation={true}
          pagination={true}
          slidesPerView={1}
          modules={[Navigation, Pagination]}
      >
        <SwiperSlide>
            <img className='fullbanner desk' src={banner1} alt="promoção do dia"/>
            <img className='fullbanner mob' src={banner2}/>
            <div className='txt-banner'>
                <h4>Promoções de Outono</h4>
                <p>Confiras os melhores looks para combinar com você nesse Outono</p>
                <label>Conferir</label>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <img className='fullbanner desk' src={banner1} alt="promoção do dia"/>
            <img className='fullbanner mob' src={banner2}/>
        </SwiperSlide>
      </Swiper>
    </div>
  )
}
