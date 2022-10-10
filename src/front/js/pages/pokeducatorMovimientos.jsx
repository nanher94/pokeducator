import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext.jsx";
import "../../styles/pokeducatorObjetosStyles.css";

const PokeducatorMovimientos = () => {
  const { store, actions } = useContext(Context);
  const [load, setLoad] = useState("true");

  
  
  
  

  setTimeout(() => {
    setLoad(false);
  }, 1000);

  return (
    <div className="App container align-items-center">
      <div className="row d-flex justify-content-end mt-4">
        {!store.move?.previous ? (
          ""
        ) : (
          <button
            className="btn btn-primary btn-sm mx-3 float-start w-25"
            onClick={() => {
              actions.moveFind(store.move.previous); //guarda paginacion en storage y actualiza segun click para saber la proxima url onclick comprobar que exista
            }}
          >
            Anterior
          </button>
        )}
        <button
          className="btn btn-primary btn-sm mx-3 float-end w-25"
          onClick={() => {
            actions.moveFind(store.move.next);
          }}
        >
          Siguiente
        </button>
      </div>
      <div className="pokegallery">
        {load ? (
          <p>Loading...</p>
        ) : (
          <table>
            <thead>
              <tr>
                <th>Nombre</th>
                <th>Tipo</th>
                <th>Poder</th>
                <th>Precisión</th>
                <th>PP</th>
              </tr>
            </thead>
            <tbody>
              {store.move_data.map((move, i) => (
                <tr data-index={i}>
                  <td>{move.name}</td>
                  <td>{move.type?.name}</td>
                  <td>{move.accuracy}</td>
                  <td>{move.power}</td>
                  <td>{move.pp}</td>
                </tr>
              ))};
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
};
export default PokeducatorMovimientos;
{
  /*type pp accuracy power name*/
}
