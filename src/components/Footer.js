import React from 'react'
import { IconContext } from 'react-icons';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faPhone, } from '@fortawesome/free-solid-svg-icons'
import { FaPhone } from "react-icons/fa6";
import { FaFacebook } from 'react-icons/fa6';
import { FaGlobe } from "react-icons/fa6";

export const Footer = () => {
  return (
    <div className='py-2 px-2'>
        <h3 className='font-bold text-center py-3'>C.R.I. FLUID SYSTEMS PRODUCTS CATER TO DIVERSE SEGMENTS</h3>
        <p className=' flex text-center px-5 pb-5'>CHEMICALS & PROCESS POWER WATER & WASTE WATER OILS & GAS PHARMA SUGARS & DISTILLERIES PAPER & PULP MARINE & DEFENCE METAL & MINING FOOD & BEVERAGE PETROCHEMICAL & REFINERIES SOLAR BUILDING HVAC FIRE FIGHTING AGRICULTURE & RESIDENTIAL</p>
        <div className=' bg-red-500 h-[20vh] flex justify-around items-center '>
          <div className='flex items-baseline space-x-1'>
             <div className='h-7 w-7 p-2 rounded-full bg-white flex items-center justify-center'><FaPhone style={{color:'red'}}/></div>
             <p>Toll free: 1800 200 1234</p>
          </div>
          <div className='flex items-baseline space-x-1'>
             <FaFacebook className=' h-7 w-7' style={{color:'white'}}/>
             <a href='www.facebook.com/cripumps'>www.facebook.com/cripumps</a>
          </div>
            <div className='flex items-baseline space-x-1'>
            <FaGlobe className=' h-7 w-7' style={{color:'white'}}/>
            <a href='www.crigroups.com'>www.crigroups.com</a>
            </div>
        </div>
    </div>
  )
}
