const App = () => {
   const student ={
    Name:"Rithika",
    Age:20,
    Course:"Javascript",
    City:"Chennai"
   }

  return (
    <>
    
  <div className = " bg-blue-300 p-20  gap-50  ">
    
        <p>{student.Name}</p>
        <p>{student.Age}</p>
        <p>{student.Course}</p>
        <p>{student.City}</p>
      
  </div>
    </>
  )
}

export default App