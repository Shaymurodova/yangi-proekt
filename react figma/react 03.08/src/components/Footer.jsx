import React from 'react'
import img from '../photo/logo.svg'
const Footer = () => {
  return (
    <footer className=' mx-auto  py-5 bg-[#333] text-[#fff] ' >
      <div className='text-center flex justify-between items-center'>
        <div className='ml-[200px] mt-[50px]'>
       <div className='flex '>
         <img src={img} alt="" />
        <h1 className='font-bold text-4xl'>EstatePro</h1></div>
        <p className='font-[50] text-[24px] my-3 w-[300px]' >Lorem ipsum dolor sit amet, consectetur adipiscing elit,
           sed doin tempor incididunt labore et magna</p>
           </div>
        
     <div className='flex justify-between items-center mr-[200px] gap-40'>
     <div>
          <h1>Footer Menu</h1>
          <ul className='mt-[30px] text-[10px] '>
            <li>Home</li>
            <li>About</li>
            <li>Properties</li>
            <li>Property Single</li>
            <li>Agents</li>
            <li>Agencts Single</li>
          </ul>
        </div>

        <div>
          <h1></h1><br></br>
          <ul className='mt-[30px] text-[10px]'>
            <li>Blog</li>
            <li>Blog post</li>
            <li>Contact</li>
            <li>FAQs</li>
            <li>Caming Scon</li>
            <li>Subrcribe us</li>
          </ul>
        </div>

        <div>
          <h1>Follow us</h1>
         <ul className='mt-[30px] text-[10px]'>
          <li>Facebook</li>
          <li>Twitter</li>
          <li>Instagram</li>
          <li>Linkedin</li>
          <li>Youtube</li>
        
         </ul>
        </div>

     </div>
    
   
        
        
        
     
       
      </div>
      
      <div>
        <button className='w-[100%] h-[3px] bg-[#222]'></button>
      </div>
      
      
      
      <div className='text-center mt-[50px]'>
      &copy; Aziza27 - 2024.10.31
      </div>
      
    </footer>
  )
}

export default Footer
