import { useState } from "react";

function ItemCount ({stock,initial}){

    const [contador, setContador] = useState(initial)

    var aumentar = () =>{ setContador(contador + 1) }
    var restar = () =>{ setContador(contador - 1) }
    
    if (contador === stock) {
        aumentar = () =>{ setContador(contador + 0) }
    }if (contador === 1){
        restar = () =>{ setContador(contador - 0) }
    }
    

    return (
        <div>
            <div style={{textAlign: "center", marginBottom: "10px"}}>
                <span style={{display: "flex", alignItems: "center", backgroundColor: "#b6b6b647", border: "solid 1px #6a6a6a47", borderRadius: '20px',justifyContent: "space-between", fontSize: '21px'}}>
                    <button style={{display: 'flex',alignItems: "center",marginBottom: "1px", padding: '0 0 0 15px', border: 'none', fontSize: '30px'}}onClick={restar}>-</button>
                    {contador}
                    <button style={{display: 'flex',alignItems: "center",marginBottom: "1px",padding: '0 15px 0 0', border: 'none', fontSize: '30px'}} onClick={aumentar}>+</button>
                </span>
            </div>
        </div>
    )
}

export default ItemCount;