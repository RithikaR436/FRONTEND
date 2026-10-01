import {useState} from "react"

// const App = () => {
//   const[datas,setDatas]=useState(0)
//   const increse =()=>{
//     setDatas(datas+1)
//   }
//   const decrese =()=>{
//     setDatas(datas-1)
//   } 
//   const reset =()=>{
//     setDatas(0)
//   } 
//   return (
//     <>
//     <h2>{datas}</h2>
//     <button onClick ={increse}>handleincreament</button>
//     <button onClick ={decrese}>handledecrement</button>
//     <button onClick ={reset}>handlereset</button>
     
//     </>
//   )
// }

// export default App





const App = () => {

  const [title,setTitle] = useState("This is react")
 
  const [isActive,setIsActive] = useState(true)

  const changetext = ()=>{

      setTitle("This is Node")

  }

  const SHowText = ()=>{

    setIsActive(!isActive)

  }

  return (
    <>

    <h3>{title}</h3>
    <button onClick={changetext}>Click To change</button>
    
      
    {isActive&&<p>This is React</p>}  

    <button onClick={SHowText}>{isActive?"Show":"Hide"}</button>
    </>
  )
}

export default App