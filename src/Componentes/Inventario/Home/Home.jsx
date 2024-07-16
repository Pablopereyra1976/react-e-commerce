import React from "react";
import "./Home.css";
import { Link } from "react-router-dom";
import ferreteria from "../../../../public/imagenes/ferreteria.jpeg";

const Tuerca = { id: 1 };  // Define el objeto Tuerca
const Tornillo = { id: 1 };  // Define el objeto Tornillo

function Home() {
  return (
    <div>
      <div className="container-titulo">
        <h1 className="titulo">Tornilleria "veracruz"</h1>
      </div>

      <Link to={`/Tuercas/${Tuerca.id}`} className="btn-home">Ir a Tuercas</Link>
      <Link to={`/Tornillos/${Tornillo.id}`} className="btn-home">Ir a Tornillos</Link>

      <img src={ferreteria} className="img-home" />
    </div>
  );
}
export default Home;
