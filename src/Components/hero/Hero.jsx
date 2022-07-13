import React from 'react'
import organ from '../img/organ1.jpg'
import organ2 from '../img/organ2.jpg'
import organ3 from '../img/organ3.jpg'
import './hero.scss'
function Hero() {
return (
<div className='Hero__main'>
<div id="carouselExampleCaptions" className="carousel slide carousel-fade " data-bs-ride="carousel">
  <div className="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src={organ} className="d-block w-100" alt="..." />
      <div className="slider__desc carousel-caption d-none d-md-block">
        <h4>Elessi Store</h4>
        <p className='slider__p'>Fresh vegetables <br /> Sale up to 30% off</p>
        <button className='slider__dec-btn'>show now</button>
      </div>
    </div>
    <div className="carousel-item">
      <img src={organ2} className="d-block w-100" alt="..." />
      <div className="slider__desc  carousel-caption d-none d-md-block">
        <h3 className='text_blue'>Second slide label</h3>
        <p className='slider__p p-black'>Fresh vegetables <br /> Sale up to <span className='span__text'>30% off</span></p>
        <button className='slider__dec-btn2'>show now</button>
      </div>
    </div>
    <div className="carousel-item">
      <img src={organ3} className="d-block w-100" alt="..." />
      <div className="slider__desc  carousel-caption d-none d-md-block">
        <h3 className='text_blue'>Third slide label</h3>
        <p className='slider__p p-black'>Fresh vegetables <br /> Sale up to <span className='span__text'>30% off</span></p>
        <button className='slider__dec-btn3'>show now</button>
      </div>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
</div>

)
}

export default Hero