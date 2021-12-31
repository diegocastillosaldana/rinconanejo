import React from 'react'
import ItemCount from './ItemCount';

const ItemDetail = ({ item }) => {
    return (
        <div>
            <section className="section product-detail">
                <div className="details container">
                    <div className="left">
                        <div className="main">
                            <img src={item.imgProd} alt="Producto" />
                        </div>
                    </div>
                    <div className="right pad">
                        <div>
                            <span>{item.categoria}</span>
                            <h1>{item.name}</h1>
                            <h3>{item.origin}</h3>
                            <p>
                              Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero minima
                              delectus nulla voluptates nesciunt quidem laudantium, quisquam
                              voluptas facilis dicta in explicabo, laboriosam ipsam suscipit!
                            </p>
                            <br/>
                            <p>Stock: {item.stock}u</p>
                            <div className="price">S/ {item.price} por unidad</div>
                            <div style={{width: "200px", display: "block", marginBottom: "10px"}}>                                          
                                <ItemCount stock={item.stock} initial={1}/>
                            </div>  
                            <form className="form">                                                        
                                <a href="cart.html" className="addCart">Add To Cart</a>
                            </form>
                        </div>                                                    
                    </div>
                </div>
            </section>
        </div>
    )
}

export default ItemDetail