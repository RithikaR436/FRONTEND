

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