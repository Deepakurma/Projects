import React from "react";
import { useState } from "react";
import {VscDebugRestart} from "react-icons/vsc";
import { useRef } from "react";

const Module = () => {
  const [value, setValue] = useState(null);
  const [inputValue, setInputValue] = useState("");
  const [displayValue, setDisplayValue] = useState("");
  const inputref = useRef(null);

  // Function to handle input changes
  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const fahrenheitToCelsius = () => {
    const fahrenheit = parseFloat(inputValue); // Convert input value to a number
    if (!isNaN(fahrenheit)) { // Check if the input is a valid number
      const celsius = (fahrenheit - 32) / 1.8;
      setValue(celsius.toFixed(2)); // Update the state with the result
      const message = `${inputValue}°F is approximately ${celsius.toFixed(2)}°C`;
      setDisplayValue(message);
      
    } else {
      setValue(null); // Input is not a valid number, set the result to null
    }
  };
  
  const CelsiusToFahrenheit = () => {
    const celsius = parseFloat(inputValue); // Convert input value to a number
    if (!isNaN(celsius)) { // Check if the input is a valid number
      const fahrenheit = (celsius * 1.8) + 32;
      setValue(fahrenheit.toFixed(2)); // Update the state with the result
      const message = `${inputValue}°C is approximately ${fahrenheit.toFixed(2)}°F`;
      setDisplayValue(message);
    } else {
      setValue(null); // Input is not a valid number, set the result to null
    }
  };



  const celsiusToKelvin = () => {
    const celsius = parseFloat(inputValue); // Convert input value to a number
    if (!isNaN(celsius)) { // Check if the input is a valid number
      const kelvin = celsius + 273.15; // Conversion formula from Celsius to Kelvin
      setValue(kelvin.toFixed(2)); // Update the state with the result
      const message = `${inputValue}°C is approximately ${kelvin.toFixed(2)} K`;
      setDisplayValue(message);
    } else {
      setValue(null); // Input is not a valid number, set the result to null
    }
  };
  
  const kelvinToCelsius = () => {
    const kelvin = parseFloat(inputValue); // Convert input value to a number
    if (!isNaN(kelvin)) { // Check if the input is a valid number
      const celsius = kelvin - 273.15; // Conversion formula from Kelvin to Celsius
      setValue(celsius.toFixed(2)); // Update the state with the result
      const message = `${inputValue} K is approximately ${celsius.toFixed(2)}°C`;
      setDisplayValue(message);
    } else {
      setValue(null); // Input is not a valid number, set the result to null
    }
  };


  const fahrenheitToKelvin = () => {
    const fahrenheit = parseFloat(inputValue); // Convert input value to a number
    if (!isNaN(fahrenheit)) { // Check if the input is a valid number
      const kelvin = ((fahrenheit - 32) / 1.8) + 273.15;
      setValue(kelvin.toFixed(2)); // Update the state with the result
      const message = `${inputValue}°F is approximately ${kelvin.toFixed(2)}K`;
      setDisplayValue(message);
    } else {
      setValue(null); // Input is not a valid number, set the result to null
    }
  };
  

  const kelvinToFahrenheit = () => {
    const kelvin = parseFloat(inputValue); // Convert input value to a number
    if (!isNaN(kelvin)) { // Check if the input is a valid number
      const fahrenheit = ((kelvin - 273.15) * 1.8) + 32;
      setValue(fahrenheit.toFixed(2)); // Update the state with the result
      const message = `${inputValue}K is approximately ${fahrenheit.toFixed(2)}°F`;
      setDisplayValue(message);
    } else {
      setValue(null); // Input is not a valid number, set the result to null
    }
  };

  function restart() {
      setDisplayValue(null);
      setInputValue('');
      setValue("");
      inputref.current.focus();
 }
  
  
  
  

  return (
    <div className="module">
      <h3>{value !== null && <p>{displayValue}</p>}</h3>

      <input
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        placeholder="Enter temperature"
        ref={inputref}
      />
       <VscDebugRestart color="red" size={30} onClick={restart} className="rbt"/>
      <button className="bt" onClick={fahrenheitToCelsius}>Fahrenheit To Celsius</button>
      <button className="bt" onClick={CelsiusToFahrenheit}>Celsius to Fahrenheit</button>
      <button className="bt" onClick={kelvinToCelsius}>Kelvin To Celsius</button>
      <button className="bt" onClick={celsiusToKelvin}>Celsius To Kelvin</button>
      <button className="bt" onClick={fahrenheitToKelvin}>Fahrenheit To Kelvin</button>
      <button className="bt" onClick={kelvinToFahrenheit}>Kelvin To Fahrenheit</button>

      
    </div>
  );
};

export default Module;
