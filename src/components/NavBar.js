import React from 'react'
import logorincon from '../logorincon.png';
import flecha from '../flacha.svg';
import barramenu from '../menu.svg';
import CartWidget from '../components/CartWidget';

const NavBar = () => {
    return (
        <header className="header">
        <div className="container logo-nav-container">
            <a href="#inicio" className="logo"><img src={logorincon} alt="logo"/></a>
            <nav class="navigation">
                <span className="nav-bar" id="btnMenu"><img src={barramenu} alt="menu"/></span>
                <ul className="menu">
                    <li className="menu-item container-submenu"><a className="hvr-underline-from-center" href="#Vinos">Vinos<img className="flecha" src={flecha} alt="flecha"/></a>
                        <ul className="submenu">
                            <li className="submenu-item"><a className="hvr-underline-from-center" href="#Tintos">Tintos</a></li>
                            <li className="submenu-item"><a className="hvr-underline-from-center" href="#Blancos">Blancos</a></li>
                        </ul>
                    </li>
                    <li className="menu-item container-submenu"><a className="hvr-underline-from-center" href="#Pisco">Pisco<img className="flecha" src={flecha} alt="flecha"/></a>
                         <ul className="submenu">
                            <li className="submenu-item"><a className="hvr-underline-from-center" href="#Tintos">Puro</a></li>
                            <li className="submenu-item"><a className="hvr-underline-from-center" href="#Blancos">Acholado</a></li>
                        </ul> 
                    </li>
                    <li className="menu-item"><a className="hvr-underline-from-center" href="#Promociones">Promociones</a></li>
                    <CartWidget/>
                </ul>
            </nav>
        </div>
        </header>        
    )
}

export default NavBar
