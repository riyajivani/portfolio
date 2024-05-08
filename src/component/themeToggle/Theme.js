import React from 'react'
import './theme.css'
import { IoMoonSharp } from "react-icons/io5";
import { IoSunny } from "react-icons/io5";

const Theme = () => {

     const setDarkMode = () => {
          document.body.setAttribute('data-theme', 'dark')
          localStorage.setItem("selectedTheme", "dark")
     }
     const setLightMode = () => {
          document.body.setAttribute('data-theme', 'light')
          localStorage.setItem("selectedTheme", "light")
     }

     const selectedTheme = localStorage.getItem("selectedTheme");

     selectedTheme === "dark" ? setDarkMode() : setLightMode()

     const toggleTheme = (e) => {
          e.target.checked === true ? setDarkMode() : setLightMode()
     }
     return (
          <div className='dark_mode'>
               <input
                    className='dark_mode_input'
                    type='checkbox'
                    onChange={toggleTheme}
                    id='darkmode-toggle'
                    defaultChecked={selectedTheme === "dark"}
               />

               <label className='dark_mode_label' htmlFor='darkmode-toggle'>
                    <IoSunny />
                    <IoMoonSharp />
               </label>
          </div>
     )
}

export default Theme