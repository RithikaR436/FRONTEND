const App = () => {
  const student =[
    {StudentName:"Rithika",Course:"FS",Age:20,Email:"rithika@gmail.com"},
    {StudentName:"Renita",Course:"FS",Age:22,Email:"renita@gmail.com"},
    {StudentName:"Gobika",Course:"DA",Age:21,Email:"gobika@gmail.com"},
    {StudentName:"Sersha",Course:"AI",Age:22,Email:"sershaa@gmail.com"},
    {StudentName:"Sahana",Course:"FS",Age:20,Email:"sahana@gmail.com"},
    {StudentName:"keerthi",Course:"DA",Age:23,Email:"keerthi@gmail.com"},
    {StudentName:"Arun",Course:"FS",Age:25,Email:"arun@gmail.com"},
    {StudentName:"vijay",Course:"DA",Age:20,Email:"vijay@gmail.com"},
    {StudentName:"rajitha",Course:"FS",Age:24,Email:"rajitha@gmail.com"},
    {StudentName:"kavya",Course:"react",Age:26,Email:"kavya@gmail.com"}]

  return (
    <>
    <div  className="bg-blue-100   flex justify-between-center   flex-wrap p-5  gap-10">
        {student.map((e,i)=>(
            <div key={i}  className =" w-100 h-60 p-2 bg-gray-600 rounded-2xl text-white text-center" >
            <h2>{e.StudentName}</h2>
            <p>{e.Course}</p>
            <p>{e.Age}</p>
            <p>{e.Email}</p>
            <button className= "bg-black text-white rounded-2xl p-3 ">Click</button>
            </div>
        ))}
    </div>
    </>
  )
}

export default App