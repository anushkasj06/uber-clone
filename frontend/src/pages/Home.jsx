import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div>
      <div className='bg-cover bg-[url(https://mir-s3-cdn-cf.behance.net/project_modules/max_3840_webp/c5310f182519763.652f3606b64b0.jpg)] h-screen pt-8 w-full flex flex-col justify-between'>
        <img className='w-16 ml-8' src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/Uber_logo_2018.svg/2560px-Uber_logo_2018.svg.png" alt="" />
        <div className='bg-white pb-7 py-5 px-4'>
            <h className='text-2xl font-bold'>Get started with Uber</h>
            <Link to= '/login'
            className='flex items-center justify-center w-full bg-black text-white py-3 rounded my-4'>Continue</Link>
        </div>
      </div>
    </div>
  )
}

export default Home
