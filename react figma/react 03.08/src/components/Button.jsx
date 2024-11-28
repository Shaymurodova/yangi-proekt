import React from 'react'

const Button = () => {
  return (
    <div className='flex justify-center items-center w-[100%] p-2 relative'>
      <button className='w-[1400px] h-[355px] bg-[#F15A29] rounded mt-[100px] '>
         <div className='flex justify-between items-center '>  
            <h1 className='text-white text-5xl font-bold w-[80%] mx-[100px] relative'>Subscribe to our weekly newsletter</h1> 
           <button className='bg-white text-[#333] px-4 py-2 rounded w-[1000px] h-[85px] mx-[100px] flex justify-between items-center'>Enter email address...
             <button className='bg-[#F15A29] text-white px-4 py-2 rounded w-[150px] h-[40px] mx-[60px]'> Get in Touch</button></button>
             </div>
            </button>
    </div>
  )
}

export default Button