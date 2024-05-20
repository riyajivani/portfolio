import React from 'react'
import MyCard from '../../component/card/MyCard'
import './projects.css'
import CommonBtn from '../../component/commonbtn/commonbtn'
import { useNavigate, Link } from 'react-router-dom'
import { SiJirasoftware } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { FaHtml5 } from "react-icons/fa";
import { IoLogoCss3 } from "react-icons/io";
import { IoLogoJavascript } from "react-icons/io5";
import { FaNodeJs } from "react-icons/fa";
import { BiLogoSpringBoot } from "react-icons/bi";
import { SiPostgresql } from "react-icons/si";
import { SiMysql } from "react-icons/si";
import { SiMongodb } from "react-icons/si";
import { FaPhp } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import projects from '../../db.json'


const Projects = () => {
     const navigate = useNavigate()

     const techIcons = {
          FaReact: FaReact,
          FaNodeJs: FaNodeJs,
          SiMongodb: SiMongodb,
          BiLogoSpringBoot: BiLogoSpringBoot,
          SiMysql: SiMysql,
          SiJirasoftware: SiJirasoftware,
          SiPostgresql: SiPostgresql,
          FaHtml5: FaHtml5,
          IoLogoCss3: IoLogoCss3,
          IoLogoJavascript: IoLogoJavascript,
          FaPhp: FaPhp
     };

     return (
          <div className='container'>
               <MyCard>
                    <div className="projects-card">
                         <h1>My Projects</h1>
                         <p>Need help with your project? <br />Book a free session with me to discuss your specific project requirements and how I can help you.</p>
                         <CommonBtn content="Start A Conversation" onClick={() => { navigate("/contact") }} />
                    </div>
               </MyCard>

               <div className="projects">
                    {projects.projects.map((project, index) => (

                         <div className={`project ${index % 2 === 0 ? 'even' : 'odd'}`} key={index} >

                              <img src={require(`../../assets/${project.image}`)} className='project-img' alt={project.title} onClick={() => window.open(`${project.view}`, "_blank")}></img>

                              <div className="project-details">

                                   <h3>{project.title}</h3>

                                   <Link to={project.github} target='_blank' className='fp-link' onClick={(e) => { e.stopPropagation() }}><FaGithub className='git' />Github</Link>

                                   <p className='project-p'>{project.description}</p>

                                   <p style={{ margin: '5px 0' }}><b>TechStack: </b></p>
                                   <div className="tech-icons">
                                        {project.tech.map((tech, index) => {
                                             const Icon = techIcons[tech];
                                             return <Icon key={index} />;
                                        })}
                                   </div>
                              </div>
                         </div>
                    ))}
               </div>


               <div className="fp-card">
                    <h2>Need Help With Your Project?</h2>
                    <p>Let's collaborate to bring your vision to life. Get in touch today and let's make it happen together!</p>
                    <CommonBtn content="Get In Touch" onClick={() => window.open("https://wa.me/6351414235", "_blank")} />
               </div>
          </div>
     )
}

export default Projects