import { useState } from "react";

import "./App.css";
const initialBoard=()=>Array(9).fill(null)
function App() {
  
  const [board, setBoard] = useState(initialBoard());

  return (
    <>
      <div className="game">
        <div className="status">
          Player X Turn
          <button>Reset</button>
        </div>
        <div className="board">
          {board.map((_, index) => (
            <div className="cell" key={index}>
              X
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default App;
