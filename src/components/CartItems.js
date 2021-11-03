import React from "react";
import Button from "./Button";
import "./CartItem.css";

const CartItems = (props) => {
  const { items, handleClick } = props;

  return (
    <div className="cart-items">
      {items.map((el, index) => {
        return (
          <div className="card" key={index}>
            <img src={el.img} alt={el.title} className="cart-img" />
            <div className="cart-desc">
              <h4>{el.title}</h4>
              <p>{el.price}</p>
              <Button
                id={el.id}
                classes="btn-cart"
                handleClick={handleClick}
                disable={el.isClicked}
                title={el.btnValue}
              />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default CartItems;
