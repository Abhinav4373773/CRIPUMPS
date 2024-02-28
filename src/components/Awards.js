import React from 'react'
import one from '../images/1.png'
import two from '../images/2.png'
export const Awards = () => {
  return (
    <div className=' flex h-[100vh] px-2'>
        <img src={one} className=' w-[35%]'/>
        <div className=' flex-row w-[65%]'>
          <div className=' mx-5'>
            <h3 className=' font-bold '>C.R.I. PUMPS WINS THE NATIONAL ENERGY CONSERVATION AWARD 2018 for the 4th time.</h3>
            <ul className=' pt-3 m-2 px-2' style={{ listStyleType: 'disc' }}>
                <li>C.R.I.'s energy efficient products are well recognized by various Government Institutions, as trustworthy products for various projects across the globe to save energy.</li>
                <li>C.R.I. is the highest contributor in the country for the projects of EESL (Energy Efficiency Services Limited) to replace the old inefficient pumps with 5 Star rated energy efficient smart pumps with IoT enabled control panel.</li>
            </ul>
          </div>
          <img src={two} className=' w-[100%] mx-auto h-[70%]'/>
          <p>Government of India has awarded the <span className=' font-semibold'>"National Energy Conservation Award 2018"</span>. Mr. G. Selvaraj, Joint Managing Director of C.R.I. Group received the award from Smt. Sumitra Mahajan, Speaker of Lok Sabha & Shri. Raj Kumar Singh, Honorable Minister of State.</p>
        </div>
    </div>
  )
}
