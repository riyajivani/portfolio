import React from 'react'
import MyCard from '../../component/card/MyCard'
import './resume.css'
import CommonBtn from '../../component/commonbtn/commonbtn'
import { Link } from 'react-router-dom'

const ResumePdf = "http://localhost:3000/resume.pdf";

const Resume = () => {

     const handleDownload = () => {
          const fileName = ResumePdf.split("/").pop();
          const aTag = document.createElement("a");
          aTag.href = ResumePdf;
          aTag.setAttribute("download", fileName);
          document.body.appendChild(aTag);
          aTag.click();
          aTag.remove();
     }

     return (
          <div className='container'>
               <MyCard>
                    <div className="resume-card">

                         <div className="resume">
                              <h1>RIYA JIVANI</h1>
                              <h4>riyajivani8@gmail.com | <Link className='fp-link' to="https://github.com/riyajivani" target='_blank'>GitHub Profile </Link> | (+91) 6351414235</h4>

                              <h2>ABOUT</h2>
                              <p>An entry-level software developer skilled in Java (including Hibernate, Spring Boot
                                   and Design Patterns), React and Android development. Possesses a foundational
                                   understanding of PostgreSQL and basic e-commerce security concepts.
                                   Committed to contributing to team goals, continuously enhancing skills, and eager
                                   to apply my skills to impactful projects, drive innovation, and collaborate effectively
                                   towards achieving our goals.</p>

                              <h2>EDUCATION</h2>
                              <ul>
                                   <li>
                                        B.Tech. in Information Technology | Dharmsinh Desai University, Nadiad
                                        <br />CPI: 8.97 | (Oct ’21 – Jun ‘25)

                                   </li>
                                   <li>
                                        XII (GSEB) | Delta Science School, Upleta
                                        <br />95.4% | 2021

                                   </li>
                              </ul>

                              <h2>PROJECTS</h2>
                              <ul>
                                   <li>
                                        <h3>ScholarSphere - MERN based Student Query Management System
                                        </h3>
                                        <p>Skilled in ScholarSphere, enhancing student-mentor communication at
                                             universities. Used features like faculty assignment and public queries for
                                             better knowledge sharing. Contributed to a supportive learning environment
                                             by resolving inquiries promptly.</p>
                                   </li>
                                   <li>
                                        <h3>Resume Builder – WebApp based on React and Spring Boot
                                        </h3>
                                        <p>Resume Builder is an easy-to-use application designed to help users create
                                             professional resumes quickly and efficiently. It offers a user-friendly interface
                                             with customizable templates and easy editing options.</p>
                                   </li>
                                   <li>
                                        <h3>Online Flight Booking System – DBMS based ticket booking portal
                                        </h3>
                                        <p>this project underscores my proficiency in designing the backend
                                             architecture essential for a seamless and efficient flight booking experience.</p>
                                   </li>
                                   <li>
                                        <h3>Shopello – Shopping Website
                                        </h3>
                                        <p>Designed a website using HTML and CSS, offering a seamless shopping
                                             experience. Features include product viewing, a login page, and a cart page
                                             for a straightforward user journey</p>
                                   </li>
                              </ul>

                              <h2>SKILLS</h2>
                              <p>OOP Concepts | HTML, CSS, JavaScript | C++ (Basic) | Data Structures (Especially
                                   LinkedList) | Basic Operating System Concepts | Punctual | Goal-Driven | Decisive
                                   | Engaged Listener</p>
                         </div>
                         <CommonBtn content="Download" onClick={handleDownload} />
                    </div>
               </MyCard>
          </div>
     )
}

export default Resume