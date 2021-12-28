import React from 'react'
import '../App.css';
import ItemList from './ItemList';

const ItemListContainer = () => {
    return (
        <main>
            <section className="section products">
                <div className="title">
                    <h2>Nuevos Productos</h2>
                    <span>Selecione de nuestro catálogo cualquiera de nuestros vinos o piscos mas recientes</span>
                </div>
                <div>
                    <ItemList/>
                </div>
            </section>
        </main>
    )
}

export default ItemListContainer
