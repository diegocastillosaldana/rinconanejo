import React, { useContext } from 'react'
import ItemCount from './ItemCount';
import { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import { CartlistContext } from '../store/CartContext';

const ItemDetail = ({ item }) => {

    const [added, setAdded] = useState(false)

    const { addItem } = useContext(CartlistContext)

    const itemId = item.item;

    const clickHandler = () => {
        addItem(itemId)
    }

    const onAdd = () => {
        clickHandler();
        setAdded(true);
    }

    useEffect(() => {
        console.log('added', added);
    }, [added])


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
                            <br />
                            <p>Stock: {item.stock}u</p>
                            <div className="price">S/ {item.price} por unidad</div>
                            <div style={{ display: "block", marginBottom: "10px" }}>
                                {!added &&
                                    <>
                                        <ItemCount onAdd={onAdd} stock={item.stock} initial={1} />
                                        <div style={{ width: "400px" }}>
                                            <button onClick={onAdd} className="addCart">Añadir al carrito</button>
                                        </div>
                                    </>
                                }{added &&
                                    <>
                                        <h1 style={{ color: "#69ae14", marginLeft: "80px" }}>✓</h1>
                                        <Link to={`/cart`}>
                                            <button className="addCart">Ir al carrito</button>
                                        </Link>
                                    </>
                                }

                            </div>
                            {/* <a href="cart.html" className="addCart">Add To Cart</a> */}
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default ItemDetail