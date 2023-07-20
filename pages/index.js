// index.js
import { useState } from 'react'
function MyButton({ count }) {
  return <button>poked {count} times</button>
}
export default function HomePage() {
  const [count, setCount] = useState(0)
  function handleClick() {
    setCount(count + 1)
  }
  const products = [
    { title: 'Cabbage', id: 1, isFruit: false },
    { title: 'Garlic', id: 2, isFruit: false },
    { title: 'Apple', id: 3, isFruit: true },
  ]
  const listItems = products.map((product) => (
    <li
      key={product.id}
      style={{
        color: product.isFruit ? 'blue' : 'red',
      }}
    >
      {product.title}
    </li>
  ))
  return (
    <>
      <h1>Hei</h1>
      <ul>{listItems}</ul>
      <p>En knapp</p>
      <MyButton count={count} onClick={handleClick} />
      <p>Enda en knapp</p>
      <MyButton count={count} onClick={handleClick} />
    </>
  )
}
