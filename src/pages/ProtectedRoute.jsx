import { Navigate } from "react-router-dom";

import React from 'react'

const ProtectedRoute = ({children, loggedIn}) => {
  if (!loggedIn) {
    return <Navigate to="/" />
  } 
  return children
}

export default ProtectedRoute