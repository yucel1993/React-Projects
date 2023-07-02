import React, { useState } from "react";

// Hexadecimal color generator
const hexaColor = () => {
  let str = "0123456789abcdef";
  let color = "";
  for (let i = 0; i < 6; i++) {
    let index = Math.floor(Math.random() * str.length);
    color += str[index];
  }
  return "#" + color;
};

function App() {
  const myColor = hexaColor();
  const btn = {
    padding: "1rem",
    border: "none",
    borderRadius: "5px",
    fontSize: "1rem",
    backgroundColor: myColor,
    color:"white",
  };
  const backgroundColor = hexaColor();
  const styles = {
    backgroundColor: backgroundColor,
    // !Uppercode enables 2 different color variant  but if you  use currly brackets then it will become static 
    //? backgroundColor: {backgroundColor}

        textAlign: "center",
        color: "white",
  }
  const [bgColor, setBackgroundColor] = useState("#ffffff");

  const handleButtonClick = () => {
    const color = hexaColor();
    setBackgroundColor(color);
    document.body.style.backgroundColor = color;
  };

  return (
    <div
      className="App"
      style={styles}
    >
      <h1>Hello React</h1>
      <button style={btn} onClick={handleButtonClick}>
        Change Background Color
      </button>
    </div>
  );
}

export default App;
