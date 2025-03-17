import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const UserLogin = () => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [userData, setUserData] = useState({});

  const submitHandler = (e) => {
    e.preventDefault();  // Fix: Prevent default form submission
    setUserData({
      email: email,
      password: password
    });
    setEmail('');
    setPassword('');
  }

  return (
    <div className='p-7 h-screen flex flex-col justify-between'>
      <div>
        <img className='w-16 mb-8' src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/Uber_logo_2018.svg/2560px-Uber_logo_2018.svg.png" alt="Uber Logo" />
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
            New Here? <Link to={'/signup'} className='text-blue-500'>Create new Account</Link>
          </p>
        </form>
      </div>

      <div>
        <Link to={'/captain-login'} className='bg-[#10b461] flex items-center justify-center mb-5 text-white text-semibold rounded px-4 py-2 mt-4 w-full text-lg'>
          Sign in as Captain
        </Link>
      </div>
    </div>
  )
}

export default UserLogin;
