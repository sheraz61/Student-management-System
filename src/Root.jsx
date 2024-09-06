import React from 'react'
import {Outlet} from 'react-router-dom'
import {Header,Footer} from './index'
function Root() {
  return (
    <>
    <Header/>
    <Outlet/>
    <Footer/>
    </>
  )
}

export default Root