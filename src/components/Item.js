import React from 'react'
import ItemCount from './ItemCount';

const Item = ({piscos, add}) => {
    return (
        <div className="four columns">
                <div className="card">
                    {/* <img src="img/curso1.jpg" className="imagen-curso u-full-width"/> */}
                    <div className="info-card">
                        <h4>{piscos.name}</h4>
                        <p>{piscos.origin}</p>
                        <p className="precio">Stock: {piscos.stock}u<span className="u-pull-right ">$ <span>{piscos.price}</span></span></p>
                        <ItemCount stock={piscos.stock} initial={1}/>
                        <button className="u-full-width button-primary button input agregar-carrito" data-id="1">Agregar Al Carrito</button>  
                    </div>
                </div>
        </div>
    )
}

export default Item
