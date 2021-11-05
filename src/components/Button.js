import React from "react";

const Button = (props) => {
  console.log(props);

  let btnClass = "btn ";
  btnClass += props.classes;

  return (
    <button
      id={props.id}
      className={btnClass}
      onClick={props.handleClick}
      disabled={props.disable}
    >
      {props.title}
    </button>
  );
};

export default Button;
