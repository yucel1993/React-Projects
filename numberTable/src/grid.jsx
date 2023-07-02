import React from "react";
import "./Grid.css";

// Helper function to check if a number is prime
const isPrime = (num) => {
  if (num < 2) return false;
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false;
  }
  return true;
};

// Grid component
const Grid = () => {
  const renderBox = (number) => {
    let color = "";
    if (number % 2 === 0 && number !== 2) {
      color = "green";
    } else if (isPrime(number)) {
      color = "red";
    } else {
      color = "yellow";
    }
    return <div className={`box ${color}`}>{number}</div>;
  };

  const renderRow = (startNumber) => {
    const boxes = [];
    for (let i = startNumber; i < startNumber + 8; i++) {
      boxes.push(renderBox(i));
    }
    return <div className="row">{boxes}</div>;
  };

  return (
    <div className="grid">
      {renderRow(0)}
      {renderRow(8)}
      {renderRow(16)}
      {renderRow(24)}
    </div>
  );
};

export default Grid;
