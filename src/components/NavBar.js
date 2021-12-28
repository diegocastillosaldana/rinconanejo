import React from 'react'
import { NavLink } from 'react-router-dom';
import Arrow from '../assets/iconos/flecha.png';
import Logo from '../assets/iconos/logorincon.png';
import CartWidget from './CartWidget';
import NavImg from '../assets/img/newnav.png';

const NavBar = () => {
    return (
        <nav className="nav">
            <div className="wrapper container">
                <div className="logo">
                  <NavLink to="/" exact="true">
                    <a href="#a"><img style={{width: "120px"}} src={Logo} alt="logo"/></a>
                  </NavLink>
                </div>
                <ul className="nav-list">
                    <div className="top">
                        <label for="" className="btn close-btn"><img src={Arrow} alt="" /></label>
                  </div>
        <li>
          <NavLink to="/" >
            <a href="#a">Inicio</a>
          </NavLink>
        </li>
        <li>
          <NavLink to="/productos/">
            <a href="#a" className="desktop-item">Productos <span><i className="fas fa-chevron-down"></i></span></a>
          </NavLink>
          <input type="checkbox" id="showMega" />
          <label for="showMega" className="mobile-item">Productos <span><i className="fas fa-chevron-down"></i></span></label>
          <div className="mega-box">
            <div className="content">
              <div className="row">
                <img src={NavImg} alt="" />
              </div>
              <div className="row">
                <header>Vinos</header>
                <ul className="mega-links">
                  <li><a href="#a">Gran Reserva</a></li>
                  <li><a href="#a">Manzanillo</a></li>
                  <li><a href="#a">Semi Seco</a></li>
                </ul>
              </div>
              <div className="row">
                <header>Pisco</header>
                <ul className="mega-links">
                  <li><a href="#a">Pisco</a></li>
                  <li><a href="#a">Macerado</a></li>
                </ul>
              </div>
            </div>
          </div>
        </li>

        <li>
          <a href="#a" className="desktop-item">Nosotros <span><i className="fas fa-chevron-down"></i></span></a>
          <input type="checkbox" id="showdrop2" />
          <label for="showdrop2" className="mobile-item">Nosotros <span><i className="fas fa-chevron-down"></i></span></label>
          <ul className="drop-menu2">
            <li><a href="#a">Conócenos</a></li>
            <li><a href="#a">Contacto</a></li>
            <li><a href="#a">Preguntas Frecuentes</a></li>
          </ul>
        </li>
        <CartWidget/>
      </ul>
      <label for="" className="btn open-btn"><i className="fas fa-bars"></i></label>
    </div>
  </nav>     
    )
}

export default NavBar