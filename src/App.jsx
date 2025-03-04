{/* 
function MyButton() {
  return (
    <button>
      I'm a button
    </button>
  );
}

export default function MyApp() {
  return (
    <div>
      <h1>Welcome to my app</h1>
      <MyButton />
    </div>
  );
}
*/}

{/*
function AboutPage() {
  return (
    <>
      <h1>About</h1>
      <p>Hello there.<br />How do you do?</p>
    </>
  );
}
*/}

{/*
<img className="avatar" />

.avatar {
  border-radius: 50%;
}

return (
  <h1>
    {user.name}
  </h1>
);

return (
  <img
    className="avatar"
    src={user.imageUrl}
  />
);

*/}

{/*
const user = {
  name: 'Hedy Lamarr',
  imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/Hedy_Lamarr_Publicity_Photo_for_The_Heavenly_Body_1944.jpg/440px-Hedy_Lamarr_Publicity_Photo_for_The_Heavenly_Body_1944.jpg',
  imageSize: 90,
};

export default function Profile() {
  return (
    <>
      <h1>{user.name}</h1>
      <img
        className="avatar"
        src={user.imageUrl}
        alt={'Photo of ' + user.name}
        style={{
          width: user.imageSize,
          height: user.imageSize
        }}
      />
    </>
  );
}
*/}

{/*
let content;
if (isLoggedIn) {
  content = <AdminPanel />;
} else {
  content = <LoginForm/>;
}
return (
  <div>
    {content}
  </div>
);

<div>
  {isLoggedIn ? (
    <AdminPanel />
  ) : (
    <LoginForm />
  )}
</div>

<div>
  {isLoggedIn && <AdminPanel/>}
</div>

const products = [
  { title: 'Cabbage', id: 1 },
  { title: 'Garlic', id: 2 },
  { title: 'Apple', id: 3 }'
];

const listItems = products.map(product =>
  <li key={product.id}>
  {product.title}
  </li>
  );

  return (
    <ul>{listItems}</ul>
  );
*/}

{/*
  const products = [
    { title: 'Cabbage', isFruit: false, id: 1 },
    { title: 'Garlic', isFruit: false, id: 2 },
    { title: 'Apple', isFruit: true, id: 3 },
  ];

  export default function ShoppingList() {
    const listItems = products.map(product =>
      <li
      key={product.id}
      style={{
        color: product.isFruit ? 'magenta' : 'darkgreen'
      }}
      >
        {product.title}
      </li>
      );

      return (
        <ul>{listItems}</ul>
      );
  }
*/}

{/*
function MyButton() {
  function handleClick() {
    alert('You clicked me!')
  }

  return (
    <button onClick={handleClick}>
    Click me
    </button>
  );
}

import { useState } from 'react';

function MyButton() {
  const [count, setCount] = useState(0);
}

function MyButton() {
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count + 1);
  }
  return (
    <button onClick={handClick}>
    Clicked {count} times
    </button>
  );
}
*/}

{/*
import { useState } from 'react';

export default function MyApp() {
  return (
    <div>
      <h1>Counters that update separately</h1>
      <MyButton />
      <MyButton />
    </div>
  );
}

function MyButton() {
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count + 1);
  }

  return (
    <button onClick={handleClick}>
      Clicked {count} times
    </button>
  );
}
*/}

{/*
export default function MyApp() {
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count + 1);
  }

  return (
    <div>
      <h1>Counters that update separately</h1>
      <MyButton />
      <MyButton />
    </div>
  );
}

function MyButton({ count, onClick }) {
  return (
    <button onClick={onClick}>
      Clicked {count} times
    </button>
  );
}
*/}
import { useState } from 'react';

function Square({ value, onSquareClick }) {
    return (
        <button className="square" onClick={onSquareClick}>
            {value}
        </button>
    );
}

