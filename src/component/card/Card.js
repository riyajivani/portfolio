import './card.css'
import profilePic from '../../assets/profile-pic.png'

import React from 'react'

const Card = ({ children }) => {
     return (
          <div className="card">
               <img src={profilePic} alt='profilePic' className='profilePic' />
               <div className='children'>
                    {children}
               </div>
          </div>
     )
}

export default Card