import './App.css';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import NavBar from './components/NavBar';
import Slider from './components/slider';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <NavBar/>
      <Routes>
        <Route path="/" element={<Slider/>}/>
        <Route path="/productos/" exact="true" element={<ItemListContainer/>}/>
        <Route path="/productos/categoria/:catgoriaId" element={<ItemListContainer/>}/>
        <Route path="/item/:id" element={<ItemDetailContainer />} />
      </Routes>
      <script src="../src/funciones/funcionesSlider.js"></script>
    <script src="../src/funciones/funcionesInicio.js"></script>
    </BrowserRouter>
  );
}

export default App;
