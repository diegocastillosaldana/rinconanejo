import React from 'react'
import '../App.css';
import ItemList from './ItemList';
import { useParams } from "react-router-dom";

const ItemListContainer = () => {

    const { categoryId } = useParams();

    return (
        <main>
            <section className="section products">
                <div className="title">
                    <h2>Nuevos Productos</h2>
                    <span>Selecione de nuestro catálogo cualquiera de nuestros vinos o piscos mas recientes</span>
                </div>
                <div>
                    {categoryId ? <ItemList soloCategoria={categoryId} /> : <ItemList/>}                    
                </div>
            </section>
        </main>
    )
}

export default ItemListContainer
