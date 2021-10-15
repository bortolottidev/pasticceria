import React from "react";
import tagIcon from "./tag.png";

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

const Discount = ({ discount, prezzoOriginale }) =>
  discount > 0 ? (
    <div
      style={{ justifyContent: "center", alignItems: "start" }}
      className="row"
    >
      <img
        src={tagIcon}
        alt="discount-icon"
        style={{ width: 30, padding: 8 }}
      />
      <span>(-{discount}%)</span>
      <span style={{ textDecoration: "line-through", paddingLeft: 8 }}>
        {prezzoOriginale}€
      </span>
    </div>
  ) : null;

const Dolce = (
  { id, nome, prezzo, prezzoOriginale, discount },
  onButtonClicked = () => {}
) => (
  <div style={dolceDivStyle} key={id}>
    <div>
      <h3>{upperFirst(nome)}</h3>
      <div>Prezzo: {prezzo}€</div>
      <Discount discount={discount} prezzoOriginale={prezzoOriginale}/>
    </div>
    <div>
      <button onClick={() => onButtonClicked(id)}>Dettagli</button>
    </div>
  </div>
);

export default Dolce;
