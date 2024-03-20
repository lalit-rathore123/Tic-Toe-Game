
import { useState } from 'react';
import './App.css';
import Board from './Components/bord/Board';
import Scorebord from './Components/ScoreBord/Scorebord';


function App() {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [XisPlaying, setXisPlaying] = useState(true)
  const [xScore, setXScore] = useState(0);
  const [oScore, setOScore] = useState(0);
  const [gameOver, setGameOver] = useState(false);
  const [tie, setTie] = useState(0);


  const WIN_CONDITIONS = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  const handleBoxClick = (BoxId) => {
    const updatedBoard = board.map((value, idx) => {
      if (idx === BoxId) {
        return XisPlaying === true ? "X" : "O";
      }
      else {
        return value;
      }
    });

    setBoard(updatedBoard);
    setXisPlaying(!XisPlaying)
    const winner = CheakWinner(updatedBoard)

    if (winner) {
      if (winner === "X") {
        setXScore(xScore + 1);
        setGameOver(true);
      } else {
        setOScore(oScore + 1);
       setGameOver(true);
      }
    }

    let filled=true;

    updatedBoard.map((item)=>{
      if(item === null){
        filled = false;
      }
    });

    if(filled && winner !== "X" && winner !== "O"){
      filled =true;
      setTie(tie +1);
      alert("Your game Is Tie Tie Fish")
    }
  };

  const CheakWinner = (updatedBoard) => {
    for (let i = 0; i < WIN_CONDITIONS.length; i++) {
      const [x, y, z] = WIN_CONDITIONS[i];
      if (
        updatedBoard[x]&&
        updatedBoard[x] === updatedBoard[y] && 
          updatedBoard[y] === updatedBoard[z])
      {console.log("winner")
      return updatedBoard[x];
      }
    }
  }
  const resetGame = () => {
    setGameOver(false);
    setBoard(Array(9).fill(null));
  };
  const RestartGame = () => {
    setGameOver(false);
    setBoard(Array(9).fill(null));
    setOScore(0);
    setXScore(0);
    setTie(0);
  };



  return (

    <div className='App'>
    <Scorebord xScore={xScore} oScore={oScore} tie={tie} XisPlaying={XisPlaying}/>
      <Board board={board} 
      onClick={gameOver===true? resetGame : handleBoxClick}
       />
       <button className='btn' onClick={resetGame}>Play Again</button>
       <button className='btn1' onClick={RestartGame}>Restart Game</button>
    </div>

  )
}

export default App;
