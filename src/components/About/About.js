import React from 'react'
import './About.css'

export default function About(props) {
  return (
  <>
  <div className='about' id='about'>
    {props.aboutme}
  </div>
  </>
  )
}
