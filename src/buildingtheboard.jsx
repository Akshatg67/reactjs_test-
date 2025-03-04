{/*
export default function Square() {
    return (
        <>
        <div className="board-row">
            <button classNane="square">1</button>
            <button classNane="square">2</button>
            <button classNane="square">3</button>
        </div>
        <div className="board-row">
            <button classNane="square">4</button>
            <button classNane="square">5</button>
            <button classNane="square">6</button>
        </div>
        <div className="board-row">
            <button classNane="square">7</button>
            <button classNane="square">8</button>
            <button classNane="square">9</button>
        </div>
        </>
    );
}   

export default function Board() {
    return (
        <>
        <div className="board-row">
            <button classNane="square">1</button>
            <button classNane="square">2</button>
            <button classNane="square">3</button>
        </div>
        <div className="board-row">
            <button classNane="square">4</button>
            <button classNane="square">5</button>
            <button classNane="square">6</button>
        </div>
        <div className="board-row">
            <button classNane="square">7</button>
            <button classNane="square">8</button>
            <button classNane="square">9</button>
        </div>
        </>
    );
}
*/} 
{/*
import { useState } from 'react';

function Square() {
    const [value, setValue] = useState(null);

    function handleClicked() {
        setValue('X');
    }

    return (
        <button
        className="square"
        onClick={handleClicked}
        >
            {value}
        </button>
    );
}

export default function Board() {
    return (
        <>
        <div className="board-row">
            <Square />
            <Square />
            <Square />
        </div>
        <div className="board-row">
            <Square />
            <Square />
            <Square />
        </div>
        <div className="board-row">
          <Square />
          <Square />
          <Square />
        </div>
        </>
    );
}
*/}
{/*
import { useState } from 'react';

function Square({ value }) {
    return <button className="square">{value}</button>;
}

export default function Board() {
    const [squares,setSquares] = useState(Array(9).fill(null));
    return (
        <>
        <div className="board-row">
            <Square value={squares[0]} />
            <Square value={squares[1]} />
            <Square value={squares[2]} />
        </div>
        <div className="board-row">
            <Square value={squares[3]} />
            <Square value={squares[4]} />
            <Square value={squares[5]} />
        </div>
        <div className="board-row">
            <Square value={squares[6]} />
            <Square value={squares[7]} />
            <Square value={squares[8]} />
        </div>
        </>
    );
}
*/}
{/*
import { useState } from 'react';

function Square({ value, onSquareClick }) {
    return (
        <button className="square" onClick={onSquareClick}>
            {value}
        </button>
    );
}

export default function Board() {
    const [squares, setSquares] = useState(Array(9).fill(null));

    function handleClick(i) {
        const nextSquares = squares.slice();
        nextSquares[i] 'X';
        setSquares(nextSquares);
    }

    return (
        <>
        <div className="board-row">
            <Square value={squares[0]} onSquareClick={() => handleClick(0)} />
            <Square value={squares[1]} onSquareClick={() => handleClick(1)} />
            <Square value={squares[2]} onSquareClick={() => handleClick(2)} />
        </div>
        <div className="board-row">
            <Square value={squares[3]} onSquareClick={() => handleClick(3)} />
            <Square value={squares[4]} onSquareClick={() => handleClick(4)} />
            <Square value={squares[5]} onSquareClick={() => handleClick(5)} />
        </div>
        <div className="board-row">
            <Square value={squares[6]} onSquareClick={() => handleClick(6)} />
            <Square value={squares[7]} onSquareClick={() => handleClick(7)} />
            <Square value={squares[8]} onSquareClick={() => handleClick(8)} />
        </div>
        </>
    );
}
*/}

import { useState } from 'react';

function Square({value, onSquareClick}) {
    return (
        <button className="square" onClick={onSquareClick}>
            {value}
        </button>
    );
}

export default function Board() {
    const [xIsNext, setXIsNext] = useState(true);
    const [squares, setSquares] = useState(Array(9).fill(null));

    function handClick(i) {
        if (squares[i]) {
            return;
        }
        const nextSquares = squares.slice();
        if (xIsNext) {
            nextSquares[i] = 'X';
            } else {
                nextSquares[i] = 'O';
        }
        setSquares(nextSquares);
        setXIsNext(!xIsNext);
    }
    return (
        <>
        <div className="status">{status}</div>
        <div className="board-row">
            <Square value={squares[0]} onSquareClick={() => handleClick(0)} />
            <Square value={squares[1]} onSquareClick={() => handleClick(1)} />
            <Square value={squares[2]} onSquareClick={() => handleClick(2)} />
        </div>
        <div className="board-row">
            <Square value={squares[3]} onSquareClick={() => handleClick(3)} />
            <Square value={squares[4]} onSquareClick={() => handleClick(4)} />
            <Square value={squares[5]} onSquareClick={() => handleClick(5)} />
        </div>
        <div className="board-row">
            <Square value={squares[6]} onSquareClick={() => handleClick(6)} />
            <Square value={squares[7]} onSquareClick={() => handleClick(7)} />
            <Square value={squares[8]} onSquareClick={() => handleClick(8)} />
        </div>
        <button className="reset-button" onClick={handleReset}>
        Reset Game
        </button>
        </>
    );
}

import { useState } from 'react';

function Square({value, onSquareClick}) {
    return (
        <button className="square" onClick={onSquareClick}>
            {value}
        </button>
    );
}

export default function Board() {
    const [xIsNext, setXIsNext] = useState(true);
    const [squares, setSquares] = useState(Array(9).fill(null));

    function handleClick(i) {
        if (squares[i] || calculateWinner(squares)) {
            return;
        }
        const nextSquares = squares.slice();
        if (xIsNext) {
            nextSquares[i] = 'X';
            } else {
                nextSquares[i] = 'O';
        }
        setSquares(nextSquares);
        setXIsNext(!xIsNext);
    }

    const winner = calculateWinner(squares);
    let status;
    if (winner) {
      status = 'winner: ' + winner;
    } else {
      status = 'Next player: ' + (xIsNext ? 'X' : 'O');
    }

    return (
        <>
        <div className="status">{status}</div>
        <div className="board-row">
            <Square value={squares[0]} onSquareClick={() => handleClick(0)} />
            <Square value={squares[1]} onSquareClick={() => handleClick(1)} />
            <Square value={squares[2]} onSquareClick={() => handleClick(2)} />
        </div>
        <div className="board-row">
            <Square value={squares[3]} onSquareClick={() => handleClick(3)} />
            <Square value={squares[4]} onSquareClick={() => handleClick(4)} />
            <Square value={squares[5]} onSquareClick={() => handleClick(5)} />
        </div>
        <div className="board-row">
            <Square value={squares[6]} onSquareClick={() => handleClick(6)} />
            <Square value={squares[7]} onSquareClick={() => handleClick(7)} />
            <Square value={squares[8]} onSquareClick={() => handleClick(8)} />
        </div>
        <button className="reset-button" onClick={handleReset}>
        Reset Game
        </button>
        </>
    );
}

function calculateWinner(squares) {
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
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
} 