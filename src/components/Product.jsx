import React from 'react'
import{IoIosArrowBack} from 'react-icons/io'
import{AiFillStar,AiOutlineStar} from 'react-icons/ai'

const Product = () => {
  const product =[{
    img:"https://i.pinimg.com/564x/50/d0/b0/50d0b0b654fdc77cf8bb73620efa95fb.jpg",
    great: <div className='flex'>
      <AiFillStar/>
      <AiFillStar/>
      <AiFillStar/>
      <AiFillStar/>
      <AiOutlineStar/>
    </div>,
    NameProduct:"Skincare",
    price:"$ 16.00"
  },{
    img:"https://i.pinimg.com/564x/7d/cc/99/7dcc998f16e2ee44adf8ab6e4e9fc526.jpg",
    great: <div className='flex'>
      <AiFillStar/>
      <AiFillStar/>
      <AiFillStar/>
      <AiFillStar/>
    </div>,
    NameProduct:"Skincare",
    price:"$ 16.00"
  },{
    img:"https://i.pinimg.com/564x/02/10/f9/0210f96440da78682facff46edf35b80.jpg",
    great: <div className='flex'>
      <AiFillStar/>
      <AiFillStar/>
      <AiFillStar/>
      <AiFillStar/>
      <AiOutlineStar/>
    </div>,
    NameProduct:"Skincare",
    price:"$ 16.00"
  },{
    img:"https://i.pinimg.com/736x/29/28/6b/29286b8501a1c21be13392a9853d611e.jpg",
    great: <div className='flex'>
      <AiFillStar/>
      <AiFillStar/>
      <AiFillStar/>
      <AiFillStar/>
      <AiOutlineStar/>
    </div>,
    NameProduct:"Skincare",
    price:"$ 16.00"
  }]
  return (
    <div className=' w-full lg:h-[60vh] h-[200vh] bg-[#FBE9E7]'>
      <div className='w-[95%] h-full m-auto lg:ml-24 ml-8'>
        <h1 className='text-2xl'>Our Products</h1>
        <br />
        <div className='w-full h-[40vh] lg:flex grid grid-cols-1 gap-10 lg:px-28 px-0 lg:ml-0 ml-[-20px]'>
          <div className='pt-24 lg:flex hidden'>
            <IoIosArrowBack className=' w-[50px] h-[50px] border-2 border-black rounded-full'/>
          </div>
          {
              product.map((item,index)=>{
                return(
                  <div className='lg:w-[200px] w-[260px] lg:h-full h-[370px] mx-auto  shadow-lg shadow-slate-500 hover:border-2 border-black rounded-lg'>
                  <div className='lg:w-[200px] lg:h-[33vh] h-[315px]'>
                    <div className='lg:w-[150px] w-[230px] lg:h-[20vh] h-[27vh]  m-auto '>
                       <img className='w-full h-full object-cover mt-3' src={item.img} alt="" />
                     </div>
                     <div className='mt-3 px-3'>
                       <span>{item.great}</span>
                       <h1>{item.NameProduct}</h1>
                      <p>{item.price}</p>
                     </div>
                    
                   
                  </div>
            
                  <div className='w-full h-[5vh]'>
                    <button className='w-full lg:h-[38px] h-[37px] bg-[#FFCCBC] text-white rounded-b-lg mt-1'>Add to cat</button>
                    </div>

                  </div>
                )
              })
            }

<div className='pt-24 ml-10'>
            <IoIosArrowBack className='w-[50px] h-[50px] border-2 border-black rounded-full lg:fext hidden'/>
          </div>

        </div>
      </div>
      
    </div>
  )
}

export default Product