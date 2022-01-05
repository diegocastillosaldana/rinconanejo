import React from 'react'

const Cart = () => {
    return (
        <div className="container cart">
            <table>
                <tr>
                    <th>Producto</th>
                    <th>Cantidad</th>
                    <th>Subtotal</th>
                </tr>
                <tr>
                    <td>
                        <div className="cart-info">
                            <img src="./images/product-1.jpg" alt="" />
                            <div>
                                <p>Nombre de producto</p>
                                <span>Precio</span>
                                <br />
                                <a href="#">Eliminar</a>
                            </div>
                        </div>
                    </td>
                    <td>1</td>
                    <td>S/. --</td>
                </tr>
            </table>
            <div className="total-price">
                <table>
                    <tr>
                        <td>Total</td>
                        <td>S/. --</td>
                    </tr>
                </table>
                <a href="#" className="checkout btn">Proceder a Pagar</a>
            </div>
        </div>       
    )
}

export default Cart
