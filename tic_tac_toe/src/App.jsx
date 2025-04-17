import { useState } from "react";

import "./App.css";
import useTicTacToe from "./hooks/useTicTacToe";

function App() {
  
  const {board, handleClick, resetGame,getStatusMessage, isNext}=useTicTacToe();

  return (
    <>
      <div className="game">
        <div className="status">
         {getStatusMessage()}
          <button onClick={resetGame}>Reset</button>
        </div>
        <div className="board">
          {board.map((b, index) => (
            <button className="cell" key={index} onClick={()=>handleClick(index)} disabled={b!==null}>
              {b}
            </button>
          ))}
        </div>
      </div>
    </>
  );
}

export default App;
