import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)




  const changeText = (event) => {
    console.log(event.target)
    event.target.innerText = event.target.innerText + " 被點了";
  };
  
  return (
    <>
      <h1 onClick={changeText}>Hello CGU</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
    </>
  )
}

export default App
