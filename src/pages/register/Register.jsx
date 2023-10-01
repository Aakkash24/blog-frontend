import React, { useState } from 'react'
import classes from "./register.module.css"
import { Link, useNavigate } from 'react-router-dom'
import {request} from "../../utils/fetchApi"
import { useDispatch } from 'react-redux'
import { register } from '../../redux/auth'

const Register = () => {
  const [username,setUsername] = useState("")
  const [email,setEmail] = useState("")
  const [password,setPassword] = useState("")
  const dispatchEvent = useDispatch()
  const navigate = useNavigate()
  const handleRegister = async(e) => {

    e.preventDefault();
    if(username === '' || email === '' || password === '')
    return;
  
    try {
      const options = {"Content-Type":"application/json"}

      const data = await request('/user/register',"POST",options,{username, email, password})
      console.log(data);
      dispatchEvent(register(data));
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className={classes.container}>
      <div className={classes.wrapper}>
        <h2>Register</h2>
        <form onSubmit={handleRegister}>
          <div className="form-group">
          <input type="text" placeholder='Username...' onChange={(e) => setUsername(e.target.value)}/>
          </div>
          <div className="form-group">
            <input type="email" placeholder='Email...' onChange={(e) => setEmail(e.target.value)}/>
          </div>
          <div className="form-group">
          <input type="password" placeholder='Password...' onChange={(e) => setPassword(e.target.value)}/>
          </div>
          <button type='submit'>Register</button>
          <p>Have an Account? <Link to="/login">Login</Link></p>
        </form>
      </div>
    </div>
  )
}

export default Register