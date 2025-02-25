import { useState } from "react";
import "./Calculator.css";

const Calculator = () => {
  const [input, setInput] = useState("");
  const [result, setResult] = useState("");

  const handleClick = (value) => {
    setInput((prev) => prev + value);
  };

  const clearInput = () => {
    setInput("");
    setResult("");
  };

  const calculateResult = () => {
    try {
      if (input.trim() === "") {
        setResult("Error");
      } else {
        const evalResult = eval(input);
        setResult(evalResult.toString());
      }
    } catch (error) {
      setResult("Error");
    }
  };

  return (
    <div className="calculator">
      <h1>React Calculator</h1>
      <input type="text" value={input} readOnly />
      <div className="result">{result}</div>
      <div className="keypad">
        {["7", "8", "9", "+"].map((item) => (
          <button onClick={() => handleClick(item)} key={item}>{item}</button>
        ))}
        {["4", "5", "6", "-"].map((item) => (
          <button onClick={() => handleClick(item)} key={item}>{item}</button>
        ))}
        {["1", "2", "3", "*"].map((item) => (
          <button onClick={() => handleClick(item)} key={item}>{item}</button>
        ))}
        <button onClick={clearInput}>C</button>
        <button onClick={() => handleClick("0")}>0</button>
        <button onClick={calculateResult}>=</button>
        <button onClick={() => handleClick("/")}>/</button>
      </div>
    </div>
  );
};

export default Calculator;
