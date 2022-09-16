import React from 'react'
import github from '../images/github.png'

export default function ProjectCard2(props) {
  return (
    <>
    <div className='project-card2'>
        <div className='icon'>
            <img src={props.icon} alt='icon' />
        </div>
        <div className='details'>
            <h2>{props.head}</h2>
            <span className='summary'>
                {props.summary}
            </span>
            <div className='github-link'>
               <a href={props.gitlink}><img src={github} alt='github' /></a> 
            </div>
            <p>Duration : {props.duration}</p>
        </div>
    </div>
    </>
  )
}
