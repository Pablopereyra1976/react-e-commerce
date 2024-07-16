import React from 'react';
import { Link } from 'react-router-dom';
import tornillos from "../Inventario/tornillos.json";
import { useParams } from 'react-router-dom';
import './Stock.css';

 function Stock() {
const { tornillosId } = useParams();
console.log("tornillosid",tornillosId)



const tornillo = tornillos.find(tornillo => tornillo.id === Number(tornillosId));
console.log("tornillo encontrado",tornillo)
  return (
    <div className='container-stock'>
   <div className='descripcion'> este tipo de tornillo viene de diversos colores, en este caso solo queda en stock este color:  {tornillo.color}</div>
   <Link to={'/productos'}className='btn-stock'>volver</Link>

   </div>
  )
}
export default Stock;