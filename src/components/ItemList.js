import React from 'react'
import Item from './Item'
import piscoQuebranta from "../assets/img/pisco/quebranta.png";
import piscoAcholado from "../assets/img/pisco/acholado.png";
import piscoItalia from "../assets/img/pisco/italia.png";
import { useEffect, useState } from 'react'

const ItemList = () => {
    const [piscos, setPiscos] = useState([])

    useEffect( () =>{
        getPiscos()
    }, [])

    //promise
    const getPiscos = () => {
        const getPromise = new Promise((res, rej) => { 
            const piscos = [
                {
                    name: "Pisco Quebranta",
                    origin: "Viña D' Los Campos",
                    stock: 10,          
                    price: 15,
                    imgProd: piscoQuebranta
                },
                {
                    name: "Pisco Acholado",
                    origin: "Viña D' Los Campos",
                    stock: 7,   
                    price: 20,
                    imgProd: piscoAcholado      
                },
                {
                    name: "Piso Puro",
                    origin: "Viña D' Los Campos",
                    stock: 5, 
                    price: 25,
                    imgProd: piscoItalia              
                }
            ]
            setTimeout(() => {
                res(piscos)
            }, 2000);
            
        })
        getPromise.then(res => setPiscos(res))
    }

    //end promise
    return (
        <div>            
            {piscos.map( e => 
                <Item piscos={e}/>
            )}          
        </div>
    )
}

export default ItemList
