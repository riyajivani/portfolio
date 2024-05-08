import React from 'react'
import { useNavigate } from 'react-router-dom'
import './about.css'
import Card from '../../component/card/Card'
import Commonbtn from '../../component/commonbtn/commonbtn'

const About = () => {
     const navigate = useNavigate();

     return (
          <div className='container'>
               <Card>
                    <div className="about-card">
                         <h1>Riya Jivani</h1>
                         <p><b>Enthusiastic Learner</b>, with knowledge in android development, Java(Advance, Hibernate, Spring, Design Patterns), Database like PostgreSql and Mathematics. Currently, I'm pursuing degree of B.Tech from <b>DHARMSINH DESAI UNIVERSITY</b> in field of <b>INFORMATION TECHNOLOGY.</b> I'm seeking an opportunity to use my skills with my best. I do my work with all my heart and I get lost in that work, this is one of the best point to hire me.</p>
                         <Commonbtn content="View Resume" onClick={() => { navigate("/resume") }} />
                    </div>
               </Card>
          </div>
     )
}

export default About