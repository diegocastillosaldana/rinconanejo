import React from 'react'
import Item from './Item'
import Loader from "react-loader-spinner";
import { useEffect, useState } from 'react';
import productosItem from "../data/productos.js";

const ItemList = ({ soloCategoria }) => {
    const [productos, setProductos] = useState([])
    const [isLoading, setIsLoading] = useState(false);

    const loadItems = async () => {
        const response = await new Promise((resolve, reject) => {
          setTimeout(() => {
            resolve(productosItem);
          }, 2 * 1000);
        });
    
        return response;
    };

    useEffect(() => {
        const getProductos = async () => {
          setIsLoading(true);
          const result = await loadItems();
          setIsLoading(false);
          setProductos(result);
        };
        getProductos();
      }, []);




    // useEffect( () =>{
    //     getProductos()
    // }, [])

    // //promise productos
    // const getProductos = () => {
    //     const getPromise =  new Promise((res, rej) => { 
    //         setTimeout(() => {
    //             res(productosItem)
    //         }, 2000);
            
    //     })
    //     getPromise.then(res => setProductos(res))
    // }

    return (     
        <div className="product-layout">      
        {soloCategoria 
            ?  productos.map((e)=>{
                return (
                    e.categoria === soloCategoria && (
                        <Item productos={e}/>
                    )
                );
            })
            : productos.map((e) => {
                return (
                    <Item productos={e}/>
                );
            })}
            {isLoading && (
                <Loader type="TailSpin" color="#fa6647" height={40} width={40}/>
            )}
            {/* {productos.map( e => 
                <Item productos={e}/>
            )}  */}
        </div>
    )
}


export default ItemList
