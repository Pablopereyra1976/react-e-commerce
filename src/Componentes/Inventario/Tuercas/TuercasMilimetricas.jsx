import React from "react";
import Tuercas from "../tuercas.json";
import { Link } from "react-router-dom";


function TuercasMilimetricas() {
  return (
    <div className="container">
      <h1 className="container-titulo">Tuercas Milimetricas</h1>
      <div className="container-cards">
        {Tuercas.map((Tuerca) => (
          <div key={Tuerca.id} className="card">
            <h2>{Tuerca.descripcion}</h2>
            <h2>{Tuerca.talla}</h2>
            <h3>{Tuerca.id}</h3>
            <img src={Tuerca.imagenUrl} className="img" />
            <div className="controles">
              <Link to={`/Stock/${Tuerca.id}`} className="btn">
                Ver Mas
              </Link>
            </div>
          </div>
        ))}
      </div>
      <div>
        <Link to={"/"} className="volver">
          Volver
        </Link>
      </div>
    </div>
  );
}
export default TuercasMilimetricas;
