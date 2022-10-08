import React from 'react'
import img from './assets/1vLCv01.png.png'
import img2 from './assets/1vLCv01-mob.png'
import './MiddleBanner.scss';

function MiddleBanner() {
  return (
    <div className='MiddleBanner wl-container'>
        <div className='content-text'>
            <h4>Lorem ipsum </h4>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Interdum mauris posuere fusce proin mattis. Hendrerit cras ut nunc enim dictum. Mattis proin ut quis donec sed eget nulla. Vel mi ut mauris integer. Nibh sagittis in lobortis sed cursus condimentum velit pharetra. Amet luctus ut vulputate scelerisque placerat consequat. Neque arcu mi iaculis id. Vel vitae, pharetra, a nec tristique. Feugiat id tortor eu mauris pulvinar velit massa. Ut ornare augue eget convallis volutpat aliquet. Sed sed pellentesque porttitor phasellus donec condimentum sit sapien.</p>
        </div>
        <div className='content-img'>
            <img src={img}  alt='banner nova promoção' className='desk'/>
            <img src={img2}  alt='banner nova promoção' className='mob'/>
        </div>
    </div>
  )
}

export default MiddleBanner