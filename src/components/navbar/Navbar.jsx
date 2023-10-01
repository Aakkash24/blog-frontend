import React, { useState } from 'react'
import classes from "./navbar.module.css"
import {Link} from "react-router-dom"
import womanImg from "../../assets/profile_img.jpg"
import { useDispatch } from 'react-redux'
import { logout } from '../../redux/auth'
import { useNavigate } from 'react-router-dom'

const Navbar = () => {

  const [showModal,setShowModal] = useState(false);
  const dispatchEvent = useDispatch();
  const navigate = useNavigate()

  const handleLogout = (e) =>{
    e.preventDefault();
    dispatchEvent(logout());
    navigate("/login");
  }

  return (
    <div className={classes.container}>
      <div className={classes.wrapper}>
        <div className={classes.left}>
          <Link to='/'>Aakkash</Link>
        </div>
        <ul className={classes.center}>
          <li className={classes.listItem}><Link to='/'>Home</Link></li>
          <li className={classes.listItem}><Link to='/about'>About</Link></li>
          <li className={classes.listItem}><Link to='/contact'>Contact</Link></li>
          <li className={classes.listItem}><Link to='/category'>Categories</Link></li>
        </ul>
        <div className={classes.right}>
          <img onClick={() => setShowModal(prev => !prev)} src={womanImg} className={classes.img}/>
          { showModal && 
            <div className={classes.modal}>
              <Link to="/create">Create</Link>
              <span onClick={handleLogout}>Logout</span>
            </div>
          }
        </div>
      </div>
    </div>
  )
}

export default Navbar