

const App = () => {
  const course=["Javascript","React","Html","Css","Bootstrap"]
  return (
    <>
    <div className = "bg-green-100 p-10 flex gap-10 flex-wrap ">
      { course.map((e,i)=>(
        <div key ={i} className ="bg-blue-300 text-black h-60 w-100  
          text-center rounded-2xl flex justify-center items-center
           " >
          <p>{e}</p>
          
        </div>
      ))}
    </div>
    
    </>
  )
}

export default App