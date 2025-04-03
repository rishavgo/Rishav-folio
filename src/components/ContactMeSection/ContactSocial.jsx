import React from 'react'
import SingleContactSocial from './SingleContactSocial'
import { FaGithubAlt } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";


const ContactSocial = () => {
  return (
    <div className='flex gap-4'>
        <SingleContactSocial link='https://github.com/rishavgo' Icon={FaGithubAlt}/>
        <SingleContactSocial link='https://www.linkedin.com/in/rishav-mahajan-735826231/' Icon={FaLinkedin}/>
    </div>
  )
}

export default ContactSocial