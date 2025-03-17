import React from 'react'
import { useState } from 'react';
import { Link } from 'react-router-dom';

const CaptainLogin = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [captainData, setCaptainData] = useState({});

  const submitHandler = (e) => {
    e.preventDefault();  // Fix: Prevent default form submission
    setCaptainData({
      email: email,
      password: password
    });
    setEmail('');
    setPassword('');
  }

  return (
    <div className='p-7 h-screen flex flex-col justify-between'>
      <div>
        <img className='w-20 mb-2' src="https://www.svgrepo.com/show/505031/uber-driver.svg" alt="Uber Logo" />
        <form onSubmit={submitHandler}>
          <h3 className='text-medium mb-2'>What's your email</h3>
          <input 
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className='bg-[#eeeeee] rounded px-4 py-2 w-full text-lg placeholder:text-base' 
            type="email" 
            placeholder='email@example.com'
          />
          <h3 className='text-medium mb-2 mt-4'>Enter Password</h3>
          <input 
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className='bg-[#eeeeee] rounded px-4 py-2 w-full text-lg placeholder:text-base' 
            type="password" 
            placeholder='password'
          />
          <button className='bg-[#111] text-white text-semibold rounded px-4 py-2 mt-4 w-full text-lg'>Login</button>
          <p className='text-center mt-2'>
            Join a fleet? <Link to={'/captain-signup'} className='text-blue-500'>Register as a Captain</Link>
          </p>
        </form>
      </div>

      <div>
        <Link to={'/login'} className='bg-[#d5622d] flex items-center justify-center mb-5 text-white text-semibold rounded px-4 py-2 mt-4 w-full text-lg'>
          Sign in as User
        </Link>
      </div>
    </div>
  )
}

export default CaptainLogin

