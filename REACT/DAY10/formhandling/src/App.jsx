import { useState } from "react"

const App = () => {
  
  const [student, setStudent] = useState({
    name: "",
    email: "",
    age: "",
    course: "",
    city: ""
  })

  
  const handleChange = (e) => {
    setStudent({ ...student, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault() 
    console.log(student)
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="name"
        placeholder="Enter name"
        value={student.name}
        onChange={handleChange}
      />
      <input
        type="email"
        name="email"
        placeholder="Enter email"
        value={student.email}
        onChange={handleChange}
      />
      <input
        type="number"
        name="age"
        placeholder="Enter age"
        value={student.age}
        onChange={handleChange}
      />
      <input
        type="text"
        name="course"
        placeholder="Enter course"
        value={student.course}
        onChange={handleChange}
      />
      <input
        type="text"
        name="city"
        placeholder="Enter city"
        value={student.city}
        onChange={handleChange}
      />
      <button type="submit">Register</button>
    </form>
  )
}

export default App