import React from 'react'

const LoginButton = ({children}) => {
  return (
    <button type='submit' className="btn bg-Red hover:bg-PureWhite hover:text-DarkBlue">
      {children}
    </button>
  )
}

export default LoginButton