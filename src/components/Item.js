import React from 'react'
import { Link } from "react-router-dom";

const Item = ({productos}) => {
    return (
        <div className="product">
            <div className="img-container">
            <img src={productos.imgProd} alt={productos.title} />
                <div className="addCart">
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
