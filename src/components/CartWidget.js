import React from 'react'
import Carrito from '../assets/iconos/carrito.png';


const CartWidget = () => {
    return (
        <li className="icons">
          <a href="cart.html">
            <span>
            <img src={Carrito} alt="" />
            <small className="count d-flex">4</small>
          </span>
          </a>
        </li>
    )
}

export default CartWidget
