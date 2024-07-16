import React from "react";
import Tornillos from "../tornillos.json";
import { Link } from "react-router-dom";
import "./TornillosMilimetricos.css";

function TornillosMilimetricos() {
  return (
    <div className="container">
      <div className="container-cards">
        {Tornillos.map((Tornillo) => (
          <div key={Tornillo.id} className="card">
            <h2>{Tornillo.descripcion}</h2>
            <h2>{Tornillo.talla}</h2>
            <h3>{Tornillo.id}</h3>
            <img src={Tornillo.imagenUrl} className="img" />
            <div className="controles">
              <Link to={`/Stock/${Tornillo.id}`} className="btn">
                Ver Mas
              </Link>
            </div>
          </div>
        ))}
      </div>
      <div >
        <Link to={"/"} className="volver">
          Volver
        </Link>
      </div>
    </div>
  );
}

export default TornillosMilimetricos;
