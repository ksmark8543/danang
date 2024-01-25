import React from "react";

const JumboButton = ({ children, backgroundColor, fontColor, onClick }) => {
  return (
    <button
      onClick={onClick}
      style={{ backgroundColor: `${backgroundColor}`, color: `${fontColor}` }}
    >
      {children}
    </button>
  );
};

export default JumboButton;
