import React from "react";

const dolceDivStyle = {
  height: 300,
  width: 400,
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-evenly",
  backgroundColor: "#61dafb",
  borderRadius: 8,
  border: "2px solid black",
};

const upperFirst = (str) =>
  str && str.length >= 1 ? str[0].toUpperCase() + str.slice(1) : str;

const Dolce = ({ id, nome, prezzo, createdAt }, onButtonClicked = () => {}) => (
  <div style={dolceDivStyle} key={id}>
    <div>
      <h3>{upperFirst(nome)}</h3>
      Prezzo: {prezzo}€
    </div>
    <div>
      <button onClick={() => onButtonClicked(id)}>Dettagli</button>
    </div>
  </div>
);

export default Dolce;
