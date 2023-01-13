import React from 'react'
import LandingPage from '../images/LandingPageImage.jpg'
import { Link } from "react-router-dom";

function Index() {
  return (
    <div className='h-screen'>
        <figure className='m-0 h-1/3 w-full'>
            <img src={LandingPage} className='object-cover w-full h-full'></img>
        </figure>
        <div className='h-2/3 w-full bg-gray-700 px-2 pt-3'>
            <h1 className='text-4xl font-bold text-yellow-500'>Hunters Basecamp</h1>
            <p className='text-white text-lg px-4'>Welcome to Hunters Basecamp the ultimate destination for hunters across North America. Connect with fellow hunters, share your experiences, and discover new hunting spots with our comprehensive mapping tools. Network with other hunters through our forums and messaging features. Find the best hunting spots, get the latest weather forecast and hunting regulations, and even plan your next hunting trip.</p>
            <div className='flex w-full justify-evenly mt-5'>
                <Link to={'Signup'} className='bg-yellow-600 w-28 h-10 rounded-lg text-white flex justify-center items-center'>Signup</Link>
                <Link to={'Login'}  className='bg-yellow-600 w-28 h-10 rounded-lg text-white flex justify-center items-center'>Login</Link>
            </div>
            
        </div>
    </div>
  )
}

export default Index