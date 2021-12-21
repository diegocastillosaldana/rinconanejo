import React from 'react'
import '../App.css';
import ItemCount from './ItemCount';

const ItemListContainer = () => {
    return (
        
        <div id="lista-cursos">
            <h1 id="encabezado" className="encabezado">Selección de Piscos</h1>
        <div className="row">
            <div className="four columns">
                <div className="card">
                    {/* <img src="img/curso1.jpg" className="imagen-curso u-full-width"/> */}
                    <div className="info-card">
                        <h4>Pisco Quebranta</h4>
                        <p>Viña D' Los Campos</p>
                        {/* <img src="img/estrellas.png"/> */}
                        <p className="precio">Stock: 10u<span className="u-pull-right ">$ <span>15</span></span></p>
                        <ItemCount stock={10} initial={1}/>
                        <a href="#item" className="u-full-width button-primary button input agregar-carrito" data-id="1">Agregar Al Carrito</a>
                    </div>
                </div>
            </div>
            <div className="four columns">
                <div className="card">
                    {/* <img src="img/curso1.jpg" className="imagen-curso u-full-width"/> */}
                    <div className="info-card">
                        <h4>Pisco Acholado</h4>
                        <p>Viña D' Los Campos</p>
                        {/* <img src="img/estrellas.png"/> */}
                        <p className="precio">Stock: 7u<span className="u-pull-right ">$ <span>15</span></span></p>
                        <ItemCount stock={7} initial={1}/>
                        <a href="#item" className="u-full-width button-primary button input agregar-carrito" data-id="1">Agregar Al Carrito</a>
                    </div>
                </div>
            </div>
            <div className="four columns">
                <div className="card">
                    {/* <img src="img/curso1.jpg" className="imagen-curso u-full-width"/> */}
                    <div className="info-card">
                        <h4>Piso Puro</h4>
                        <p>Viña D' Los Campos</p>
                        {/* <img src="img/estrellas.png"/> */}
                        <p className="precio">Stock: 5u<span className="u-pull-right ">$ <span>15</span></span></p>
                        <ItemCount stock={5} initial={1}/>
                        <a href="#item" className="u-full-width button-primary button input agregar-carrito" data-id="1">Agregar Al Carrito</a>
                    </div>
                </div>
            </div>

        </div>
        <h1 id="encabezado" className="encabezado">Selección de Vinos</h1>
        <div className="row">
            <div className="four columns">
                <div className="card">
                    {/* <img src="img/curso1.jpg" className="imagen-curso u-full-width"/> */}
                    <div className="info-card">
                        <h4>Borgoña Negra - Gran Reserva</h4>
                        <p>Viña D' Los Campos</p>
                        {/* <img src="img/estrellas.png"/> */}
                        <p className="precio">Stock: 15u<span className="u-pull-right ">$ <span>15</span></span></p>
                        <ItemCount stock={15} initial={1}/>
                        <a href="#item" className="u-full-width button-primary button input agregar-carrito" data-id="1">Agregar Al Carrito</a>
                    </div>
                </div>
            </div>
            <div className="four columns">
                <div className="card">
                    {/* <img src="img/curso1.jpg" className="imagen-curso u-full-width"/> */}
                    <div className="info-card">
                        <h4>Borgoña Blanca - Gran Reserva</h4>
                        <p>Viña D' Los Campos</p>
                        {/* <img src="img/estrellas.png"/> */}
                        <p className="precio">Stock: 10u<span className="u-pull-right ">$ <span>15</span></span></p>
                        <ItemCount stock={10} initial={1}/>
                        <a href="#item" className="u-full-width button-primary button input agregar-carrito" data-id="1">Agregar Al Carrito</a>
                    </div>
                </div>
            </div>
            <div className="four columns">
                <div className="card">
                    {/* <img src="img/curso1.jpg" className="imagen-curso u-full-width"/> */}
                    <div className="info-card">
                        <h4>Dulce Pescado</h4>
                        <p>Viña D' Los Campos</p>
                        {/* <img src="img/estrellas.png"/> */}
                        <p className="precio">Stock: 11u<span className="u-pull-right ">$ <span>15</span></span></p>
                        <ItemCount stock={11} initial={1}/>
                        <a href="#item" className="u-full-width button-primary button input agregar-carrito" data-id="1">Agregar Al Carrito</a>
                    </div>
                </div>
            </div>

        </div>
        <div class="row">
        <div className="four columns">
                <div className="card">
                    {/* <img src="img/curso1.jpg" className="imagen-curso u-full-width"/> */}
                    <div className="info-card">
                        <h4>Rosa Salvaje - Gran Reserva</h4>
                        <p>Viña D' Los Campos</p>
                        {/* <img src="img/estrellas.png"/> */}
                        <p className="precio">Stock: 3u<span className="u-pull-right ">$ <span>15</span></span></p>
                        <ItemCount stock={3} initial={1}/>
                        <a href="#item" className="u-full-width button-primary button input agregar-carrito" data-id="1">Agregar Al Carrito</a>
                    </div>
                </div>
            </div>
            <div className="four columns">
                <div className="card">
                    {/* <img src="img/curso1.jpg" className="imagen-curso u-full-width"/> */}
                    <div className="info-card">
                        <h4>Amor Perfecto</h4>
                        <p>Viña D' Los Campos</p>
                        {/* <img src="img/estrellas.png"/> */}
                        <p className="precio">Stock: 4u<span className="u-pull-right ">$ <span>15</span></span></p>
                        <ItemCount stock={4} initial={1}/>
                        <a href="#item" className="u-full-width button-primary button input agregar-carrito" data-id="1">Agregar Al Carrito</a>
                    </div>
                </div>
            </div>
            <div className="four columns">
                <div className="card">
                    {/* <img src="img/curso1.jpg" className="imagen-curso u-full-width"/> */}
                    <div className="info-card">
                        <h4>Dorada Tentación</h4>
                        <p>Viña D' Los Campos</p>
                        {/* <img src="img/estrellas.png"/> */}
                        <p className="precio">Stock: 2u<span className="u-pull-right ">$ <span>15</span></span></p>
                        <ItemCount stock={2} initial={1}/>
                        <a href="#item" className="u-full-width button-primary button input agregar-carrito" data-id="1">Agregar Al Carrito</a>
                    </div>
                </div>
            </div>
        </div>
        <div class="row">
        <div className="four columns">
                <div className="card">
                    {/* <img src="img/curso1.jpg" className="imagen-curso u-full-width"/> */}
                    <div className="info-card">
                        <h4>Moscatel de Alejandria</h4>
                        <p>Viña D' Los Campos</p>
                        {/* <img src="img/estrellas.png"/> */}
                        <p className="precio">Stock: 10u<span className="u-pull-right ">$ <span>15</span></span></p>
                        <ItemCount stock={10} initial={1}/>
                        <a href="#item" className="u-full-width button-primary button input agregar-carrito" data-id="1">Agregar Al Carrito</a>
                    </div>
                </div>
            </div>
            <div className="four columns">
                <div className="card">
                    {/* <img src="img/curso1.jpg" className="imagen-curso u-full-width"/> */}
                    <div className="info-card">
                        <h4>Blancos de Blancos</h4>
                        <p>Viña D' Los Campos</p>
                        {/* <img src="img/estrellas.png"/> */}
                        <p className="precio">Stock: 20u<span className="u-pull-right ">$ <span>15</span></span></p>
                        <ItemCount stock={20} initial={1}/>
                        <a href="#item" className="u-full-width button-primary button input agregar-carrito" data-id="1">Agregar Al Carrito</a>
                    </div>
                </div>
            </div>
            <div className="four columns">
                <div className="card">
                    {/* <img src="img/curso1.jpg" className="imagen-curso u-full-width"/> */}
                    <div className="info-card">
                        <h4>Gran Mistura</h4>
                        <p>Viña D' Los Campos</p>
                        {/* <img src="img/estrellas.png"/> */}
                        <p className="precio">Stock: 15u<span className="u-pull-right ">$ <span>15</span></span></p>
                        <ItemCount stock={15} initial={1}/>
                        <a href="#item" className="u-full-width button-primary button input agregar-carrito" data-id="1">Agregar Al Carrito</a>
                    </div>
                </div>
            </div>
        </div>
    </div>  
    )
}

export default ItemListContainer
