import React from 'react'
import '../App.css';
import ItemList from './ItemList';

const ItemListContainer = () => {
    return (
        
        <div id="lista-cursos">
            <h1 id="encabezado" className="encabezado">Selección de Piscos</h1>
            <div className="row">
                <ItemList/>
            </div>        
        </div>  
    )
}

export default ItemListContainer
