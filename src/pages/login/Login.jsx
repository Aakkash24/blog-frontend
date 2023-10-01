import React, { useState } from 'react'
import classes from "./login.module.css"
import { Link, useNavigate } from 'react-router-dom'
import {request} from "../../utils/fetchApi"
import { useDispatch } from 'react-redux'
import { login } from '../../redux/auth'


const Login = () => {
  const [email,setEmail] = useState("")
  const [password,setPassword] = useState("")
  const navigate = useNavigate()
  const dispatchEvent = useDispatch()

  const handleLogin = async(e) => {
    e.preventDefault();
    if(email === '' || password === '')
    return;
  
    try {
      const options = {"Content-Type":"application/json"}

      const data = await request('/user/login',"POST",options,{ email, password})
      console.log(data);
      dispatchEvent(login(data));
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className={classes.container}>
      <div className={classes.wrapper}>
        <h2>Login</h2>
        <form onSubmit={handleLogin}>
          <div className="form-group">
            <input type="email" placeholder='Email...' onChange={(e) => setEmail(e.target.value)}/>
          </div>
          <div className="form-group">
          <input type="password" placeholder='Password...' onChange={(e) => setPassword(e.target.value)}/>
          </div>
          <button type='submit'>Login</button>
          <p>New to Blog? <Link to="/register"> Register</Link></p>
        </form>
      </div>
    </div>
  )
}

export default Login