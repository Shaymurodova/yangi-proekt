import React from 'react'

const Raqam = ({num,title}) => {
  return (
    <div className='text-center w-[350px] p-2'>
        <h1 className='text-[60px] text-[black] font-bold'>{num}</h1>
        <h2 className='font-bold text-[20px] my-3 '>{title}</h2>
      
    </div>
  )
}

export default Raqam