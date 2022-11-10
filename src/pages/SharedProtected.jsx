import { Outlet } from "react-router-dom";
import SideBar from "../components/SideBar";
import React from 'react'

const SharedProtected = () => {
  return (
    <>
      <SideBar />
      <Outlet />
    </>
  )
}

export default SharedProtected