import React from 'react'
import './Image.css'

export default function Image(props) {
  return (
    <>
    <div className='portfolio-image'>
        <img src={props.portfolio} alt='portfolio' />
    </div>
    </>
  )
}
