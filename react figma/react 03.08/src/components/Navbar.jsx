import React from 'react'
import { NavLink } from 'react-router-dom'
import img from '../photo/logo.svg'

const Navbar = () => {
    const active = "rounded px-4 py-2 bg-yellow-500"
    const panding = "text-white px-4 py-2"
  return (
    <nav className='bg-[#333] text-[#fff] py-4'>
    <div className="container mx-auto flex justify-between items-center ">
      <div className='flex items-center gap-2'><img src={img} alt="" />  
      <h1 className='text-3xl'>EatatePro</h1></div>

     <ul className='flex gap-10'>
         <li>
             <NavLink to="/"   className={({ isActive, isPending }) =>
    isPending ? panding : isActive ? active : ""
  }>Home</NavLink>
         </li>
         <li>
             <NavLink to="/about" className={({ isActive, isPending }) =>
    isPending ? panding : isActive ? active : ""
  }>About</NavLink>
         </li>
         <li>
             <NavLink to="/properties" className={({ isActive, isPending }) =>
    isPending ? panding : isActive ? active : ""
  }>Properties</NavLink>
         </li>
         <li>
             <NavLink to="/agents" className={({ isActive, isPending }) =>
    isPending ? panding : isActive ? active : ""
  }>Agents</NavLink>
         </li>
         <li>
             <NavLink to="/blog" className={({ isActive, isPending }) =>
    isPending ? panding : isActive ? active : ""
  }>Blog</NavLink>
         </li>
     </ul>
     <button className='bg-[#fff] text-[#333] px-4 py-2 rounded'>Get Started</button>
    </div>
 </nav>
  )
}

export default Navbar
