import React, { useContext } from 'react'
import Carrito from '../assets/iconos/carrito.png';
import { CartlistContext } from '../store/CartContext';


const CartWidget = () => {
  const { list } = useContext(CartlistContext)
  let cant = 1;
  console.log(list)
  return (
    <li className="icons">
      <a href="cart.html">
        <span>
          <img className="carritoImg" src={Carrito} alt="" />
          <small className="count d-flex">{list.length}</small>
        </span>
      </a>
      <ul className="drop-menu3">
        <div className="title">
          <h3>Articulos</h3>
        </div>
        <div className="contenido">
          {list.map(product =>
            <div className="cont">
              <div className="artImg">
                <img src={product.imgProd} alt="" />
              </div>
              <div className="nombrePrecio">
                <h4>{product.name}</h4>
                <p>S/ {product.price}</p>
              </div>
              <div className="cant">
                <p>x{cant}</p>
              </div>
              <div>
                <button className="delete">X</button>
              </div>
            </div>
          )}
        </div>
        <div className="btns">
          <button className="limpiar">Limpiar</button>
          <button className="finalizar">Finalizar Compra</button>
        </div>
      </ul>
    </li>
  )
}

export default CartWidget
