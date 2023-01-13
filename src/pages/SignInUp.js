import React from 'react'

function SignInUp() {
  let currentPath = window.location.pathname

  function Login(){
    return(
      <div>

      </div>
    )

  }
  function Signup(){
    return(
      <div>

      </div>
    )
  }

  return (
    <div className='h-screen bg-black'>
      <h1 className='text-yellow-500 text-4xl font-bold ml-3 pt-3'>Hunters Basecamp</h1>
      {
        currentPath == '/Signup' && <div>signup</div>
      }
      {
        currentPath == '/Login' && <div>login</div>
      }
    </div>
    
  )
}

export default SignInUp