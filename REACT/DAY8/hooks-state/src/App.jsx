import {useState} from "react"

const App = () => {
  const[datas,setDatas]=useState(0)
  const increse =()=>{
    setDatas(datas+1)
  }
  const decrese =()=>{
    setDatas(datas-1)
  } 
  const reset =()=>{
    setDatas(0)
  } 
  return (
    <>
    <h2>{datas}</h2>
    <button onClick ={increse}>handleincreament</button>
    <button onClick ={decrese}>handledecrement</button>
    <button onClick ={reset}>handlereset</button>
     
    </>
  )
}

export default App