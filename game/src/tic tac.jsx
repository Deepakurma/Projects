import React, { useState } from "react";

const TicTacToe = () => {
  const initialBoard = Array(9).fill(null);
  const [board, setBoard] = useState(initialBoard);
  const [currentPlayer, setCurrentPlayer] = useState("X");
  const [winner, setWinner] = useState(null);

  const checkWinner = () => {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (const line of lines) {
      const [a, b, c] = line;
      if (board[a] && board[a] === board[b] && board[a] === board[c]) {
        setWinner(board[a]);
        return;
      }else if(board.includes(null) === false) {
        setWinner("T"); // Tie
      }
    }
  };

  const handleClick = (index) => {
    if (winner || board[index]) {
      return;
    }

    const newBoard = [...board];
    newBoard[index] = currentPlayer;
    setBoard(newBoard);

    setCurrentPlayer(currentPlayer === "X" ? "O" : "X");
    checkWinner();
  };

  const renderButtons = () => {
    return board.map((value, index) => (
      <button
        className="bb"
        key={index}
        onClick={() => handleClick(index)}
        disabled={value !== null}
      >
        {value}
      </button>
    ));
  };

  const renderStatus = () => {
    if (winner) {
      if (winner === "T") {
        return <p>It's a tie!</p>;
      } else {
        return <p>{winner} is the winner!</p>;
      }
    } else {
      return <p>Current Player: {currentPlayer}</p>;
    }
  };

  const handleRestart = () => {
    setBoard(initialBoard);
    setCurrentPlayer("X");
    setWinner(null);
  };

  return (
    <div className="tic-tac-toe">
      <div className="status">{renderStatus()}</div>
      <div className="board">{renderButtons()}</div>
      <button className="check" onClick={handleRestart}>
        <i class="fa-solid fa-rotate-right"></i>
      </button>
    </div>
  );
};

export default TicTacToe;
