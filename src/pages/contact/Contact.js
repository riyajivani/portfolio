import React, { useRef, useState } from 'react'
import MyCard from '../../component/card/MyCard'
import { FaGithub } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import './contact.css'
import emailjs from '@emailjs/browser'
import { toast } from 'react-toastify'

const Contact = () => {

     const form = useRef();
     const [data, setData] = useState(
          {
               name: "",
               email: "",
               msg: ""
          }
     )

     const handleSubmit = (e) => {
          e.preventDefault()
          emailjs.sendForm('service_fyg20ua', 'template_s8n3g78', form.current,
               { publicKey: 'zeC7-lKv9gX-eXFPk' })
               .then(
                    () => {
                         toast.success("mail sent successfully")
                         setData({ ...data, name: "", email: "", msg: "" })
                    },
                    (error) => { toast.error(`mail not sent because ${error}`) },
               )
     }

     const handleChange = (e) => {
          setData({ ...data, [e.target.name]: e.target.value })
     }

     return (
          <div className='container'>
               <MyCard>
                    <div className="contact-card">
                         <h1>Get In Touch</h1>
                         <h4>I will read all emails. Send me any message you want and I'll get back to you.<br /></h4>
                         <p>I need your name and Email address, but you won't receive anything other than your reply.</p>

                         <div className='social-media contact-sm'>
                              <ul className='contact-sm'>
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

                         <h2 className='contact-text'>Contact Form</h2>
                         <form className="contact-form" ref={form} onSubmit={handleSubmit}>
                              <div className="input">
                                   <input
                                        required
                                        className='form-input'
                                        type='text'
                                        placeholder='Name'
                                        name='name'
                                        value={data.name}
                                        onChange={handleChange}
                                   />

                                   <input
                                        required
                                        className='form-input'
                                        type='email'
                                        placeholder='Email'
                                        name='email'
                                        value={data.email}
                                        onChange={handleChange}
                                   />
                              </div>

                              <textarea
                                   required
                                   className='form-input'
                                   rows={10}
                                   name='msg'
                                   value={data.msg}
                                   placeholder='Enter Your Message'
                                   onChange={handleChange}
                              />

                              <button type='submit' className='contact-btn'>Submit</button>
                         </form>
                    </div>
               </MyCard>
          </div>
     )
}

export default Contact