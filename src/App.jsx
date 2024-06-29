import React from "react";
import Header from "./components/Header";
import Menu from "./components/Menu";
import PizzasList from "./components/PizzasList";


export default function App() {
  return (
    <div className="container">
      <Header />
      <Menu />
      <PizzasList />
    </div>
  );
}
