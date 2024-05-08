import './commonbtn.css'
import { BsArrowRight } from "react-icons/bs";

import React from 'react'

const Commonbtn = ({ content, onClick }) => {
     return (
          <button className='btn' onClick={onClick}>
               <span>{content}</span>
               <BsArrowRight style={{ fontSize: '20px' }} />
          </button>
     )
}

export default Commonbtn