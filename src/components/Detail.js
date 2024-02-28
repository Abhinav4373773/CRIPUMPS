import React from 'react'
import three from '../images/3.png'

export const Detail = () => {
  return (
    <div className=' flex-row pt-2'>
        <p className='flex justify-center font-medium'>INSTALLED OVER 10 LAKHS STAR RATED PUMPSETS ACROSS THE COUNTRY RESULTING IN A CUMULATIVE SAVING OF MORE THAN 9,000 MILLION UNITS OF POWER FOR THE NATION.</p>
        <img src={three} className='w-[75%] mx-auto py-2'/>
        <p className=' flex justify-center py-2'>Valves - Pumps - Pipes - IoT Drives & Controllers - Wires & Cables - Solar Systems - Motors </p>
        <hr
            style={{
          background: 'red',
          color: 'red',
          borderColor: 'red',
          height: '3px',
          width:'95%'
        }}
        className='mx-auto'
        />
    </div>
  )
}
