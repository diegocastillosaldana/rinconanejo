import React, { useContext } from 'react'
import Carrito from '../assets/iconos/carrito.png';
import { Link } from "react-router-dom";
import { CartlistContext } from '../store/CartContext';


const CartWidget = () => {
  const { list, clearCartlist, removeItem } = useContext(CartlistContext)
  // let cant = 1;

  const Clear = () => {
    clearCartlist()
  }

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
          <h3>Carrito</h3>
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
                <p>x{product.select}</p>
              </div>
              <div>
                <button key={product.id} onClick={() => { removeItem(product.id) }} className="delete">X</button>
              </div>
            </div>
          )}
        </div>
        <div className="btns">
          <button className="limpiar" onClick={Clear} style={{ cursor: 'pointer' }}>Limpiar</button>
          {/* <Link to={`/cart`}> */}
          <button className="finalizar" style={{ cursor: 'pointer' }}>Finalizar Compra</button>
          {/* </Link> */}
        </div>
      </ul>
    </li>
  )
}

export default CartWidget
