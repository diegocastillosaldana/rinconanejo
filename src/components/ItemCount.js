import { useState } from "react";

function ItemCount({ stock, initial, onAdd }) {

    const [contador, setContador] = useState(initial)

    var aumentar = () => { setContador(contador + 1) }
    var restar = () => { setContador(contador - 1) }

    if (contador === stock) {
        aumentar = () => { setContador(contador + 0) }
    } if (contador === 1) {
        restar = () => { setContador(contador - 0) }
    }


    return (
        <>
            <div style={{ width: "200px" }}>
                <div style={{ textAlign: "center", marginBottom: "10px", width: "200px" }}>
                    <span style={{ display: "flex", alignItems: "center", width: "200px", border: "solid 1px #6a6a6a47", borderRadius: '20px', justifyContent: "space-between", fontSize: '21px' }}>
                        <button style={{ borderRadius: "20px", cursor: "pointer", display: 'flex', alignItems: "center", marginBottom: "1px", padding: '0 15px', border: 'none', fontSize: '30px' }} onClick={restar}>-</button>
                        {contador}
                        <button style={{ borderRadius: "20px", cursor: "pointer", display: 'flex', alignItems: "center", marginBottom: "1px", padding: '0 10px', border: 'none', fontSize: '30px' }} onClick={aumentar}>+</button>
                    </span>
                    <div style={{ width: "400px" }}>
                        <button onClick={onAdd} className="addCart">Añadir al carrito</button>
                    </div>

                </div>
            </div>
        </>
    )
}

export default ItemCount;