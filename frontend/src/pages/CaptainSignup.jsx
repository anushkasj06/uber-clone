import React from 'react'
import { useState } from 'react';
import { Link } from 'react-router-dom';


const CaptainSignup = () => {

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [captainData, setCaptainData] = useState({});
  
  
    const submitHandler = (e) => {
      e.preventDefault(); 
      setCaptainData({
        fullName:{
          firstName: firstName,
          lastName: lastName,
        },
        email: email,
        password: password
      });
  
      setFirstName('');
      setLastName('');
      setEmail('');
      setPassword('');
  
    }

  return (
    <div className='p-7 h-screen flex flex-col justify-between'>
    <div>
      <img className='w-20 mb-2' src="https://www.svgrepo.com/show/505031/uber-driver.svg" alt="Uber Logo" />
      <form onSubmit={submitHandler}> 
      <h3 className='text-medium w-1/2 mb-2'>What's your name</h3>
      <div className='flex gap-4 mb-4'>
      <input 
          required
          value = {firstName}
          onChange = {(e) => setFirstName(e.target.value)}
          className='bg-[#eeeeee] rounded w-1/2 px-4 py-2  text-lg placeholder:text-base' 
          type="text" 
          placeholder='first name'
        />
        <input 
          required
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
          className='bg-[#eeeeee] rounded w-1/2 px-4 py-2 text-lg placeholder:text-base' 
          type="text" 
          placeholder='last name'
        />

      </div>
        <h3 className='text-medium mb-2'>What's your email</h3>
        <input 
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className='bg-[#eeeeee] rounded px-4 py-2 mb-4 w-full text-lg placeholder:text-base' 
          type="email" 
          placeholder='email@example.com'
        />
        <h3 className='text-medium mb-2'>Enter Password</h3>
        <input 
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          className='bg-[#eeeeee] rounded px-4 py-2 mb-4 w-full text-lg placeholder:text-base' 
          type="password" 
          placeholder='password'
        />
        <button className='bg-[#111] text-white text-semibold rounded px-4 py-2 w-full text-lg'>Sign Up</button>
        <p className='text-center'>
           Already have a Captain? <Link to={'/captain-login'} className='text-blue-500'>Login here</Link>
        </p>
      </form>
    </div>
    <div>
      <p className='text-[12px]'>This site is Protected by reCAPTCHA and the <span className='underline'>Google Privacy Policy</span> and <span className='underline'>Terms of Service apply.</span>
      </p>
    </div>
  </div>
  )
}

export default CaptainSignup
