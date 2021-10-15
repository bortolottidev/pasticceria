import React, { Fragment } from "react";

const List = ({ elements }) =>
  elements && elements.map(({ id, nome, qta, unitaMisura }) => (
    <li key={id}>
      {qta}{unitaMisura} {nome}
    </li>
  ));

const Ingredienti = ({ details }) => (
  <Fragment>
    <h1>Ingredienti</h1>
    {/* <h5>{dolceDetails.nome}</h5> */}
    <ul>
      <List elements={details.ingredienti} />
    </ul>
    {!details.ingredienti.length ? (
      <h3>Lista degli ingredienti segreta!</h3>
    ) : null}
  </Fragment>
);

export default Ingredienti;
