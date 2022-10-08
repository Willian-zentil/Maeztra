import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from "swiper";
import img1 from './assets/mod.png';
import img2 from './assets/flor.png';
import './Shelf.scss';
import "swiper/css/navigation";
import 'swiper/css';

export default function Shelf() {
  return (
    <div className='Shelf'>
        <h3>As Mais Pedidas</h3>
        <div className='content-shelf wl-container'>
        <Swiper
            spaceBetween={10}
            navigation={true}
            slidesPerView={1}
            modules={[Navigation]}
            breakpoints={{
                992: {
                    slidesPerView: 3,
                    spaceBetween: 40,
                  },
                1400: {
                    slidesPerView: 4,
                    spaceBetween: 40,
                  },
                1800: {
                  slidesPerView: 5,
                  spaceBetween: 40,
                },
              }}
        >
        <SwiperSlide>
            <div className='item-shelf'>
                <img className='item-img' src={img1} alt="produto"/>
                <div className='content-item'>
                    <div className='variacao'>
                        <span className='brow'></span>
                        <span className='red'></span>
                        <span className='blue'></span>
                        <span className='purple'></span>
                    </div>
                    <h3 className='price'>R$ 500,00</h3>
                    <h4>Faux Suede Mini Skirt</h4>
                    <p>A faux suede mini skirt featuring exposed button-front closures and panel seam construction.</p>
                    <label>Adicionar</label>
                </div>
            </div>
            
        </SwiperSlide>
        <SwiperSlide>
            <div className='item-shelf'>
                <img className='item-img' src={img2} alt="produto"/>
                <div className='content-item'>
                    <div className='variacao'>
                        <span className='black'></span>
                        <span className='red'></span>
                        <span className='gray'></span>
                        <span className='white'></span>
                    </div>
                    <h3 className='price'>R$ 320,00</h3>
                    <h4>Ruched Rose Print Mini Skirt</h4>
                    <p>A satin mini skirt featuring an allover floral print, ruched side with self-tie closure, concealed back zipper, and a flounce hem.</p>
                    <label>Adicionar</label>
                </div>
            </div>
            
        </SwiperSlide>
        <SwiperSlide>
            <div className='item-shelf'>
                <img className='item-img' src={img1} alt="produto"/>
                <div className='content-item'>
                    <div className='variacao'>
                        <span className='brow'></span>
                        <span className='red'></span>
                        <span className='blue'></span>
                        <span className='purple'></span>
                    </div>
                    <h3 className='price'>R$ 500,00</h3>
                    <h4>Faux Suede Mini Skirt</h4>
                    <p>A faux suede mini skirt featuring exposed button-front closures and panel seam construction.</p>
                    <label>Adicionar</label>
                </div>
            </div>
            
        </SwiperSlide>
        <SwiperSlide>
            <div className='item-shelf'>
                <img className='item-img' src={img2} alt="produto"/>
                <div className='content-item'>
                    <div className='variacao'>
                    <span className='black'></span>
                        <span className='red'></span>
                        <span className='gray'></span>
                        <span className='white'></span>
                    </div>
                    <h3 className='price'>R$ 320,00</h3>
                    <h4>Ruched Rose Print Mini Skirt</h4>
                    <p>A satin mini skirt featuring an allover floral print, ruched side with self-tie closure, concealed back zipper, and a flounce hem.</p>
                    <label>Adicionar</label>
                </div>
            </div>
            
        </SwiperSlide>
        <SwiperSlide>
            <div className='item-shelf'>
                <img className='item-img' src={img1} alt="produto"/>
                <div className='content-item'>
                    <div className='variacao'>
                        <span className='brow'></span>
                        <span className='red'></span>
                        <span className='blue'></span>
                        <span className='purple'></span>
                    </div>
                    <h3 className='price'>R$ 500,00</h3>
                    <h4>Faux Suede Mini Skirt</h4>
                    <p>A faux suede mini skirt featuring exposed button-front closures and panel seam construction.</p>
                    <label>Adicionar</label>
                </div>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className='item-shelf'>
                <img className='item-img' src={img2} alt="produto"/>
                <div className='content-item'>
                    <div className='variacao'>
                        <span className='black'></span>
                        <span className='red'></span>
                        <span className='gray'></span>
                        <span className='white'></span>
                    </div>
                    <h3 className='price'>R$ 320,00</h3>
                    <h4>Ruched Rose Print Mini Skirt</h4>
                    <p>A satin mini skirt featuring an allover floral print, ruched side with self-tie closure, concealed back zipper, and a flounce hem.</p>
                    <label>Adicionar</label>
                </div>
            </div>
        </SwiperSlide>
    </Swiper>
        </div>
    </div>
  )
}
