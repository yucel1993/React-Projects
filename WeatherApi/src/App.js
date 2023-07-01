import React, { useState } from "react";
import "./App.css";
import Weather from "./Weather";

function App() {
  const [city,setCity] =useState("");
  const handleInputChange = (e) =>{
    setCity(e.target.value);
  }
  return (
    <div className="App">
      <h1>Weather App</h1>
      <p>Enter the city that you want to learn air condition</p>
      <main>
      <input
      type="text" 
      name="city" 
      value={city}
      onChange={handleInputChange} 
      />
      
      <Weather
      city={city}
      />
      </main> 
      
      
    </div>
  );
}

export default App;
