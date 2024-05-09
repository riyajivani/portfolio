import React, { useState } from 'react'
import './navbar.css'
import { Outlet, useNavigate } from 'react-router-dom'
import Sidebar from '../sidebar/sidebar'
import { FaAlignJustify } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
// import { IoCall } from "react-icons/io5";
import { FaWhatsapp } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import Theme from '../themeToggle/Theme';
import Footer from '../footer/Footer';

const Navbar = () => {

     const [sidebarOpen, setSidebarOpen] = useState(true);
     const navigate = useNavigate();

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
                         <li
                              onClick={() => { window.open('https://github.com/riyajivani', '_blank') }}>
                              <FaGithub />
                         </li>

                         <li
                              onClick={() => { window.open('https://www.linkedin.com/in/riya-jivani-729116228/', '_blank') }}>
                              <FaLinkedinIn />
                         </li>

                         <li
                              onClick={() => { window.open('https://wa.me/6351414235', '_blank') }}>
                              <FaWhatsapp />
                         </li>

                         <li
                              onClick={() => { window.open('https://www.facebook.com/profile.php?id=100069335388620', '_blank') }}>
                              <FaFacebook />
                         </li>

                    </ul>
               </div>
               <button className='nav-btn' onClick={() => { navigate("/contact") }}>Hire Me</button>
          </div>

          {sidebarOpen && <Sidebar isOpen={sidebarOpen} toggleSidebar={toggleSidebar} />}
          <Outlet />
          <Footer />
     </>
     )
}

export default Navbar