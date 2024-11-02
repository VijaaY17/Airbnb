import axios from "axios";
import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserContext } from "../UserContext";

const LoginPage = () =>{
  const[email,setEmail] = useState('')
  const[password,setPassword] = useState('')
  const {setUser} = useContext(UserContext)
  const navigate = useNavigate()
  const login = async(e) =>{
    e.preventDefault()
    const response = await axios.post("http://localhost:3001/login",{
      email,
      password
    },{
      withCredentials:true
    })
    console.log(response)
    // console.log(response.data.user)
    // setUser(response.data.user)
    // const { user } = response.data;
    // console.log('User:', user);
    setUser(response.data.user)
    navigate('/')
    console.log(response.data.user)

  }

 

  return(
    <div className="mt-4   min-h-screen flex items-center justify-center">
      <div className="mb-64">
      <h1 className="text-center">Login</h1>
      <form onSubmit={login}className="mt-4 max-w-xl mx-auto ">
        <input className="w-full border rounded-2xl p-2 my-2" type="text" placeholder="@gmail.com"
        value={email}
        onChange={(e)=> setEmail(e.target.value)}/>
        <input className="w-full border rounded-2xl p-2 my-1" type="password" placeholder="password"
        value={password}
        onChange={(e)=>setPassword(e.target.value)}/>
        <button className="bg-[#E41D56] w-full mt-2 rounded-2xl p-2 text-white"> Login</button>
        <div className="py-1 ml-2">
          Dont have an account
          <Link to ="/register">Register</Link>
        </div>
  
      </form>
      </div>
    </div>
  )
}

export default LoginPage;



