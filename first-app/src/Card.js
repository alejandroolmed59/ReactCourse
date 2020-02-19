import React from "react";

const Card = props => {
  return (
    <section className="Tarjeta">
      <h1>{props.index}</h1>
      <h2>Mi nombre es {props.name}</h2>
      <p>Estudio {props.career}</p>
      <p>Mi correo es {props.email} </p>
    </section>
  );
};

export {Card}