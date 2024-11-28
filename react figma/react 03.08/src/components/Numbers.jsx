import React from 'react'

const Numbers = ({num,title,body}) => {
  return (
    <div className='text-center w-[300px] p-2'>
        <h1 className='text-[60px] text-[#F15A29] font-bold'>{num}</h1>
        <h2 className='font-bold text-[24px] my-3'>{title}</h2>
        <p className='text-[#070707]'>{body}</p>
    </div>
  )
}

export default Numbers
