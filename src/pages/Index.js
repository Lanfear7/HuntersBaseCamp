import React, { useEffect } from 'react'
import LandingPage from '../images/LandingPageImage.jpg'
import Logo from '../images/Logo.png'
import { Link } from "react-router-dom";
import { useSpring , useTransition , animated } from '@react-spring/web'

function Index() {

  const LogoFade = useSpring({
    from: {opacity : 0},
    to: { opacity : 1},
    delay: 400,
    config:{
      duration : 900,
    }
  })

  const headingSpring = useSpring({
    from: { x: -800, },
    to: { x: 0 },
    delay : 300,
    config:{
      duration : 900,
    }
  })

  const contentSpring = useSpring({
    from: { y: 500, },
    to: { y: 0 },
    delay : 1200,
    config:{
      duration : 600,
    }
  })

  const buttonAnimation = useSpring({
    from: { opacity: 0 },
    to: { opacity : 1 },
    delay : 1900,
    config:{
      duration : 1400,
    }
  })

  return (
    <div className='h-screen'>
        <div className='h-full w-full bg-HBCgray px-2 pt-3'>
            <animated.figure 
            style={LogoFade}
            className='m-0 absolute top-12 right-3 h-24 w-24'>
              <img className='w-full h-full' src={Logo}></img>
            </animated.figure>
            <animated.h1
            style={headingSpring}
            className='text-5xl font-bold text-HBCoffwhite mt-8'
            >Hunters Basecamp</animated.h1>
            <animated.p 
            style={contentSpring}
            className='text-white text-lg px-4 mt-12'>Welcome to Hunters Basecamp the ultimate destination for hunters across North America. Connect with fellow hunters, share your experiences, and discover new hunting spots with our comprehensive mapping tools. Network with other hunters through our forums and messaging features. Find the best hunting spots, get the latest weather forecast and hunting regulations, and even plan your next hunting trip.</animated.p>
            <animated.div 
            style={buttonAnimation}
            className='flex w-full justify-evenly mt-12 bg-HBCgray'>
                <Link to={'Signup'} className='bg-HBCpeach w-28 h-10 rounded-lg text-white flex justify-center items-center'>Signup</Link>
                <Link to={'Login'}  className='bg-HBCpeach w-28 h-10 rounded-lg text-white flex justify-center items-center'>Login</Link>
            </animated.div>
            <div className='bg-HBCgray h-full relative z-20'></div>     
        </div>
    </div>
  )
}

export default Index