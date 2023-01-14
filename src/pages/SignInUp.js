import React, { useState } from 'react'
import axios from 'axios'

import Logo from '../images/Logo.png'
import { Link } from 'react-router-dom'


function SignInUp() {
  let currentPath = window.location.pathname

  function Login(){
    return(
      <div>

      </div>
    )

  }
  function Signup(){
    const [userName, setUserName] = useState()
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()
    const [confirmPassword, setConfirmPassword] = useState()
    const [error, setError] = useState()

    function SendSignUp(e){
      e.preventDefault()
      console.log(userName)
      if(password != confirmPassword){
        setError('Passwords must match')
      }
      axios.post('https://localhost:44309/api/AddUser', {
        Name: userName,
        Email: email,
        Password: password
      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
    }

    return(
      <div className='w-11/12 bg-HBCbrown mb-8 h-[450px] p-5 rounded-lg sm:w-1/2 md:h-[600px]'>

        <div className='w-full flex justify-between items-center mb-5'>
          <div className='flex flex-wrap md:justify-center'>
            <h1 className='text-HBCoffwhite text-3xl font-bold w-full basis-full lg:w-96'>Hunters Basecamp</h1>
            <p className='mt-2 text-gray-300 text-lg'>Create an account</p>
          </div>

          <figure 
          className='w-full flex justify-end h-20'>
            <Link to='/'>
            <img className='w-20 h-full' src={Logo}></img></Link>
          </figure>
        </div>
        
        <form className='flex flex-wrap h-3/4 justify-start content-start w-full sm:justify-center md:mt-24'>
          <div className='basis-full sm:text-center'>
            <input type='text' placeholder='Name'
            onChange={(e)=>{setUserName(e.target.value)}}  
            className='bg-HBCLightBrown border-b border-HBCgray p-1 rounded-lg shadow-xl sm:w-1/2'></input>
          </div>

          <div className='basis-full mt-3 sm:text-center md:mt-8'>
            <input type='text' placeholder='Email'
            onChange={(e)=>{setEmail(e.target.value)}}  
            className='bg-HBCLightBrown border-b border-HBCgray p-1 rounded-lg shadow-xl sm:w-1/2'></input>
          </div>

          <div className='basis-full mt-3 sm:text-center md:mt-8'>
            <input type='text' placeholder='Password' 
            onChange={(e)=>{setPassword(e.target.value)}} 
            className='bg-HBCLightBrown border-b border-HBCgray p-1 rounded-lg shadow-xl sm:w-1/2'></input>
          </div>

          <div className='basis-full mt-3 sm:text-center md:mt-8'>
            <input type='text' placeholder='Confirm Password'
            onChange={(e)=>{setConfirmPassword(e.target.value)}} 
            className='bg-HBCLightBrown border-b border-HBCgray p-1 rounded-lg shadow-xl sm:w-1/2'></input>
          </div>

          <button
          onClick={(e)=>SendSignUp(e)}
          className='bg-HBCpeach rounded-lg w-24 mt-14 text-white py-1 shadow-xl'>Signup</button>
          {
            error && <h1 className='text-white basis-full mt-3 text-xl font-bold'>{error}!</h1>
          }

        </form>

      </div>
    )
  }

  return (
    <div className='h-screen bg-HBCgray flex flex-wrap justify-center content-center'>
      {
        currentPath == '/Signup' && <Signup />
      }
      {
        currentPath == '/Login' && <div>login</div>
      }
    </div>
    
  )
}

export default SignInUp