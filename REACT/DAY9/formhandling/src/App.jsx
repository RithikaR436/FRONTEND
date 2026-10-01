
// import { useState } from "react"
// const App = () => {
//   const[username,setUserName] = useState("")
//   const[userage,setUserAge] = useState("")
//   const[showdata,setshowData] = useState([])
      
//     const handleprocess=(e)=>{
//       setUserName(e.target.value)
//     }
//     const handlemanage =(e)=>{
//            setUserAge(e.target.value)
 
//     }
//     const handleClick=()=>{
//       const obj ={id:Date.now(),name:username,age:userage} 
//       const arr=[...showdata]
      
//     }

//   return (
//     <>
//      <div>
//       <input type="text" onChange={handleprocess} placeholder="Entet the Name" />
//       <input type="number" onChange={handlemanage} placeholder="Entet the Age" />
//       <button onClick="{handleClick}">Click to login</button>
     
//      </div>

   
//     </>
//       )
// }

// export default App




// 1. Task 1 – Name Input

// import { useState } from "react";

// const App = () => {
//   const [name, setName] = useState("");

//   const handleChange = (e) => {
//     setName(e.target.value);
//   };

//   return (
//     <>
//       <input
//         type="text"
//         onChange={handleChange}
//         value={name}
//         placeholder="Enter the Name"
//       />
//       <p>{name}</p>
//     </>
//   );
// };

// export default App;


//  2.Task 1 – Name Input
// import { useState } from "react";

// const App = () => {
//   const [email, setEmail] = useState("");
//   const [submittedEmail, setSubmittedEmail] = useState("");

//   const handleChange = (e) => {
//     setEmail(e.target.value);
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     setSubmittedEmail(email);
//   };

//   return (
//     <>
//       <form onSubmit={handleSubmit}>
//         <input
//           type="email"
//           onChange={handleChange}
//           value={email}
//           placeholder="Enter the Email"
//         />
//         <button type="submit">Submit</button>
//       </form>
//       <p>{submittedEmail}</p>
//     </>
//   );
// };

// export default App;


// 3.Task 3 – Age Validation

import { useState } from "react";

const App = () => {
  const [age, setAge] = useState("");
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setAge(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (age === "") {
      setMessage("Age is required");
    } else {
      setMessage(age);
      setAge("");
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="number"
          onChange={handleChange}
          value={age}
          placeholder="Enter the Age"
        />
        <button type="submit">Submit</button>
      </form>
      <p>{message}</p>
    </>
  );
};

export default App;