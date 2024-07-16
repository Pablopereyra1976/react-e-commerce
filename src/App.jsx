import React from "react";
import Stock from "./Componentes/Stock/Stock.jsx";
import { Routes, Route } from "react-router-dom";
import { Home, TornillosMilimetricos, TuercasMilimetricas } from "./Componentes/Inventario/index.js";



function App() {


  return (
    <Routes>
     
      <Route path='/Stock/:tornillosId' element={<Stock />} />
      <Route path='/' element={<Home/>}/>
      <Route path='/Tornillos/:tornillosId' element={<TornillosMilimetricos/>}/>
      <Route path='/Tuercas/:tuercasId' element={<TuercasMilimetricas />} />
    </Routes>
  );
}

export default App;
