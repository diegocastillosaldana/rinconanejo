import React, { useContext } from 'react'
import { Link } from "react-router-dom";
import { CartlistContext } from '../store/CartContext';

const Item = ({ productos }) => {
    const { addItem, isInCart } = useContext(CartlistContext)
    const clickHandler = () => {
        if (isInCart(productos.id)) {
            alert('existe')
        } else {
            addItem(productos)
        }
    }

    return (
        <div className="product">
            <div className="img-container">
                <img src={productos.imgProd} alt={productos.title} />
                <div onClick={clickHandler} className="addCart" style={{ cursor: 'pointer' }}>
                    <i className="fas fa-shopping-cart"></i>
                </div>
                <ul className="side-icons">
                    <Link key={productos.id} to={`/item/${productos.id}`}>
                        <button className="btnInfo"><span><i className="fas fa-search"></i></span></button>
                    </Link>
                </ul>
            </div>
            <div className="bottom">
                <Link key={productos.id} to={`/item/${productos.id}`}>
                    <a href="#sa">{productos.name}</a>
                    <div className="price">
                        <span>S/ {productos.price}</span>
                    </div>
                </Link>
            </div>
        </div>
    )
}

export default Item