export default function Board() {
    const [xIsNext, setXIsNext] = useState(true);
    const [squares, setSquares] = useState(Array(9).fill(null));
    const [gameOver, setGameOver] = useState(false);

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

    function checkGameOver(squares) {
        for (let i = 0; i < squares.length; i++) {
            if (squares[i] === null) {
                return false;
            }
        }
        return true;
    }

    function handleClick(i) {
        if (squares[i] || calculateWinner(squares) || gameOver) {
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
        if (checkGameOver(nextSquares)) {
            setGameOver(true);
        }
    }

    function handleReset() {
        setSquares(Array(9).fill(null));
        setXIsNext(true);
        setGameOver(false);
    }

    const winner = calculateWinner(squares);
    let status;
    if (winner) {
        status = 'Winner: ' + winner;
    } else if (gameOver) {
        status = "It's a draw :(";
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
}{/*
import { useState } from 'react';

export default function MyApp() {
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count + 1);
  }

  return (
    <div>
      <h1>Counters that update together</h1>
      <MyButton count={count} onClick={handleClick} />
      <MyButton count={count} onClick={handleClick} />
    </div>
  );
}

function MyButton({ count, onClick }) {
  return (
    <button onClick={onClick}>
      Clicked {count} times
    </button>
  );
}
*/}

{/*
// This code is a simple implementation of a 3x3 tic-tac-toe board  
import { useState } from 'react';

function Square({ value, onSquareClick }) {
  return (
    <button className="square" onClick={onSquareClick}>
      {value}
    </button>
  );
}

function Board({ xIsNext, squares, onPlay }) {
  function handleClick(i) {
    if (calculateWinner(squares) || squares[i]) {
      return;
    }
    const nextSquares = squares.slice();
    if (xIsNext) {
      nextSquares[i] = 'X';
    } else {
      nextSquares[i] = 'O';
    }
    onPlay(nextSquares);
  }

  const winner = calculateWinner(squares);
  let status;
  if (winner) {
    status = 'Winner: ' + winner;
  } else {
    status = 'Next Player: ' + (xIsNext ? 'X' : 'O');
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
    </>
  );
}

export default function Game() {
  const [history, setHistory] = useState([Array(9).fill(null)]);
  const [currentMove, setCurrentMove] = useState(0);
  const xIsNext = currentMove % 2 === 0;
  const currentSquares = history[currentMove];

  function handlePlay(nextSquares) {
    const nextHistory = [...history.slice(0, currentMove + 1), nextSquares];
    setHistory(nextHistory);
    setCurrentMove(nextHistory.length - 1);
  }

  function jumpTo(nextMove) {
    setCurrentMove(nextMove);
  }

  const moves = history.map((squares, move) => {
    let description;
    if (move > 0) {
      description = 'Go to move #' + move;
    } else {
      description = 'Go to game start';
    }
    return (
      <li key={move}>
        <button onClick={() => jumpTo(move)}>{description}</button>
      </li>
    );
  });

  return (
    <div className="game">
      <div className="game-board">
        <Board xIsNext={xIsNext} squares={currentSquares} onPlay={handlePlay} />
      </div>
      <div className="game-info">
        <ol>{moves}</ol>
      </div>
    </div>
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
*/}


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
*/}
{/*
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
        nextSquares[i] = 'X';
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

export default function Board() {43
    const [xIsNext, setXIsNext] = useState(true);
    const [squares, setSquares] = useState(Array(9).fill(null));
    
    function gameover(squares) {
      for (let i=0; i < squares.length; i++){
        if (squares[i] == null) {
        return false;
        }
      }
      return true
    }

    function handleClick(i) {
        if (squares[i] || calculateWinner(squares) || gameover(squares)) {
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

    function handleReset() {
      setSquares(Array(9).fill(null));
      setXIsNext(true);
    }

    const winner = calculateWinner(squares);
    let status;
    if (winner) {
      status = 'winner: ' + winner;
    } 
    else if (gameover(squares)) {
      status = 'It\'s a draw :('
    } 
    else {
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