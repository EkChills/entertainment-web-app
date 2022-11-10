import React from 'react'
import LoginButton from '../components/LoginButton'
import { useNavigate } from 'react-router-dom'


const Signup = ({loggedIn, setLoggedIn}) => {
  const [userValues, setUserValues] = React.useState({
    email: '',
    password: '',
    repeatPassword: ''
  })
  const [invalid, setInvalid] = React.useState(null)

  const handleInputChange = (e) => {
    const {name, value} = e.target
    setUserValues(prev => ({...prev, [name]:value}))
  }

  const navigator = useNavigate();


  const onSubmitHandler = (e) => {
    e.preventDefault();
    if(userValues.email === '' || userValues.password === '' || userValues.repeatPassword === '') {
      setInvalid(true)
      return
    }
    else {
      setLoggedIn(true)
      setInvalid(false)
      navigator('/Home')
    }
  }

  console.log(userValues);
  return (
    <div className='w-full min-h-[100vh] bg-DarkBlue flex justify-center items-center'>
      <form className='w-full container mx-auto px-5 ' onSubmit={onSubmitHandler} >
      <div className="card mx-auto p-4 flex flex-col space-y-4 min-w-[20rem] max-w-[26rem] bg-SemiDarkBlue py-8">
        <h3 className='text-3xl text-PureWhite mb-4'>Sign Up</h3>
        <div className={`w-full py-3 border-b-2 ${invalid && userValues.email === '' ? 'border-Red' : 'border-GreyishBlue'} ${invalid && userValues.email === '' ? 'flex justify-between' : 'block'} `}>
          <input name="email" value={userValues.email} onChange={handleInputChange} type="text" className={` outline-none indent-3 ${invalid && userValues.email === '' ? 'w-auto' : 'w-full'}  bg-transparent text-PureWhite caret-Red" placeholder='Email address`} />
          {invalid && userValues.email === '' && <p className='text-Red'>Can't be empty</p>}
        </div>
        <div className={`w-full py-3 border-b-2 ${invalid && userValues.password === '' ? 'border-Red' : 'border-GreyishBlue'} ${invalid && userValues.password === '' ? 'flex justify-between' : 'block'} `}>
          <input name="password" value={userValues.password} onChange={handleInputChange} type="text" className={` outline-none indent-3 ${invalid && userValues.password === '' ? 'w-auto' : 'w-full'}  bg-transparent text-PureWhite caret-Red" placeholder='Email address`} />
          {invalid && userValues.password === '' && <p className='text-Red'>Can't be empty</p>}
        </div>
        <div className={`w-full py-3 border-b-2 ${invalid && userValues.repeatPassword === '' ? 'border-Red' : 'border-GreyishBlue'} ${invalid && userValues.repeatPassword === '' ? 'flex justify-between' : 'block'} `}>
          <input name="repeatPassword" value={userValues.repeatPassword} onChange={handleInputChange} type="text" className={` outline-none indent-3 ${invalid && userValues.repeatPassword === '' ? 'w-auto' : 'w-full'}  bg-transparent text-PureWhite caret-Red" placeholder='Email address`} />
          {invalid && userValues.repeatPassword === '' && <p className='text-Red'>Can't be empty</p>}
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