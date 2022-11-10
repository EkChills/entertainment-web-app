import { Outlet } from "react-router-dom";
import SideBar from "../components/SideBar";
import React from 'react'

const SharedLayout = ({loggedIn}) => {
  return (
    <>
      {loggedIn && <SideBar />}
      <Outlet />
    </>
  )
}

export default SharedLayout