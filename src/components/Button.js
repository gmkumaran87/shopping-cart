import React from "react";

const Button = (props) => {
  let btnClass = "btn ";
  btnClass += props.classes;

  return (
    <button className={btnClass} onClick={props.handleClick}>
      {props.title}
    </button>
  );
};

export default Button;
