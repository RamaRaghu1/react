import { useMemo, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import useCustomMemo from "./useCustomMemo";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const [counter2, setCounter2] = useState(100);
  const handleIncrement = () => {
    console.log("squared");
    return count * count;
  };
  const memoized= useCustomMemo(handleIncrement, [count]);
  return (
    <>
      <div>
        <h2>Count: {count}</h2>
        <button onClick={() => setCount (count+ 1)}>increment</button>
        <h2>Squared Count: {memoized}</h2>
        {/* <button onClick={handleIn}>increment</button> */}
        <h2>Count2: {counter2}</h2>
        <button onClick={() => setCounter2(counter2 - 1)}>increment</button>
      </div>
    </>
  );
}

export default App;
