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