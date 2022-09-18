import React from 'react'
import ProjectCard from './ProjectCard/ProjectCard'
import instagram from './images/instagram.png'
import './Project.css'
import ProjectCard2 from './ProjectCard/ProjectCard2'
import vslogo from './images/vslogo.png'

export default function Project() {
  return (
    <>
    <div className='project' id='projects'>
        <ProjectCard icon={instagram} head = {'Instagram Clone'}
        summary = {
            <>
            <p>Created a full fledged Instagram site with the help of Drupal CMS in my Internship</p>
            <p>This was my first Team project and being an intern I got to learn more things about the Drupal framework. I am happy to say my contributions to the Project was one of the main and important contributions for which i was also acknowledged by my mentors as well as my peers</p>
            <p>The Instagram Project include all the main features of the original instagram site like Adding Post and Stories, User Management System, User can Follow Another user , Use can like other users Posts, Search Functionality, #Hashtag filtering and categorization. A similar instagram theme customly created in Drupal</p>
            <p>Also some new features were added like the capture and post feature which is not available in the web-site of instagram.The custom module development I did in this feature really allowed me to excel my skills in Advance PHP and Javascript.</p>
            <p>My skills like leading the team and helping through the front was highly praised by my peers and mentors.</p>
            </>
        }
        gitlink = {'https://github.com/guptahemant/insta-clone'}
        duration = {'Dec 2021 - Mar 2022 (4 Months)'}
        />
        <ProjectCard2 icon={vslogo} head = {'VS Blog PHP Site'}
        summary = {
            <>
            <p>Created a full fledged Instagram site with the help of Drupal CMS in my Internship</p>
            <p>This was my first Team project and being an intern I got to learn more things about the Drupal framework. I am happy to say my contributions to the Project was one of the main and important contributions for which i was also acknowledged by my mentors as well as my peers</p>
            <p>The Instagram Project include all the main features of the original instagram site like Adding Post and Stories, User Management System, User can Follow Another user , Use can like other users Posts, Search Functionality, #Hashtag filtering and categorization. A similar instagram theme customly created in Drupal</p>
            <p>Also some new features were added like the capture and post feature which is not available in the web-site of instagram.The custom module development I did in this feature really allowed me to excel my skills in Advance PHP and Javascript.</p>
            <p>My skills like leading the team and helping through the front was highly praised by my peers and mentors.</p>
            </>
        }
        gitlink = {'https://github.com/VighneshSadagopal/BLOG_PHP'}
        duration = {'Aug 2021 - Dec 2022 (4 Months)'}
        />
         <ProjectCard icon={instagram} head = {'Instagram Clone'}
        summary = {
            <>
            <p>Created a full fledged Instagram site with the help of Drupal CMS in my Internship</p>
            <p>This was my first Team project and being an intern I got to learn more things about the Drupal framework. I am happy to say my contributions to the Project was one of the main and important contributions for which i was also acknowledged by my mentors as well as my peers</p>
            <p>The Instagram Project include all the main features of the original instagram site like Adding Post and Stories, User Management System, User can Follow Another user , Use can like other users Posts, Search Functionality, #Hashtag filtering and categorization. A similar instagram theme customly created in Drupal</p>
            <p>Also some new features were added like the capture and post feature which is not available in the web-site of instagram.The custom module development I did in this feature really allowed me to excel my skills in Advance PHP and Javascript.</p>
            <p>My skills like leading the team and helping through the front was highly praised by my peers and mentors.</p>
            </>
        }
        gitlink = {'https://github.com/guptahemant/insta-clone'}
        duration = {'Dec 2021 - Mar 2022 (4 Months)'}
        />
    </div>
    </>
  )
}
