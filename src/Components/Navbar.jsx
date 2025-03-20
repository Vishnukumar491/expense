import React from 'react'
import './Navbar.css'
import { CgProfile } from "react-icons/cg";
import { IoMdClose } from "react-icons/io";
import { FaBars } from "react-icons/fa";
const Navbar = () => {
  const ShowSideBar=()=>{
  const side=document.getElementById('sidebar')
   side.style.display='flex'

}
const hideSideBar=()=>{
  const side1=document.getElementById('sidebar')
  side1.style.display='none'
}
  return (
    <div className='Nav-main'>
        <div className='Nav-bar'>
          <nav>
            <ul id='sidebar'>
              <li><a href="#" className="w1" onClick={hideSideBar}><IoMdClose /></a></li>
              <li><a href="#" className="w1">Expense Spliter</a></li>
              <li><a href="#" className="w1">Home</a></li>
              <li><a href="#" className="w1">About</a></li>
              <li><a href="#" className="w1">History</a></li>

            </ul>
            <ul>
              <li><a href="#" className="">Expense Spliter</a></li>
              <li><a href="#" className="w">Home</a></li>
              <li><a href="#" className="w">About</a></li>
              <li><a href="#" className="w">History</a></li>
              <li><a href="#" className="nav-menu" onClick={ShowSideBar}><FaBars /></a></li>
            </ul>
          </nav>
        </div>
    </div>
  )
}

export default Navbar