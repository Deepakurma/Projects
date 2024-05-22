import React from 'react';
import ReactDOM from 'react-dom';

const { useState } = React;

const Calculator = () => {
  const [displayValue, setDisplayValue] = useState('');

  const handleButtonClick = (value) => {
    setDisplayValue((prevValue) => prevValue + value);
  };

  const handleEqualClick = () => {
    try {
      setDisplayValue(eval(displayValue).toString());
    } catch (error) {
      setDisplayValue('Error');
    }
  };

  const handleClearClick = () => {
    setDisplayValue('');
  };

  return (
    <div className="calculator">
      <div className="display">{displayValue}</div>
      <div className="buttons">
        <button onClick={() => handleButtonClick('7')}>7</button>
        <button onClick={() => handleButtonClick('8')}>8</button>
        <button onClick={() => handleButtonClick('9')}>9</button>
        <button className='equal' onClick={() => handleButtonClick('/')}>/</button>
        <button onClick={() => handleButtonClick('4')}>4</button>
        <button onClick={() => handleButtonClick('5')}>5</button>
        <button onClick={() => handleButtonClick('6')}>6</button>
        <button className='equal' onClick={() => handleButtonClick('*')}>*</button>
        <button onClick={() => handleButtonClick('1')}>1</button>
        <button onClick={() => handleButtonClick('2')}>2</button>
        <button onClick={() => handleButtonClick('3')}>3</button>
        <button className='equal' onClick={() => handleButtonClick('-')}>-</button>
        <button onClick={() => handleButtonClick('0')}>0</button>
        <button className="clear" onClick={() => handleClearClick()}>C</button>
        <button className='equal' onClick={() => handleButtonClick('+')}>+</button>
        <button className='equal' onClick={() => handleEqualClick()}>=</button>
        
      </div>
    </div>
  );
};

ReactDOM.render(<Calculator />, document.getElementById('root'));

