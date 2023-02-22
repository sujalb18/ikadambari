import React from 'react'
import emailjs from 'emailjs-com';
import { useRef } from 'react';

const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        'service_ma476aq',
        'template_gdm2wcl',
        form.current,
        'YpwKz6v5WYwT3elNa'
      )
      .then(
        (result) => {
          alert('message sent successfully...');
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div>
      <div className='contactcs'>
      <h1 className='chead'>Contact Us</h1>
      <p className='chead'>In case you have any query, please do fill up the below form and we will get in touch with you as soon as possible. </p>

      <ul className='chead'>
        <li>TEL. +91 294 2454655, +91 7737627774</li>
        <li>EMAIL. ikadambari@life.ORG</li>
        <li>ADDRESS. Kanakia Rd, Kanakia Park, Mira Road, Mira Bhayandar, Maharashtra 401107</li>
      </ul>
      <form className='cf'>
        <div className='half left cf'>
          <input className='cinput' type='text' placeholder='Name' name='user_name' />
          <input className='cinput' type='email' placeholder='Email address' name='user_email' />
        </div>
        <div className='half right cf'>
          <textarea className='ctextarea' name='message' type='text' placeholder='Message'></textarea>
        </div>
        <input className='cinput' type='submit' value='Submit' id='input-submit' />
      </form>
    </div>
    </div>
  )
}

export default Contact
