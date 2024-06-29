import React from "react";
import Header from "./components/Header";
import Menu from "./components/Menu";
import PizzasList from "./components/PizzasList";
import Footer from "./components/Footer";


export default function App() {
  return (
    <div className="container">
      <Header />
      <Menu />
      <PizzasList />
      <Footer />
    </div>
  );
}
