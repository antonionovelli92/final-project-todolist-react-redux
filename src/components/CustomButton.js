import React from "react";

function CustomButton(props) {
  const { className, text, onClick } = props;

  return (
    <button className={className} onClick={onClick}>
      {text}
    </button>
  );
}

export default CustomButton;
