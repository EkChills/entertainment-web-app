import React from 'react'
import LoginButton from '../components/LoginButton'
import logo from '../assets/logo.svg'
import { useNavigate } from 'react-router-dom'


const Login = ({loggedIn, setLoggedIn}) => {

  const navi = useNavigate()
  const onSubmitHandler = (e) => {
    e.preventDefault();
    console.log('i ran');
    if(!loggedIn) {
      setLoggedIn(true)
    }
    navi('/Home')
 
  }
  return (
    <div className='w-full  bg-DarkBlue  flex flex-col z-50 '>

      <img src={logo} className="mx-auto my-14 " />

      <div className="w-full min-h-[100vh] flex  justify-center">
        <form className='w-full container mx-auto px-5 ' onSubmit={onSubmitHandler}  >
        <div className="card mx-auto p-4 flex flex-col space-y-4 min-w-[20rem] max-w-[26rem] bg-SemiDarkBlue shadow-xl py-8">
          <h3 className='text-3xl text-PureWhite mb-4'>Login</h3>
          <div className="w-full py-3 border-b-2 border-GreyishBlue">
            <input type="text" className=" outline-none indent-3 w-full bg-transparent text-PureWhite caret-Red" placeholder='Email address'  />
          </div>
          <div className="w-full py-3 border-b-2 border-GreyishBlue">
            <input type="password" className=" outline-none indent-3 w-full bg-transparent text-PureWhite caret-Red" placeholder='password'  />
          </div>
          <LoginButton>Login to your account</LoginButton>
          <div className="mx-auto flex items-center space-x-1">
            <p className='text-base text-PureWhite'>Dont have an account?</p>
            <span className='text-base text-Red'>Signup</span>
          </div>
        </div>
        </form>
      </div>
      
    </div>
  )
}

export default Login