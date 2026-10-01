

const App = () => {
   const product=[
    {Id:204,Name:"Shoe",Price:700,Category:"Nike"},
    {Id:207,Name:"Dress",Price:1000,Category:"Maybel"},
    {Id:208,Name:"Phone",Price:50000,Category:"Samsung"},
    {Id:209,Name:"Laptop",Price:100000,Category:"Acer"}
   ]
  return (
    <>
    <div className ="bg-purple-300 flex h-100 p-20 items-center   gap-20">
      {product.map((e,i)=>(
        <div key={i} className=" bg-gray-400 rounded-2xl p-10 w-100 h-60 text-center">
           <p>{e.Id}</p>
           <p>{e.Name}</p>
           <p>{e.Price}</p>
           <p>{e.Category}</p>
        </div>
      ))}
    </div>
    </>
  )
}

export default App



// const App = () => {
//   const course=["Javascript","React","Html","Css","Bootstrap"]
//   return (
//     <>
//     <div className = "bg-green-100 p-10 flex gap-10 flex-wrap ">
//       { course.map((e,i)=>(
//         <div key ={i} className ="bg-blue-300 text-black h-60 w-100  
//           text-center rounded-2xl flex justify-center items-center
//            " >
//           <p>{e}</p>
          
//         </div>
//       ))}
//     </div>
    
//     </>
//   )
// }

// export default App




// const App = () => {
//    const student ={
//     Name:"Rithika",
//     Age:20,
//     Course:"Javascript",
//     City:"Chennai"
//    }

//   return (
//     <>
    
//   <div className = " bg-blue-300 p-20  gap-50  ">
    
//         <p>{student.Name}</p>
//         <p>{student.Age}</p>
//         <p>{student.Course}</p>
//         <p>{student.City}</p>
      
//   </div>
//     </>
//   )
// }

// export default App



