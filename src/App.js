import "./App.css";
import CartItems from "./components/CartItems";
import Navbar from "./components/Navbar";
import data from "./data";
import { useState } from "react";
import Button from "./components/Button";

let initialCart = [];

function App() {
  initialCart = data.map((el) => {
    return {
      id: el.id,
      title: el.title,
      price: el.price,
      img: el.img,
      amount: el.amount,
      isClicked: false,
      btnValue: "Add to Cart",
    };
  });

  const [cartObj, setCartItems] = useState(initialCart);
  const [itemCount, setItemCount] = useState(0);

  const addToCart = (e) => {
    const btn = e.target;

    // Enabling the buttons
    setCartItems((prevState) => {
      return prevState.map((el) => {
        if (el.id === Number(btn.id)) {
          console.log(el);
          el.isClicked = true;
          el.btnValue = "Remove Cart";
        }
        return el;
      });
    });

    // Incrementing the cart value
    setItemCount((prevState) => prevState + 1);
  };

  const clearCart = (e) => {
    // Setting the Cart count = 0
    setItemCount(0);

    // Enabling the buttons
    setCartItems((prevState) =>
      prevState.map((el) =>
        el.isClicked ? { ...el, isClicked: false, btnValue: "Add to Cart" } : el
      )
    );
  };

  return (
    <div className="App">
      <Navbar count={itemCount} />
      <CartItems items={cartObj} handleClick={addToCart} />
      <div className="btn-container">
        <Button
          id="clear-btn"
          classes="btn-clr"
          handleClick={clearCart}
          disable={false}
          title="Clear the Cart"
        />
      </div>
    </div>
  );
}

export default App;
