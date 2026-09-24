
const App = () => {
  const city=["chennai","bangaluru","mumbai","kolkata","bengal"]
  return (
    <>
    <div>
      {city.map((e,i)=>(
         <div key={i}>
          <ul>
            <li>{e}</li>
          </ul>
          
         </div>
         
      ))}
    </div>
    </>
  )
}

export default App