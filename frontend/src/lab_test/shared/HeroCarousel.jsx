import React from 'react'
import { c1, c2, c3, c4 } from '../data/tests';

export default function HeroCarousel() {
  return (
    <div id="carouselExampleAutoplaying" className="carousel slide" data-bs-ride="carousel" data-bs-interval="3000"  >
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img src={c1} className="d-block w-100" alt="..." style={{height: '350px'}}/>
        </div>
        <div className="carousel-item">
          <img src={c2} className="d-block w-100" alt="..." style={{height: '350px'}}/>
        </div>
        <div className="carousel-item">
          <img src={c3} className="d-block w-100" alt="..." style={{height: '350px'}}/>
        </div>
         <div className="carousel-item">
          <img src={c4} className="d-block w-100" alt="..." style={{height: '350px'}}/>
        </div>
      </div>
      <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  )
}
