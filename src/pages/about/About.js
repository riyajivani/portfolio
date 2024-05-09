import React from 'react'
import { useNavigate, Link } from 'react-router-dom'
import './about.css'
import MyCard from '../../component/card/MyCard'
import Commonbtn from '../../component/commonbtn/commonbtn'
import featuredImg from '../../assets/1.png'
import { SiAndroidstudio } from "react-icons/si";
import { FaJava } from "react-icons/fa";
import { SiHibernate } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { FaHtml5 } from "react-icons/fa";
import { IoLogoCss3 } from "react-icons/io";
import { IoLogoJavascript } from "react-icons/io5";
import { FaNodeJs } from "react-icons/fa";
import { BiLogoSpringBoot } from "react-icons/bi";
import { TbBrandCpp } from "react-icons/tb";
import { SiPostgresql } from "react-icons/si";
import { SiMongodb } from "react-icons/si";
import { FaGithub } from "react-icons/fa";
import { SiPostman } from "react-icons/si";
import { FaDocker } from "react-icons/fa6";
import { FaPython } from "react-icons/fa";
import { Tooltip } from 'antd'
import expertises from '../../db.json'
import { IoTerminalOutline } from "react-icons/io5";
import { BsDatabaseCheck } from "react-icons/bs";
import { IoCubeOutline } from "react-icons/io5";
import { BsAndroid2 } from "react-icons/bs";

const About = () => {
     const navigate = useNavigate();

     const icons = {
          IoTerminalOutline: IoTerminalOutline,
          BsDatabaseCheck: BsDatabaseCheck,
          IoCubeOutline: IoCubeOutline,
          BsAndroid2: BsAndroid2
     };

     const showResume = () => {
          navigate("/resume")
     }

     const HandleGetInTouch = () => {
          navigate("/contact")
     }

     return (
          <div className='container'>
               <MyCard>
                    <div className="about-card">
                         <h1>Riya Jivani</h1>
                         <p><b>Enthusiastic Learner</b>, with knowledge in android development, Java(Advance, Hibernate, Spring, Design Patterns), Database like PostgreSql and Mathematics. Currently, I'm pursuing degree of B.Tech from <b>DHARMSINH DESAI UNIVERSITY</b> in field of <b>INFORMATION TECHNOLOGY.</b> I'm seeking an opportunity to use my skills with my best. I do my work with all my heart and I get lost in that work, this is one of the best point to hire me.</p>
                         <Commonbtn content="View Resume" onClick={() => { navigate("/resume") }} />
                    </div>
               </MyCard>

               <div className="fp-card">
                    <h2>Featured project</h2>
                    <p>Discover the groundbreaking fusion of art and technology in our featured project, where creativity meets innovation to redefine boundaries. <br /><Link to="/contact" className='fp-link'>Join me</Link> on a journey where imagination transforms into tangible reality, shaping the future of expression.</p>

                    <div className="intro">
                         <img src={featuredImg} alt='' className='fp-img' />

                         <div className="intro-txt">
                              <h3>ScholarSphere</h3>
                              <span>In contemporary educational settings, effective communication and collaboration play
                                   pivotal roles in fostering an enriching learning environment. With the advent of digital
                                   technologies, there arises a need for efficient systems that streamline interactions
                                   between students and faculty members. ScholarSphere emerges as a solution to address
                                   this need, offering a robust Student Query Management System tailored for university
                                   environments.</span>
                              <Link to="/projects" className='fp-link'>View More</Link>
                         </div>
                    </div>
               </div>

               <div className="fp-card">
                    <h2>Skills & Expertise</h2>
                    <p>Showcasing a diverse skill set encompassing programming languages, database management, and frameworks, adept at adapting to various tech stacks and environments. Experienced in utilizing tools like version control systems and deployment pipelines to deliver efficient solutions.</p>

                    <div className="skills">
                         <Tooltip placement="bottom" color="#fe655c" title="android dev"> <SiAndroidstudio /> </Tooltip>
                         <Tooltip placement="bottom" color="#fe655c" title="java"> <FaJava /> </Tooltip>
                         <Tooltip placement="bottom" color="#fe655c" title="springboot"> <BiLogoSpringBoot /> </Tooltip>
                         <Tooltip placement="bottom" color="#fe655c" title="hibernate"> <SiHibernate /> </Tooltip>
                         <Tooltip placement="bottom" color="#fe655c" title="reactJs"> <FaReact /> </Tooltip>
                         <Tooltip placement="bottom" color="#fe655c" title="github"> <FaGithub /> </Tooltip>
                         <Tooltip placement="bottom" color="#fe655c" title="postman"> <SiPostman /> </Tooltip>
                         <Tooltip placement="bottom" color="#fe655c" title="postgresql"> <SiPostgresql /> </Tooltip>
                         <Tooltip placement="bottom" color="#fe655c" title="html"> <FaHtml5 /> </Tooltip>
                         <Tooltip placement="bottom" color="#fe655c" title="css"> <IoLogoCss3 /> </Tooltip>
                         <Tooltip placement="bottom" color="#fe655c" title="javascript"> <IoLogoJavascript /> </Tooltip>
                         <Tooltip placement="bottom" color="#fe655c" title="nodeJs"> <FaNodeJs /> </Tooltip>
                         <Tooltip placement="bottom" color="#fe655c" title="mongo"> <SiMongodb /> </Tooltip>
                         <Tooltip placement="bottom" color="#fe655c" title="c++"> <TbBrandCpp /> </Tooltip>
                         <Tooltip placement="bottom" color="#fe655c" title="docker"> <FaDocker /> </Tooltip>
                         <Tooltip placement="bottom" color="#fe655c" title="python"> <FaPython /> </Tooltip>
                    </div>

                    <Commonbtn content="View Resume" onClick={showResume} />

                    <div className="expertise">
                         {expertises.expertise.map((exp, index) => {
                              const IconComponent = icons[exp.icon];
                              return (
                                   <div className="exp" key={index}>
                                        <div className="exp-icon-wrapper">
                                             <IconComponent className="exp-comp" />
                                        </div>
                                        <h3>{exp.name}</h3>
                                        <p>{exp.description}</p>
                                   </div>
                              )
                         })}
                    </div>

                    <Commonbtn content="Get In Touch" onClick={HandleGetInTouch} />
               </div>
          </div>
     )
}

export default About