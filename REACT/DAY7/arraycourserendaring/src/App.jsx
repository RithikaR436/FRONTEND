

// const App = () => {
//   const course = ["AI","JS","FS","DS"]
//   return (
//     <>
//     <div className="bg-blue-100  p-20 h-500 flex gap-30 ">
//       <h1>Available Courses</h1>
//       {course.map((e,i)=>(
        
//         <div className="bg-purple-300 h-50 w-100 flex items-center justify-center ">
          
//           <p>{e}</p>
//         </div>
//       ))}
//     </div>
//     </>
//   )
// }

// export default App






// const App = () => {
//   const arr=["React","Javascript","python","css","html"]
//   return (
//     <>
//     <div>
//       {arr.map((e,i)=>(
//           <div key={i}>
//             <p>{i}</p>
//             <p></p>
//           </div>
//       ))}
//     </div>
//     </>
//   )
// }

// export default App


const App = () => {
  const student={Name:"Rithika",Age:"20",Course:"FS",City:"Chennai"

  }
  return (
    <>
    <div>
      <p>{student.Name}</p>
      <p>{student.Age}</p>
      <p>{student.Course}</p>
      <p>{student.City}</p>
    </div>
    </>
  )
}

export default App