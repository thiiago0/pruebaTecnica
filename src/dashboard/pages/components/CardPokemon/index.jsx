import React from "react";

export const CardPokemon = () => {
  return (
    <div className="pokemon-card">
      <div className="card-top">
        <img className="img-card" src="" alt="" />
        <button className="btn-weigth">peso</button>
      </div>
      <div className="card-botton">
        <h2 className="card-name">nombre del pokemon</h2>
        <ul className="card-moves">
          <li>moves</li>
        </ul>
      </div>
    </div>
  );
};
