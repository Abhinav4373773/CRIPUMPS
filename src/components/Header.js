import React from 'react'
import logo from "../images/logo.png"

export const Header = () => {
  return (
    <div className=' h-32 flex justify-center'>
        <img src={logo} className='h-full w-auto items-center'/>
    </div>
  )
}
