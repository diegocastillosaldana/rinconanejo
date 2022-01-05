import './App.css';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import NavBar from './components/NavBar';
import Slider from './components/slider';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Cart from './components/Cart';

function App() {
  return (
    <BrowserRouter>
      <NavBar/>
      <Routes>
        <Route path="/" element={<Slider/>}/>
        <Route path="/productos/" exact="true" element={<ItemListContainer/>}/>
        <Route path="/productos/category/:categoryId" element={<ItemListContainer/>}/>
        <Route path="/item/:id" element={<ItemDetailContainer />} />
        <Route path="/cart/" element={<Cart/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
