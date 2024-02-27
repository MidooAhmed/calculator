import React, { useState } from 'react';

function Calculator() {
  const [display, setDisplay] = useState('');
  
  const handleClick = (value) => {
    if (value === 'AC') {
      setDisplay('');
    } else if (value === 'C') {
      setDisplay(display.slice(0, -1));
    } else {
      setDisplay(display + value);
    }
  };
  
  const calculate = () => {
    try {
      const result = eval(display);
      setDisplay(result.toString());
    } catch (error) {
      setDisplay('Error');
    }
  };
  
  return (
    <div>
      <input type="text" value={display} readOnly />
      <br />
      <button onClick={() => handleClick('AC')}>AC</button>
      <button onClick={() => handleClick('C')}>C</button>
      <br />
      <button onClick={() => handleClick('7')}>7</button>
      <button onClick={() => handleClick('8')}>8</button>
      <button onClick={() => handleClick('9')}>9</button>
      <button onClick={() => handleClick('+')}>+</button>
      <br />
      <button onClick={() => handleClick('4')}>4</button>
      <button onClick={() => handleClick('5')}>5</button>
      <button onClick={() => handleClick('6')}>6</button>
      <button onClick={() => handleClick('-')}>-</button>
      <br />
      <button onClick={() => handleClick('1')}>1</button>
      <button onClick={() => handleClick('2')}>2</button>
      <button onClick={() => handleClick('3')}>3</button>
      <button onClick={() => handleClick('*')}>*</button> {/* يمكن استبداله بزر لحذف الرقم الأخير */}
      <br />
      <button onClick={() => handleClick('0')}>0</button>
      <button onClick={() => handleClick('.')}>.</button>
      <button onClick={calculate}>=</button>
      <button onClick={() => handleClick('/')}>/</button>
    </div>
  );
}

export default Calculator;