import axios from "axios"
import { useState } from "react"

const RegisterPage = () =>{
  const[name,setName] = useState('')
  const[email,setEmail] = useState('')
  const[password,setPassword] = useState('')
  const register = async(e) =>{
    e.preventDefault()
    await axios.post("http://localhost:3001/register",{
      name,
      email,
      password
    })
    console.log('registered')
 
  }
  return (
    <div className="text-center  mt-32">
      <h1 className="mb-4">Register</h1>
      <form onSubmit={register} className="max-w-xl mx-auto">
        <input className="w-full border rounded-2xl p-2 my-2" type="text" placeholder="name" 
        value={name}
        onChange={(e)=> setName(e.target.value)}/>
        <input className="w-full border rounded-2xl p-2 my-2" type="text" placeholder="email"
        value={email}
        onChange={(e)=> setEmail(e.target.value)}/>
        <input className="w-full border rounded-2xl p-2 my-2" type="password" placeholder="password"
        value={password}
        onChange={(e)=> setPassword(e.target.value)}/>
        <button className="bg-[#E41D56] w-full mt-2 rounded-2xl p-2 text-white">Register</button>

      </form>

    </div>
  )
}


export default RegisterPage