import React from 'react'
import MyCard from '../../component/card/MyCard'
import './resume.css'
import CommonBtn from '../../component/commonbtn/commonbtn'
import { Link } from 'react-router-dom'
import resume from '../../assets/resume.pdf'

const ResumePdf = resume

const Resume = () => {

     const handleDownload = () => {
          const fileName = "resume.pdf"
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
                              <h4>riyajivani8@gmail.com | <Link className='fp-link' to="https://github.com/riyajivani" target='_blank'>GitHub Profile </Link> | <Link className='fp-link' to="https://www.linkedin.com/in/riya-jivani-729116228/" target='_blank'>LinkedIn Profile </Link> | (+91) 6351414235</h4>

                              <h2>ABOUT</h2>

                              <p style={{ textAlign: 'justify' }}>An entry-level software developer skilled in Java (including Hibernate, Spring Boot and Design Patterns) and ReactJS.
                                   Possesses a foundational understanding of databases and basic e-commerce security concepts. Committed to
                                   contributing to team goals, continuously enhancing skills, and eager to apply my skills to impactful projects, drive
                                   innovation, and collaborate effectively towards achieving our goals.</p>

                              <h2>EDUCATION</h2>
                              <ul>
                                   <li style={{ listStyle: 'none' }}>
                                        <b>B.Tech., Information Technology, Dharmsinh Desai University</b> <br />
                                        CPI: 9.08 | (2021 – 2025)

                                   </li>
                                   <li style={{ listStyle: 'none' }}>
                                        <b>Delta Science School</b><br />
                                        95.4% | 2021

                                   </li>
                              </ul>

                              <h2>TECHNICAL SKILLS</h2>
                              <ul>
                                   <li style={{ listStyle: 'none' }}><b>Core Skills:</b> DBMS, DSA, OOPS, SDLC, OS, REST API, Computer Networks, Design Patterns in Java </li>
                                   <li style={{ listStyle: 'none' }}><b>Programming Languages:</b> Java, C++, HTML, CSS, JavaScript</li>
                                   <li style={{ listStyle: 'none' }}><b>Frameworks and Libraries:</b> ReactJS, SpringBoot, Hibernate, .NET Framework(learning)</li>
                                   <li style={{ listStyle: 'none' }}><b>Technologies:</b> Web Development, Full Stack Development</li>
                                   <li style={{ listStyle: 'none' }}><b>Basic Machine Learning Models:</b> Linear Regression, Logistic Regression, Naïve Bayes Classification, Decision Tree Classification, Support Vector Machine, KNN Clustering, K-Means Clustering</li>
                                   <li style={{ listStyle: 'none' }}><b>Tools:</b> VS Code, IntelliJ IDEA, GitHub, Docker, Postman, NetBeans, PgAdmin</li>
                                   <li style={{ listStyle: 'none' }}><b>Hosting Platform:</b> Render, Railway, Vercel</li>
                                   <li style={{ listStyle: 'none' }}><b>Soft Skills:</b> Punctual, Goal-Driven, Decisive, Engaged Listener, Self-Motivation</li>
                              </ul>
                              <h2>PROJECTS</h2>
                              <ul>
                                   <li style={{ listStyle: 'none' }}>
                                        <h3>ScholarSphere - MERN based Student Query Management System</h3>
                                        <p> ⎯ Tools and Technology used: MERN stack<br />
                                             Skilled in ScholarSphere, enhancing student-mentor communication at universities. Used features like faculty
                                             assignment and public queries for better knowledge sharing. Contributed to a supportive learning environment
                                             by resolving inquiries promptly.</p>
                                   </li>
                                   <li style={{ listStyle: 'none' }}>
                                        <h3>Resume Builder – WebApp based on React and Spring Boot
                                        </h3>
                                        <p> ⎯ Tools and Technology used: ReactJS, SpringBoot, MySQL<br />
                                             Resume Builder is an easy-to-use application designed to help users create professional resumes quickly and
                                             efficiently. It offers a user-friendly interface with customizable templates and easy editing options.
                                        </p>
                                   </li>
                                   <li style={{ listStyle: 'none' }}>
                                        <h3>Online Flight Booking System – DBMS based ticket booking portal
                                        </h3>
                                        <p>⎯ Tools and Technology used: PostgreSQL<br />
                                             This project underscores my proficiency in designing the backend architecture essential for a seamless and
                                             efficient flight booking experience</p>
                                   </li>
                                   <li style={{ listStyle: 'none' }}>
                                        <h3>Shopello – E-Commerce Website
                                        </h3>
                                        <p>⎯ Tools and Technology used: HTML, CSS<br />
                                             Designed a website using HTML and CSS, offering a seamless shopping experience. Features include product
                                             viewing, a login page, and a cart page for a straightforward user journey.
                                        </p>
                                   </li>
                              </ul>

                              <h2>RESERCH</h2>
                              <ul>
                                   <li style={{ listStyle: 'none' }}>
                                        <h3>CryptOQA – Cryptocurrency Opinion and Question Analysis (ongoing)
                                        </h3>
                                        <p> ⎯ Role: Researcher <br />
                                             Description: Working on a project under the FIRE 2024 conference, hosted by IIT Kharagpur and IISER
                                             Kolkata, focusing on classifying opinions and answering questions related to cryptocurrencies from social media
                                             posts using NLP and machine learning techniques.
                                        </p>
                                   </li>
                              </ul>

                              <h2>CERTIFICATES</h2>
                              <ul>
                                   <li><Link className='fp-link' to="https://drive.google.com/file/d/1iYu8bR2T92w3BmHRrsLZWWQsoDuanUoZ/view?usp=sharing" target='_blank'>AWS Cloud Foundation Certificate</Link></li>
                                   <li><Link className='fp-link' to="https://drive.google.com/file/d/1jdRE2KBkQZ8VOAIQSUI5XRB75dgHMbn2/view?usp=sharing" target='_blank'>completion of short-term Training Program on Accelerating DevOps: Transforming Development and Operations</Link></li>
                                   <li><Link className='fp-link' to="https://drive.google.com/file/d/1YM715mmj4mY6KGnuicR8uNgnSWmqL3B7/view?usp=sharing" target='_blank'>DUHacks Certificate of Participation</Link></li>
                              </ul>
                         </div>
                         <CommonBtn content="Download" onClick={handleDownload} />
                    </div>
               </MyCard>
          </div>
     )
}

export default Resume