import { useEffect, useMemo, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import useCustomMemo from "./useCustomMemo";
import "./App.css";
import useCustomEffect from "./useCustomEffect";

function App() {
  const [count, setCount] = useState(0);
  // const [counter2, setCounter2] = useState(100);
  // const handleIncrement = () => {
  //   console.log("squared");
  //   return count * count;
  // };
  // const memoized= useCustomMemo(handleIncrement, [count]);

  const handleChange=()=>{
    setCount((prev)=>prev+1);
  }

  useCustomEffect(()=>{
console.log("count changed")
  },[])
  return (
    <>
      <div>
        <h2>Count: {count}</h2>
        <button onClick={handleChange}>increment</button>
       
      </div>
    </>
  );
}

export default App;
