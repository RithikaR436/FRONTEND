import {useState} from "react"

const App = () => {
  const [count,setCount]=usestate("this is the data")
  return (
   <h2>{count}</h2>
   <button onClick={now}>Click Now</button>
  )
}

export default App