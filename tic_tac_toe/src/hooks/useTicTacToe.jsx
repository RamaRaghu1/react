import React, { useState } from "react";

const useTicTacToe = () => {
  const initialBoard = () => Array(9).fill(null);
  const [board, setBoard] = useState(initialBoard());
  const [isNext, setIsNext] = useState(true);
  const WINNING_PATTERNS = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  const getStatusMessage = () => {
    const winner = calculateWinner(board);
    if (winner) return `Player ${winner} wins!`;
    if (!board.includes(null)) return "It's a Draw";
    return `Player ${isNext ? "X" : "O"} turn`;
  };
  const calculateWinner = (currBoard) => {
    for (let i = 0; i < WINNING_PATTERNS.length; i++) {
      const [a, b, c] = WINNING_PATTERNS[i];
      if (
        currBoard[a] &&
        currBoard[a] === currBoard[b] &&
        currBoard[a] === currBoard[c]
      ) {
        return currBoard[a];
      }
    }
  };

  const resetGame = () => {
    setBoard(initialBoard());
    setIsNext(true);
  };

  const handleClick = (index) => {
    const winner = calculateWinner(board);
    if (winner || board[index]) return;
    const newBoard = [...board];
    newBoard[index] = isNext ? "X" : "O";
    setBoard(newBoard);
    setIsNext(!isNext);
  };
  return {
    board,
    isNext,
    calculateWinner,
    resetGame,
    handleClick,
    getStatusMessage,
  };
};

export default useTicTacToe;
