import React from "react";
import "../index.css";
import { pizzaData } from "../data";

export default function PizzasList() {
  return (
    <div className="pizzas">
      {pizzaData.map((Pizza) => (
        <PizzaItem pizzaObj={Pizza} key={Pizza.name} />
      ))}
    </div>
  );
}

function PizzaItem({ pizzaObj }) {
  return (
    <li className={`pizza ${pizzaObj.soldOut ? "sold-out" : ""}`}>
      <img src={pizzaObj.photoName} alt="" />
      <div>
        <h3>{pizzaObj.name}</h3>
        <p>{pizzaObj.ingredients}</p>
        <span>{pizzaObj.soldOut ? 'SOLD-OUT' : ''}</span>
      </div>
    </li>
  );
}
