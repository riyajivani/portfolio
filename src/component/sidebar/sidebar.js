import React from 'react'
import { NavLink } from 'react-router-dom'
import './sidebar.css'
import { BsPersonCircle } from "react-icons/bs";
import { FaLaptop } from "react-icons/fa";
import { FaPenFancy } from "react-icons/fa";
import { IoDocumentText } from "react-icons/io5";
import { IoChatbubbleEllipsesSharp } from "react-icons/io5";
import { IoClose } from "react-icons/io5";

const Sidebar = ({ isOpen, toggleSidebar }) => {

     return isOpen && (
          <div className='sidebar'>

               <div className="sidebar-link">
                    <NavLink to="/">
                         <BsPersonCircle />
                         <p>About</p>
                    </NavLink>
               </div>

               <div className="sidebar-link">
                    <NavLink to="/projects">
                         <FaLaptop />
                         <p>Project</p>
                    </NavLink>
               </div>

               <div className="sidebar-link">
                    <NavLink to="/blogs">
                         <FaPenFancy />
                         <p>Blogs</p>
                    </NavLink>
               </div>

               <div className="sidebar-link">
                    <NavLink to="/resume">
                         <IoDocumentText />
                         <p>Resume</p>
                    </NavLink>
               </div>

               <div className="sidebar-link">
                    <NavLink to="/contact">
                         <IoChatbubbleEllipsesSharp />
                         <p>Contact</p>
                    </NavLink>
               </div>

               <IoClose className="close" onClick={() => { toggleSidebar(false) }} />
          </div>
     )
}
export default Sidebar