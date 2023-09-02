import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Recommded from './components/Recommded';
import Shop from './components/Shop';
import Home from './components/Home';
import Feature from './components/Feature';
import Cart from './components/Cart';
import Singleproduct from './repeatsection/Singleproduct';

        {/* jai shree Ram Ram Sita Ram */}

function App() {
  return (
    <BrowserRouter>
      <Navbar /> {/* Move Navbar outside of Routes */}
      <Routes>
        <Route path="/Home" element={<Home />} />
        <Route path="Shop" element={<Shop />} />
        <Route path="Feature" element={<Feature />} />
        <Route path="Recommded" element={<Recommded />} />
        <Route path="Cart" element={<Cart />} />
        <Route path="Singleproduct" element={<Singleproduct />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
