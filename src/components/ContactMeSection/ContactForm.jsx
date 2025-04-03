import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { useState } from 'react';

const ContactForm = () => {
    const[name,SetName]=useState('');
    const[email,SetEmail]=useState('');
    const[message,SetMessage]=useState('');
    const[success,SetSuccess]=useState('');

    const handleName=(e)=>{
        SetName(e.target.value)
    }
    const handleEmail=(e)=>{
        SetEmail(e.target.value)
    }
    const handleMessage=(e)=>{
        SetMessage(e.target.value)
    }

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs
          .sendForm('service_5b5dbzh', 'template_szo13if', form.current, {
            publicKey: 'SMAj9N0Xf81_ehx2B',
          })
          .then(
            () => {
             SetName('');
             SetEmail('');
             SetMessage('');
             SetSuccess('Message Sent!')
            },
            (error) => {
              console.log('FAILED...', error.text);
            },
          );
      };

  return (
    <div>
        <p className='text-cyan'>{success}</p>
        <form className='flex flex-col gap-4 text-white' ref={form} onSubmit={sendEmail}>
            <input 
              name='from_name'
              type="text"  
              placeholder='Your Name' 
              required 
              className='h-12 rounded-lg bg-lightBrown px-2'
              value={name}
              onChange={handleName}
            />
            <input 
              name='from_email'
              type="email" 
              placeholder='Your Email' 
              required 
              className='h-12 rounded-lg bg-lightBrown px-2'
              value={email}
              onChange={handleEmail}
            />
            <textarea 
              name='message'
              placeholder='Message' 
              rows='9' 
              required 
              className='rounded-lg bg-lightBrown p-2'
              value={message}
              onChange={handleMessage}
            />
            <button 
              type='submit' 
              className='w-full rounded-lg border border-cyan text-white h-12 font-bold text-xl hover:bg-darkCyan bg-cyan transition-all duration-500'
            >
                Send
            </button>
        </form>
    </div>
  );
}

export default ContactForm;
