import React from "react";
import { Link } from "react-router-dom";

import Tuercas from "../Inventario/Tuercas/Tuerca.json";
import { useParams } from "react-router-dom";
import "./Stock.css";

function StockTuercas() {
    const { tuercasId } = useParams();
    const tuerca = Tuercas.find((tuerca) => tuerca.id === Number(tuercasId));
    return (
        <div className="container-stock">
        <div className="descripcion">
          este tipo de tornillo viene de diversos colores, en este caso solo
          queda en stock este color: {tuerca.color}
        </div>
        <Link to={"/tuercas"} className="btn-stock">ir a tuercas</Link>
      </div>
    
    );
}
export default StockTuercas;