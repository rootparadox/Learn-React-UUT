import React from "react";
import pizzaData from "./api";
// Parent component of pizza Com
// Props => properties
export default function Menu() {
  // Map => array => return arr
  const pizzas = pizzaData;
  // const pizzas = [];
  const numPizzas = pizzas.length;
  // console.log(numPizzas);
  return (
    <menu className="menu">
      <h2>Our menu!</h2>

      {/* LIST RENDERING */}
      {numPizzas > 0 ? (
        <React.Fragment key={"dasdasdas"}>
          <p>
            new text,new text,new text,new text,new text,new text,new text,new
            text,new text,new text,
          </p>
          <ul className="pizzas">
            {pizzas.map((pizza) => {
              return <Pizza pizzaObj={pizza} key={pizza.name} />;
            })}
          </ul>
        </React.Fragment>
      ) : (
        <p>We're wotking on menu component. please visit this page later.</p>
      )}

      {/* <Pizza
        name="Focaccia"
        ingredients="Bread with italian olive oil and rosemary"
        photoName="pizzas/focaccia.jpg"
        price="10"
      />
      <Pizza
        name="Pizza Prosciutto"
        ingredients="Tomato, mozarella, ham, aragula, and burrata cheese"
        photoName="pizzas/prosciutto.jpg"
        price="18"
      /> */}
    </menu>
  );
}
// Child component of menu Com
function Pizza({ pizzaObj }) {
  // if (pizzaObj.soldOut) return null;
  return (
    <li className={`pizza ${pizzaObj.soldOut ? "sold-out" : ""}`}>
      <img src={pizzaObj.photoName} alt={pizzaObj.name} />
      <div>
        <h3>{pizzaObj.name}</h3>
        <p>{pizzaObj.ingredients}</p>
        <span>
          {pizzaObj.soldOut ? "Sold Out".toUpperCase() : Number(pizzaObj.price)}
        </span>
      </div>
    </li>
  );
}
