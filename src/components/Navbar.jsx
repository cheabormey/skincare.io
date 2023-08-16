import React, { useEffect, useState } from 'react'
import{BsSearchHeart} from 'react-icons/bs'
import{AiOutlineShoppingCart} from 'react-icons/ai'
import{BsBell} from 'react-icons/bs'
import{FaBars} from 'react-icons/fa'

const Navbar = () => {
  const menu = [{
    name:"Home"
  },{
    name:"About us"
  },{
    name:"Products"
  },{
    name:"Contact us"
  }]


  return (
    <div className='w-full lg:h-[10vh] h-[6vh] flex justify-between items-center  lg:bg-[#FBE9E7]  md:bg-slate-400 bg-[#FFAB91] border-slate-500 border-b-[1px] px-5'>
      {/* <div> */}
        {/* <img className='w-[60px] rounded-full border-[1px] border-black' src="https://i.pinimg.com/564x/5c/57/e4/5c57e45a8d8f6debcc8e4a16561954d5.jpg" alt="" /> */}
      {/* </div>   */}
      <div className='flex items-center'>
        <img className='lg:w-[60px] w-[50px] lg:ml-0 ml-[-10px] rounded-full border-[1px] border-black' src="https://i.pinimg.com/564x/5c/57/e4/5c57e45a8d8f6debcc8e4a16561954d5.jpg" alt="" />

        <ul className='lg:flex md:flex hidden gap-10 text-xl lg:ml-40 ml-0'>
          {
            menu.map((data,index)=>{
              return(
                <li className=' hover:border-b-2 border-slate-500' key={index}>{data.name}</li>
              )
            })
          }
        </ul>
      </div>
      <div className='flex items-center '>
        <span className='flex items-center'>
          <input className='lg:w-60 w-[220px] h-8 pl-5 text-sm rounded-xl border-2 border-slate-500' type="text" name="" id="" placeholder='Search products here'/>
          <BsSearchHeart className='lg:ml-[-30px] ml-[-28px]'/>
        </span>
        <span className='flex gap-3 lg:ml-10 ml-6 lg:text-2xl text-lg'>
          <AiOutlineShoppingCart/>
          <BsBell/>
          <FaBars/>
        </span>
      </div>
    </div>
    
  )
}

export default Navbar