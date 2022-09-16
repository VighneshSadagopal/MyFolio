import React from 'react'
import LocationOnIcon from '@mui/icons-material/LocationOn';
import MailIcon from '@mui/icons-material/Mail';
import './Contact.css'
import { useEffect } from 'react';

export default function Contact(props) {

  return (
    <>
    <div className='contact' id="contact">
            <form className='contact-form'>
                <label>Name</label>
                <input type='text' placeholder='Name' name='name' />
                <label>Email</label>
                <input type='text' placeholder='abc@example.com' name='email' />
                <label>Message</label>
                <textarea placeholder='Write your message here ...!' />
                <button className='contact-submit'>Submit</button>
            </form>
            <div className='contact-details'>
            <div className='links stick ' id='links'>
                
                    <a href={props.linkname1}>{props.linkicon1} </a>
                    <a href={props.linkname2}>{props.linkicon2} </a>
                    <a href={props.linkname3}>{props.linkicon3} </a>
                    {/* <li><a href={props.linkname4}>{props.linkicon4} </a></li>
                    <li><a href={props.linkname5}>{props.linkicon5} </a></li>
                    <li><a href={props.linkname6}>{props.linkicon6} </a></li>
                    <li><a href={props.linkname7}>{props.linkicon7} </a></li>
                    <li><a href={props.linkname8}>{props.linkicon8} </a></li>
                    <li><a href={props.linkname9}>{props.linkicon9} </a></li>
                    <li><a href={props.linkname10}>{props.linkicon10}</a></li>
                    <li><a href={props.linkname11}>{props.linkicon11}</a></li>
                    <li><a href={props.linkname12}>{props.linkicon12}</a></li> */}
                
            </div>
            <div className='other-contact'>
                <div className='location'><LocationOnIcon fontSize='large'/> &nbsp;&nbsp;{props.locationname}</div><br></br>
               <div className='mail'> <MailIcon fontSize='large' />&nbsp;&nbsp;{props.mailid}</div>
            </div>
            </div>
        </div>

    </>
  )
}
