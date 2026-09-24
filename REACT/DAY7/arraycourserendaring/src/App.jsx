

const App = () => {
  const course = ["AI","JS","FS","DS"]
  return (
    <>
    <div className="bg-blue-100  p-20 h-500 flex gap-30 ">
      <h1>Available Courses</h1>
      {course.map((e,i)=>(
        
        <div className="bg-purple-300 h-50 w-100 flex items-center justify-center ">
          
          <p>{e}</p>
        </div>
      ))}
    </div>
    </>
  )
}

export default App