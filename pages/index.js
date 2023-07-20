// index.js
import { useState } from 'react'
function MyButton({ count, onClick }) {
  return <button onClick={onClick}>poked {count} times</button>
}
export default function HomePage() {
  const [count, setCount] = useState(0)
  function handleClick() {
    setCount(count + 1)
  }

  return (
    <>
      <h1>Hei</h1>
      <MyButton count={count} onClick={handleClick} />
      <MyButton count={count} onClick={handleClick} />
    </>
  )
}
