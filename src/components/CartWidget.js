import React from 'react'
import carrito from '../carrito.svg';
import '../App.css';

const CartWidget = () => {
    return (
        <li className="menu-item li-carrito"><a className="hvr-underline-from-center" href="#carrito"><img src={carrito} className="carrito" alt="carrito"/>&nbsp;<span>4</span></a></li>
    )
}

export default CartWidget

//rafce -> shortcut

