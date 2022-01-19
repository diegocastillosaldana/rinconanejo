import React, { useContext } from 'react'
import { CartlistContext } from '../store/CartContext';
import { Link } from "react-router-dom";

const Cart = () => {
    const { list, removeItem } = useContext(CartlistContext)

    var total = 0;

    for (let i = 0; i < list.length; i++) {
        total = total + list[i].price

    }

    return (
        <div className="container cart">
            <table>
                <tr>
                    <th>Producto</th>
                    <th>Cantidad</th>
                    <th>Subtotal</th>
                </tr>
                {list.length !== 0 ? (
                    list.map(product =>
                        <tr>
                            <td>
                                <div className="cart-info">
                                    <img src={product.imgProd} alt="" />
                                    <div>
                                        <p>{product.name}</p>
                                        <span>S/ {product.price}</span>
                                        <br />
                                        <button style={{ cursor: 'pointer' }} key={product.id} onClick={() => { removeItem(product.id) }}>Eliminar</button>
                                    </div>
                                </div>
                            </td>
                            <td>x{product.select}</td>
                            <td>S/ {product.price}</td>
                        </tr>
                    )
                ) : (<>
                    <p style={{ marginTop: '10px' }}>No hay productos en tu carrito</p>

                    <Link to={`/productos`}>
                        <button className="addCart" style={{ cursor: 'pointer', marginTop: '30px', backgroundColor: '#69ae14', border: 'none', color: '#fff', padding: '0.7rem 1.6rem', borderRadius: '3rem', fontSize: '20px' }}>Ir a la tienda</button>
                    </Link>
                </>
                )}

            </table>
            <div className="total-price">
                <table>
                    <tr>
                        <td>Total</td>
                        <td>S/. {total}</td>
                    </tr>
                </table>
                <a href="#" className="checkout btn">Proceder a Pagar</a>
            </div>
        </div>
    )
}

export default Cart
