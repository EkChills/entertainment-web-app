import React from 'react'
import LoginButton from '../components/LoginButton'

const Signup = () => {
  return (
    <div className='w-full min-h-[100vh] bg-DarkBlue flex justify-center items-center'>
      <form className='w-full container mx-auto px-5 '>
      <div className="card mx-auto p-4 flex flex-col space-y-4 min-w-[20rem] max-w-[26rem] bg-SemiDarkBlue py-8">
        <h3 className='text-3xl text-PureWhite mb-4'>Sign Up</h3>
        <div className="w-full py-3 border-b-2 border-GreyishBlue">
          <input type="text" className=" outline-none indent-3 w-full bg-transparent text-PureWhite caret-Red" placeholder='Email address'  />
        </div>
        <div className="w-full py-3 border-b-2 border-GreyishBlue">
          <input type="password" className=" outline-none indent-3 w-full bg-transparent text-PureWhite caret-Red" placeholder='password'  />
        </div>
        <div className="w-full py-3 border-b-2 border-GreyishBlue">
          <input type="password" className=" outline-none indent-3 w-full bg-transparent text-PureWhite caret-Red" placeholder='Repeat password'  />
        </div>
        <LoginButton>Create an account</LoginButton>
        <div className="mx-auto flex items-center space-x-1">
          <p className='text-base text-PureWhite'>Already have an account?</p>
          <span className='text-base text-Red'>Login</span>
        </div>
      </div>
      </form>
    </div>
  )
}

export default Signup