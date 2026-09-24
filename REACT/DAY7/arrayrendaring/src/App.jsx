

const App = () => {
  const arr=["React","Javascript","python","css","html"]
  return (
    <>
    <div>
      {arr.map((e,i)=>(
          <div key={i}>
            <p>{i}</p>
            <p></p>
          </div>
      ))}
    </div>
    </>
  )
}

export default App