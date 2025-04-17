import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


function App() {
  const [disabled, setDisabled] = useState(false);
  const [gridSize, setGridSize] = useState(4);
  const [cards, setCards] = useState([]);
  const [flipped, setFlipped] = useState([]);
  const [solved, setSolved] = useState([]);
  const [won, setWon] = useState(false);

  const handleGridSizeChange = (e) => {
    const size = parseInt(e.target.value);
    // if ((size * size) % 2 !== 0) {
    //   alert("Grid size must result in an even number of cards.");
    //   return;
    // }
    if (size >= 2 && size <= 10) {
      setGridSize(size);
    }

  }
  console.log(cards)
  const initializeGame = () => {
    const totalCards = gridSize * gridSize;
    const pairCount = Math.floor(totalCards / 2);
    const number = [...Array(pairCount).keys()].map((n) => n + 1);
    const shuffledCards = [...number, ...number]
      .sort(() => Math.random() - 0.5)
      .slice(0, totalCards)
      .map((num, index) => ({ id: index, num }))

    setCards(shuffledCards);

    setFlipped([]);
    setSolved([]);
    setWon(false);
  }

  const checkMatch = (secondId) => {
    const [firstId] = flipped;
    if (cards[firstId].num === cards[secondId].num) {
      setSolved([...solved, firstId, secondId])
     setFlipped([])
      setDisabled(false)
      
    } else {
      setTimeout(() => {
        setFlipped([])
        setDisabled(false)
      }, 1000)
    }
  }
  const handleClick = (id) => {
    console.log("clicked")
    if (disabled || won) return;

    if (flipped.length === 0) {
      setFlipped([id]);
      return
    }
    if (flipped.length === 1) {
      setDisabled(true)
      if (id !== flipped[0]) {
        setFlipped([...flipped, id])
        // check match logic
        checkMatch(id);
      } else {
        setFlipped([]);
        setDisabled(false);
      }
    }
  }
  console.log(cards)
  const isFlipped = (id) => flipped.includes(id) || solved.includes(id);
  const isSolved = (id) => solved.includes(id)
  useEffect(() => {
    initializeGame();
  }, [gridSize])

  useEffect(() => {
    if (solved.length === cards.length && cards.length > 0) {
      setWon(true);
    }
  }, [solved, cards]);
  return (
    <div className='flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4'>
      <h1 className='text-3xl font-bold mb-6'>Memory game</h1>
      <div>
        <label htmlFor="gridSize" className='mr-2'> Grid Size: (max 10)</label>
        <input type="number" min={2} max={10} id='gridSize' value={gridSize} onChange={(e) => handleGridSizeChange(e)}
          className='border-2 border-gray-300 rounded px-2 py-1'
        />
      </div>

      {/* gameboard */}
      <div className={`grid  gap-2 m-4 `}
        style={{
          gridTemplateColumns: `repeat(${gridSize}, minmax(0, 1fr))`,
          width: `min(100% , ${gridSize * 5.5}rem)`
        }}
      >

        {cards.map((card) => {
          return (
            <div
              key={card.id}
              onClick={() => handleClick(card.id)}
              className={`aspect-square flex items-center justify-center text-xl font-bold rounded-lg cursor-pointer transition-all duration-300 ${isFlipped(card.id) ? isSolved(card.id) ? "bg-green-500 text-white" : "bg-blue-500 text-white" : "bg-gray-300 text-gray-500"}
            
            `}>

              {isFlipped(card?.id) ? card.num : "?"}
            </div>
          );
        })}
      </div>

      {won && <div>You Won!</div>}
      <button onClick={initializeGame}
      className='mt-4 px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600'
      >{won ?"Play again": "Reset"}</button>
    </div>
  )
}

export default App
