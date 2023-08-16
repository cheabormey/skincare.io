import React, { useState } from 'react'
import {AiOutlineUser} from 'react-icons/ai'
import{RiCustomerService2Line} from 'react-icons/ri'
import{AiFillSetting} from 'react-icons/ai'
import{LiaLanguageSolid} from 'react-icons/lia'
import{BsExclamation} from 'react-icons/bs'
import{SlCallEnd} from 'react-icons/sl'
import{BiDotsHorizontalRounded} from 'react-icons/bi'




const Home = () => {
    // funtiion menu
    const logo = "https://geerlingsfacialaesthetics.com/wp-content/uploads/sites/265/2020/11/shutterstock_1401991721__1_-rx.jpg";
    const [menu, setMenu] = useState(false);
    const handleMenu = () => {
        setMenu(!menu);
    }
    const categories = [{
        img:"https://th.bing.com/th/id/R.45442a40d1baa7873a250a06013bbba3?rik=TpvhqWJuYLcJjA&riu=http%3a%2f%2fwww.heronpress.co.uk%2fwp-content%2fuploads%2f2017%2f07%2fnew-6.jpg&ehk=l8t48LAPTTXhNHic%2bqzxVvi%2b7RuLSB71LgtTWHTNPUQ%3d&risl=&pid=ImgRaw&r=0",
        text_1:"New",
        text_2: "Arrial"
    },{
        img:"https://i.pinimg.com/564x/c6/b0/9a/c6b09a8ee2f554e27d53774471d4696f.jpg",
        text_1:"Bast",
        text_2: "Seller"
    },{
        img:"https://i.pinimg.com/564x/c8/da/da/c8dada674b610cb5bb1c042981c1c213.jpg",
        text_1:"Discount",
        text_2: ""
    },{
        img:"https://i.pinimg.com/564x/71/b5/66/71b5661ad454797ad0d5db517f101d46.jpg",
        text_1:"Skincare",
        text_2: ""
    },{
        img:"https://i.pinimg.com/564x/fe/5e/d3/fe5ed31e8c4e9836f0ecf5e03a97290f.jpg",
        text_1:"Body",
        text_2: "Lotion"
    },{
        img:"https://i.pinimg.com/564x/fa/05/dc/fa05dca0a7d56487e0e907e0ac1e8bcc.jpg",
        text_1:"Cosmetic",
        text_2: ""
    }]
  return (
    <div className=' lg:w-full w-[390px] lg:h-[90vh] h-[100vh] bg-[#FBE9E7]' >
        {/*  */}
        <div className='w-full '>
            <div className="w-full lg:flex xl:flexx md:flex grid items-center  max-w-[1440px] h-[50vh] mx-auto bg-[#FFCCBC] rounded-b-3xl">
                <div className=' lg:w-[70%] xl:w-[70%] md:w-[70%] w-full h-full '>
                    <img src={logo} alt="poster" className='w-full h-full object-cover lg:rounded-bl-3xl rounded-bl-none' />
                </div>
                <div className=' lg:w-[30%] xl:-[30%] md:[30%] w-full lg:rounded-none xl:rounded-none md:rounded-none rounded-b-2xl'>
                    <h1 className='text-2xl  font-semibold text-black text-center py-7'>
                        let'Get Ready with
                        <br />Tinin
                    </h1>
                    <div className='w-full lg:flex hidden '>
                        <button className='w-[300px] h-[10vh] bg bg-black mx-auto text-white px-7 text-lg font-semibold rounded-lg'> anh sur tha tinh ort </button>
                    </div>
                </div>
            </div>
        </div>
       <br />
       {/*  */}
       <div className='w-[95%] h-[30vh]  m-auto'>
        <h1 className='text-2xl lg:ml-20 ml-5'>Categories</h1>
        <br />
        <div className='w-[70%] h-[25vh] lg:flex grid grid-cols-3 lg:ml-10 ml-0 lg:gap-8 gap-x-32 gap-y-12 '>
          
            {/* <div className=' mt-12'>
                <IoIosArrowBack className='w-[30px] h-[30px]  border-black border-2 rounded-full'/>
            </div> */}
            {
                categories.map((data,index)=>{
                    return(
                        <div className='lg:ml-5 ml-0'>
                            <div className='w-[80px] h-full ml-6'>
                                <div className=' w-[80px] h-[80px] rounded-full border-2 border-black'>
                                    <img className=' object-cover w-full h-full rounded-full' src={data.img} alt="" />
                                </div>
                             <div className='text-center'>
                                    <h1>{data.text_1}</h1>
                                    <h1>{data.text_2}</h1>
                                </div>
                            </div>
                        </div>
                    )
                })
            }
            
        </div>
       </div>
       <div className='lg:block hidden border-[1px] border-slate-400'></div>
    </div>
  )
}

export default Home