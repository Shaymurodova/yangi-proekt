import React from 'react'
import img from '../photo/Rectangle.svg'
import img1 from '../photo/ci_location.svg'
import img2 from '../photo/Frame 1951.svg'
import img3 from '../photo/Rectangle 5.svg'
import Raqam from '../components/Raqam'
import img4 from '../photo/Rectangle 5 (4).svg'
import img5 from '../photo/Rectangle 5 (3).svg'
import img6 from '../photo/Rectangle 5 (2).svg'
import Iconka from '../components/Iconka'
import Button from '../components/Button'
import img7 from '../photo/image 40.png'
import img8 from '../photo/Ellipse 198.png'
import img9 from '../photo/Group (1).png'
import img10 from '../photo/date.png'
import img11 from '../photo/icon (3).png'
import img12 from '../photo/Rectangle 417.png'
import img13 from '../photo/Rectangle 417 (1).png'
import img14 from '../photo/Rectangle 417 (2).png'

const Home = () => {
  return (
    <>
      <div className='  mx-auto  bg-[#333] text-white py-[100px] gap-5       '>
        <div className='container mx-auto flex justify-between items-center'>
        <div> <h1 className='font-bold text-5xl text-center justify-center w-[500px] p-2 ' >The Best Place </h1>
        <h1 className='font-bold text-5xl text-center justify-center w-[500px] p-2 '>To Find Your</h1>
         <h1 className='font-bold text-5xl text-center justify-center w-[500px] p-2 text-[#F15A29] '>Dream House</h1></div>
      <div className='text-center justify-center w-[500px] p-2'>
        <p className='font-[200] text-[24px] my-3 size-left'>We Are  Real Estate Agency That Willhelp You Designing A Modern And Minimalist Dream House, Let’s Discuss.</p>
        <button className='bg-[#F15A29] text-white px-4 py-2 rounded mt-[50px]'>Get In Touch</button>
        <div className='flex justify-between items-center mt-[50px]'>
         
        <div> <h1>1200+</h1>
        <p>Premium Product</p></div>
        <div> <h1>4500+</h1>
        <p>Happy Customers</p></div>
        <div> <h1>240+</h1>
        <p>Award Winning</p></div>
        </div>
      </div>


        </div>
     <div className='container mx-auto flex justify-between items-center mt-[150px] mx-[300px] '>
      <img src={img} alt="" />
     </div>
     <div>
      <button className=' w-[650px] h-[85px] bg-[white] text-[#333] px-4 py-2 rounded  mx-[180px]'>
        <div className='flex justify-between items-center'>    <img src={img1} alt="" />
        <h1>Search by location</h1>
        <button className='bg-[#F15A29] text-white px-4 py-2 rounded'>Search Now</button></div>
    

      </button>
     </div>
       
    </div>
    <div className='container mx-auto flex justify-between items-center mt-[80px]'> 
      <div><h1 className=' text-3xl'>Trusted by</h1></div>
      <div><img src={img2} alt="" /></div>
    </div>
   <div><button className='w-[1250px] h-[3px] bg-[#333] mt-[100px] mx-auto ml-[175px]'></button></div>  
   
   
   
   <div>
   <div className='text-center justify-center w-[500px] p-2 font-bold text-5xl ml-[120px] mt-[100px]'><h1>Popular Resident</h1></div> 
    <div className='container mx-auto mt-[100px] relative mt-[-300px]'>
      <div className='text-center justify-center  flex justify-between items-center relative'>
       <div className=''>
             <img src={img3} alt="" />
             <button className='w-[140px] h-[3px] bg-[#333] ml-[-440px]'></button>
             <Raqam num="$59,345" title="Home in Downtown, Los Angeles" />
             <Iconka but="" strelka="2500sqft" car="3" dush="2"/>
        </div>
 
        <div className='pt-[700px]'>
            <img src={img4} alt="" />
             <button className='w-[140px] h-[3px] bg-[#333] ml-[-440px]'></button>
             <Raqam num="$79,345" title="Home in Downtown, Los Angeles" />
             <Iconka but="" strelka="3000sqft" car="4" dush="3"/>

             </div>

      </div>
      
      <div className='flex justify-between items-center mt-[100px] relative'> 
      <div className='mt-[-500px]'>
          <img src={img5} alt="" />
          <button className='w-[140px] h-[3px] bg-[#333]'></button>
          <Raqam num="$59,345" title="Home in Downtown, Los Angeles" />
          <Iconka but="" strelka="2500sqft" car="3" dush="2"/>
      </div>
        <div className='pt-[px]'>
          <img src={img6} alt="" />
          <button className='w-[140px] h-[3px] bg-[#333]'></button>
          <Raqam num="$59,345" title="Home in Downtown, Los Angeles" /> 
          <Iconka but="" strelka="5550sqft" car="6" dush="5"/>
        </div>

      
</div>


     
    </div>
   
   </div>
   <div>
   <div className='text-center justify-center mt-[100px] w-[100%]'> 
    <h1 className='text-8xl bold font-[700] ml-[500px]'>What our clients say</h1>
    <img src={img7} alt="" className='mx-auto w-[1500px] h-[1100px] mt-[80px]'/>
    </div>
    <div className='card w-[600px] h-[400px] bg-white text-[#333] px-[4px] py-[2px] raunded-md mx-[180px] border-[2px] text-center gap-4 mt-[-300px] ml-[800px] absolute'>
      <h1 className='text-28xl font-bold pt-[50px]'>“They did an amazing job for our house.”</h1>
      <p className='text-[16px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit cilisis pretium leo pellentesque ultrices est varius amet rhoncus sed euismod sit id purus elementum nulla tincidunt massa vel.</p>
      <div className='flex items-center mt-[50px] ml-[30px]'>
    <img src={img8} alt="" />
    <button className='w-[30px] h-[3px] bg-[#0202] left-[5px]'></button>
      <h3 className='text-2xl font-[500]'>Tony Stark</h3>
    </div>
    </div>
    <button className='bg-[#F15A29] text-center w-[206px] h-[50px] ml-[1000px] mt-[190px] justify-center text-white'>Get in touch</button>
   </div>


   
    <div>
    <img src={img9} alt="" className='w-[1500px] h-[1500px] ml-[350px] mt-[100px]' />
    </div>

     <div  className='text-center justify-center w-[67%] bg-white text-[#333] gap-4 ml-[250px] mt-[100px] '>
      <div>
        <h1 className='text-8xl font-bold font-500' >With us help you find your dream <br /> home</h1>
        <p className='text-[45px] mt-[30px] font-100 font-left'>Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus <br /> venenatis, lectus magna.</p>
      </div>
      <div className='flex justify items-center mt-[100px] gap-8'>
      <div>
        <h3 className='text-8xl font-[500]'>127</h3>
        <p className='text-[24px]'>Properties build</p>
      </div>
      <div className='ml-[150px]'>
        <h3 className='text-8xl font-[500]'>300+</h3>
        <p className='text-[24px]'>Happy Customers</p>
      </div>
      <div className='ml-[150px]'>
        <h3 className='text-8xl font-[500]'>10</h3>
        <p className='text-[24px]'>Years of experience</p>
      </div>
      </div>
     </div>



     <div>
   <div className='text-center justify-center mt-[100px] w-[100%]'> 
    <h1 className='text-8xl bold font-[700] ml-[100px]'>What our clients say</h1>
    <img src={img7} alt="" className='mx-auto w-[1500px] h-[1100px] mt-[80px]'/>
    </div>
    <div className='card w-[600px] h-[400px] bg-white text-[#333] px-[5px] py-[2px] raunded-md mx-[180px] border-[2px] text-center gap-4 mt-[-300px] ml-[800px] absolute'>
      <h1 className='text-2xl font-bold font-[500] pt-[50px] leading-10 mt-[20px]'>Why a luxury home in a gated community <br /> is a better investment option</h1>
      <p className='text-[18px] leading-8 mt-[20px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit cilisis pretium leo pellentesque ultrices est varius amet rhoncus sed euismod sit id purus elementum nulla tincidunt massa vel.</p>
      <button className='w-[524px] h-[1px] bg-slate-100'></button>
      <div className='flex items-center mt-[50px] ml-[30px] justify-center gap-8'>
      <img src={img10} alt="" />
      <img src={img11} alt="" />
      <h4 className='text-[#070707]'>10 min read</h4> 
    </div>
    </div> 
   </div>

   <div>
    <div className='border w-[420px] h-[600px] mt-[200px] rounded ml-[400px]'>
      <img src={img12} alt=""  className='w-[600px] h-[300px]'/>
      <h1 className='font-bold mt-[50px] ml-[20px] text-2xl'>The Future of Real <br /> Estate: Trends to <br /> Watch Out for in 2023</h1>
      <button className='w-[420px] h-[1px] bg-slate-300'></button>
      <img src={img10} alt="" className='ml-[15px]'/>
      <img src={img11} alt="" className='mt-[20px] ml-[15px]' />
      <h4 className='text-[#070707] mt-[-25px] ml-[55px] text-1xl'>10 min read</h4> 
    </div>
    <div className='border w-[420px] h-[600px] mt-[-600px] rounded ml-[1000px]'>
      <img src={img13} alt="" className='w-[600px] h-[300px]' />
      <h1 className='font-bold mt-[50px] ml-[20px] text-2xl'>Top 10 Cities for Real <br /> Estate Investment in <br /> 2023</h1>
      <button className='w-[420px] h-[1px] bg-slate-300'></button>
      <img src={img10} alt=""  className='ml-[15px]'/>
      <img src={img11} alt="" className='mt-[20px] ml-[15px]' />
      <h4 className='text-[#070707] mt-[-25px] ml-[55px] text-1xl'>10 min read</h4> 
    </div>
    <div className='border w-[420px] h-[600px] mt-[-600px] rounded ml-[1600px]'>
      <img src={img14} alt=""  className='w-[600px] h-[300px]' />
      <h1 className='font-bold mt-[35px] ml-[20px] text-2xl'>Buying vs. Renting: <br /> Which Option Makes <br /> More Sense in Today's <br /> Market?</h1>
      <button className='w-[420px] h-[1px] bg-slate-300 mt-[-20px]' ></button>
      <img src={img10} alt=""  className='ml-[15px]'/>
      <img src={img11} alt="" className='mt-[20px] ml-[15px]' />
      <h4 className='text-[#070707] mt-[-25px] ml-[55px] text-1xl'>10 min read</h4>
    </div>
   </div>

   <Button />
   
   
   
   

    
    </>
  
  )
}

export default Home
