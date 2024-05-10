import './mycard.css'
import profilePic from '../../assets/profile-pic.png'

import React from 'react'

const MyCard = ({ children }) => {
     return (
          // <div className="mycard">
          //      <img src={profilePic} alt='profilePic' className='profilePic' />
          //      <div className='children'>
          //           {children}
          //      </div>
          // </div>
          <div className="mycard">
               <div className="profile-container">
                    <img src={profilePic} alt='profilePic' className='profilePic' />
               </div>
               <div className='children'>
                    {children}
               </div>
          </div>
     )
}

export default MyCard