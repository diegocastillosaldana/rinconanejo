import React from 'react'
import '../App.css';
import ItemList from './ItemList';
import { useParams } from "react-router-dom";
import categorias from "../data/categorias";
import { NavLink } from 'react-router-dom';

const ItemListContainer = () => {

    const { categoryId } = useParams();

    return (
        <main>
            <section className="section products">
                <div className="title">
                    <h2>Nuevos Productos</h2>
                    <span>Selecione de nuestro catálogo cualquiera de nuestros vinos o piscos mas recientes</span>
                </div>
                {/* <div>
                    {categoryId ? <ItemList soloCategoria={categoryId} /> : <ItemList/>}                    
                </div> */}
                <div className="products-layout container">
      <div className="col-1-of-4">
        <div>
          <div className="block-title">
            <h3>Category</h3>
          </div>

          <ul className="block-content">
          <li>
              <label>
                <span><NavLink to="/productos/">Todos</NavLink></span>
              </label>
            </li>

            <li>
              <label>
                <span key={categorias[0].id}><NavLink to={`/productos/category/${categorias[0].name}`}>Gran Reserva</NavLink></span>
              </label>
            </li>

            <li>
              <label>
                <span key={categorias[1].id}><NavLink to={`/productos/category/${categorias[1].name}`}>Manzanillo</NavLink></span>
              </label>
            </li>

            <li>
              <label>
                <span key={categorias[2].id}><NavLink to={`/productos/category/${categorias[2].name}`}>Semi Seco</NavLink></span>
            </label>
            </li>

            <li>
              <label>
                <span key={categorias[3].id}><NavLink to={`/productos/category/${categorias[3].name}`}>Pisco</NavLink></span>
            </label>
            </li>

            <li>
              <label>
                <span key={categorias[4].id}><NavLink to={`/productos/category/${categorias[4].name}`}>Macerado</NavLink></span>
            </label>
            </li>
          </ul>
        </div>
      </div>
      <div className="col-3-of-4">
        {categoryId ? <ItemList soloCategoria={categoryId} /> : <ItemList/>}                    
        
      </div>
    </div>
            </section>
        </main>
    )
}

export default ItemListContainer
