import React from 'react'
import { HiOutlineMail } from "react-icons/hi";
import { FaPhone } from "react-icons/fa6";
import { IoLocationSharp } from "react-icons/io5"; 
import SingleInfo from './SingleInfo';
const ContactInfo = () => {
  return (
    <div className='flex flex-col gap-6 text-white'>
        <SingleInfo text="rishavmahajan194@gmail.com" Image={HiOutlineMail}/>
        <SingleInfo text="7876882988" Image={FaPhone}/>
        <SingleInfo text="Nagrota Bagwan, Distt-kangra,H.P." Image={ IoLocationSharp }/>
    </div>
  )
}

export default ContactInfo