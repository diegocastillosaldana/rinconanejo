import React from 'react'
import Item from './Item'
import { useEffect, useState } from 'react';
import productosItem from "../data/productos.js";

const ItemList = () => {
    const [productos, setProductos] = useState([])

    useEffect( () =>{
        getProductos()
    }, [])

    //promise productos
    const getProductos = () => {
        const getPromise =  new Promise((res, rej) => { 
            setTimeout(() => {
                res(productosItem)
            }, 2000);
            
        })
        getPromise.then(res => setProductos(res))
    }

    return (        
        <div className="product-layout">                       
            {productos.map( e => 
                <Item productos={e}/>
            )}       
        </div>
    )
}

export default ItemList
