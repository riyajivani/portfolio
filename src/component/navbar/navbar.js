import React, { useState } from 'react'
import './navbar.css'
import { Link, Outlet } from 'react-router-dom'
import Sidebar from '../sidebar/sidebar'
import { FaAlignJustify } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import Theme from '../themeToggle/Theme';

const Navbar = () => {

     const [sidebarOpen, setSidebarOpen] = useState(true);

     const toggleSidebar = (isOpen) => {
          setSidebarOpen(isOpen);
     };

     return (<>
          <div className='navbar'>
               <div className="left-nav">
                    <FaAlignJustify className='sidebar-toggle' onClick={() => toggleSidebar(!sidebarOpen)} />
                    <Theme />
               </div>

               <div className='social-media'>
                    <ul>
                         <li><Link /><FaGithub /></li>
                         <li><Link /><FaLinkedinIn /></li>
                         <li><Link /><FaWhatsapp /></li>

                    </ul>
               </div>
               <button className='nav-btn'>Hire Me</button>
          </div>

          {sidebarOpen && <Sidebar isOpen={sidebarOpen} toggleSidebar={toggleSidebar} />}
          <Outlet />
     </>
     )
}

export default Navbar