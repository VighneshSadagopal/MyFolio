import React from 'react'
import './Navbar.css'
import logo from './images/name.png'
import { useEffect } from 'react';
import { Outlet} from 'react-router-dom';

export default function Navbar() {
    
    useEffect(() => {
        let navbar = document.getElementById('navbar');
        window.addEventListener('scroll',function(){
            navbar.classList.toggle('sticky',this.window.scrollY > 0);
        })
    })

    
  return (
    <>

    <div className='navbar' id='navbar' >
        <div className='logo'>
            <img src={logo} alt='logo' id='logo' />
        </div>
        <nav>
            <ul>
                <li><a href="/">HOME</a></li>
                <li><a href="#about">ABOUT</a></li>
                <li><a href="#projects">PROJECTS</a></li>
                <li><a href="#contact">CONTACT</a></li>
            </ul>
        </nav>
        <Outlet />
    </div>
    </>
  )
}
