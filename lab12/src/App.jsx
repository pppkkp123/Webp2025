import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import AlarmIcon from '@mui/icons-material/Alarm';
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import Mutbutton from './mutbutton';
import Mutbutton2 from './mutbutton2';


function App() {
  const [count, setCount] = useState(0)


  const changeText = (event) => {
    console.log(event.target)
    event.target.innerText = event.target.innerText + " 被點了";
  };



  function App2(){
    return(
      <div className='App'>
        {Mutbutton(10)}
      </div>
    )
  }

  function App3(){
    return(
      <div className='App'>
        {Mutbutton2(3)}
      </div>
    )
  }
  
  return (
    <>
      <h1 onClick={changeText}>Hello CGU</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <App2></App2>
        <App3></App3>
      </div>
    </>
  )
}

export default App

