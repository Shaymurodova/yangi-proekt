import React from 'react'
import img1 from '../photo/system-uicons_scale.svg'
import img2 from '../photo/car.svg'
import img3 from '../photo/cil_bathroom.svg'



const Iconka = ({but, strelka, car, dush}) => {
  return (
    <div>
       <div><button className='w-[580px] h-[3px] bg-[#222]'>{but}</button></div> 
       <div className='flex justify-between items-center mt-[50px]'>
       <button className='w-[180px] h-[55px] bg-[#0202] rounded'>
       <img src={img1} alt="" className='' />
       {strelka}
       </button>


        <button className='w-[180px] h-[55px] bg-[#0202] rounded'>
        <img src={img2} alt="" />
        {car}
        </button>

        <button className='w-[180px] h-[55px] bg-[#0202] border rounded'>
        <img src={img3} alt="" />
        {dush}
        </button>
        </div> 
      

    </div>
  )
}

export default Iconka