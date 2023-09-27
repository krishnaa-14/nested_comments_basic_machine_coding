import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Comments from './Comments'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <div style = {{fontSize : "30px", color : "gray", marginLeft : "5px", padding : "10px"}}>
        Comments
      </div>
      <div>
        <Comments></Comments>
      </div>
    </div>
  )
}

export default App
