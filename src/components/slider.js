import React from 'react'
import { Link } from "react-router-dom";
import img1 from '../assets/img/hero-1.png'

const slider = () => {
    return (
        <div className="hero">
    <div className="row">
      <div className="swiper-container slider-1"> 
        <div className="swiper-wrapper">
          <div className="swiper-slide">
            <img src={img1} alt="" />
            <div className="content">
              <h1>Nuestro mejores piscos
                <br/>
                a tan solo 
                <span> S/15</span>
              </h1>
              <Link to="/productos/">Ver Productos</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  
    )
}

export default slider
