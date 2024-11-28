import React from 'react'
import Numbers from '../components/Numbers'
import Button from '../components/Button'
import img from '../photo/Rectangle 4665.png'
import img1 from '../photo/Rectangle 4666.png'
import img2 from '../photo/template-p-500 (5).png'
import img3 from '../photo/template-p-500.(3).png'
import img4 from '../photo/template-p-500.jpg (4).png'
import img5 from '../photo/template-p-500.jpg (2).png'
import img6 from '../photo/template-p-500.jpg.png'
import img7 from '../photo/template-p-500.jpg (1).png'
import img8 from '../photo/Rectangle 417.png'
import img9 from '../photo/Rectangle 417 (1).png'
import img10 from '../photo/Rectangle 417 (2).png'
import img11 from '../photo/date.png'
import img12 from '../photo/icon (3).png'

const About = () => {
  return (
 <>
  <div>
    <div>
      <h1 className='text-8xl font-bold ml-[350px] mt-[200px]'>About Our Real <br /> Estate Firm</h1>
      <p className='text-2xl text-zinc-600 ml-[350px] mt-[100px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit et dui <br /> tellus morbi integer neque, malesuada ac nulla tellu</p>
      <button className='w-[152px] h-[58px] bg-[#F15A29] text-white rounded-2xl ml-[350px] text-1xl font-bold'>Join our team</button>  
      <button className='w-[152px] h-[58px] border rounded-2xl ml-[20px] text-1xl font-bold ' >Know more</button>
      <img src={img} alt="" className='w-[1000px] h-[850px] mt-[80px] ml-[350px]' />
      <img src={img1} alt="" className='w-[900px] h-[650px] mt-[-450px] ml-[1000px]' />
    </div>
  </div>


    <div className='container mx-auto'>
        <h1 className='text-center text-6xl bold font-bold mt-[100px]'> Take a look at our numbers</h1>

        <div className='flex justify-between items-center mt-[50px]'>
            <Numbers num="99%" title="Customer satisfaction" body="Lorem ipsum dolor sit amet dolor sit consectetur adipiscing."/>
            <Numbers num="49K" title="Successful Sales" body="Lorem ipsum dolor sit amet dolor sit consectetur adipiscing."/>
            <Numbers num="12M" title="Real Estate Partners" body="Lorem ipsum dolor sit amet dolor sit consectetur adipiscing."/>
        </div>
   </div>


   
    <div>
     <h1 className='text-center mt-[100px] font-bold text-7xl'>Meet our team members</h1>
      <div className='card w-[500px] h-[700px] border ml-[500px] mt-[100px] rounded-md'>
        <img src={img2} alt="" className='w-[500px]' />
        <h1 className='font-bold text-4xl mt-[50px] ml-[50px]'>Tom holland</h1>
        <p className='mt-[20px] ml-[50px]'>Lorem ipsum dolor sit amet, <br /> consectetur adipiscing elit.</p>
      </div>

      <div className='card w-[500px] h-[700px] border ml-[1200px] mt-[-700px] rounded-md'>
        <img src={img3} alt="" className='w-[500px]' />
        <h1 className='font-bold text-4xl mt-[50px] ml-[50px]'>Scarlett Johansson</h1>
        <p className='mt-[20px] ml-[50px]'>Lorem ipsum dolor sit amet, <br /> consectetur adipiscing elit.</p>
      </div>
      

      <div className='card w-[500px] h-[700px] border ml-[500px] mt-[100px] rounded-md'>
        <img src={img4} alt="" className='w-[500px]' />
        <h1 className='font-bold text-4xl mt-[50px] ml-[50px]'>Chris Evans</h1>
        <p className='mt-[20px] ml-[50px]'>Lorem ipsum dolor sit amet, <br /> consectetur adipiscing elit.</p>
      </div>

      <div className='card w-[500px] h-[700px] border ml-[1200px] mt-[-700px] rounded-md'>
        <img src={img5} alt="" className='w-[500px]' />
        <h1 className='font-bold text-4xl mt-[50px] ml-[50px]'>Sam Wilson</h1>
        <p className='mt-[20px] ml-[50px]'>Lorem ipsum dolor sit amet, <br /> consectetur adipiscing elit.</p>
      </div>

      <div className='card w-[500px] h-[700px] border ml-[500px] mt-[100px] rounded-md'>
        <img src={img6} alt="" className='w-[500px]' />
        <h1 className='font-bold text-4xl mt-[50px] ml-[50px]'>Steve Rogers</h1>
        <p className='mt-[20px] ml-[50px]'>Lorem ipsum dolor sit amet, <br /> consectetur adipiscing elit.</p>
      </div>

      <div className='card w-[500px] h-[700px] border ml-[1200px] mt-[-700px] rounded-md'>
        <img src={img7} alt="" className='w-[500px]' />
        <h1 className='font-bold text-4xl mt-[50px] ml-[50px]'>Tony Stark</h1>
        <p className='mt-[20px] ml-[50px]'>Lorem ipsum dolor sit amet, <br /> consectetur adipiscing elit.</p>
      </div>
   </div>

    <div>
      <h1 className='font-bold text-5xl text-center mt-[100px]'>Articles & Resources</h1>
      <div className='border w-[420px] h-[600px] mt-[200px] rounded ml-[400px]'>
        <img src={img8} alt=""  className='w-[600px] h-[300px]' />
        <h1 className='font-bold mt-[50px] ml-[20px] text-2xl'>The Future of Real <br /> Estate: Trends to <br /> Watch Out for in 2023</h1>
      <button className='w-[420px] h-[1px] bg-slate-300'></button>
      <img src={img11} alt="" className='ml-[15px]'/>
      <img src={img12} alt="" className='mt-[20px] ml-[15px]' />
      <h4 className='text-[#070707] mt-[-25px] ml-[55px] text-1xl'>10 min read</h4> 
      </div>

      <div className='border w-[420px] h-[600px] mt-[-600px] rounded ml-[1000px]'>
        <img src={img9} alt=""  className='w-[600px] h-[300px]' />
        <h1 className='font-bold mt-[50px] ml-[20px] text-2xl'>Top 10 Cities for Real <br /> Estate Investment in <br /> 2023</h1>
        <button className='w-[420px] h-[1px] bg-slate-300'></button>
        <img src={img11} alt="" className='ml-[15px]'/>
      <img src={img12} alt="" className='mt-[20px] ml-[15px]' />
      <h4 className='text-[#070707] mt-[-25px] ml-[55px] text-1xl'>10 min read</h4> 
      </div>

      <div  className='border w-[420px] h-[600px] mt-[-600px] rounded ml-[1600px]'>
        <img src={img10} alt="" className='w-[600px] h-[300px]' />
        <h1 className='font-bold mt-[35px] ml-[20px] text-2xl'>Buying vs. Renting: <br /> Which Option Makes <br /> More Sense in Today's <br /> Market?</h1>
        <button className='w-[420px] h-[1px] bg-slate-300'></button>
        <img src={img11} alt="" className='ml-[15px]'/>
      <img src={img12} alt="" className='mt-[20px] ml-[15px]' />
      <h4 className='text-[#070707] mt-[-25px] ml-[55px] text-1xl'>10 min read</h4> 
      </div>
    </div>
   
   

   <Button/>
 </>



    
   

   
  )
}

export default About
