import React from 'react'
import { BsInstagram, BsFacebook } from 'react-icons/bs'
import { FaTiktok, FaTelegramPlane } from 'react-icons/fa'
import { IoCallOutline } from 'react-icons/io'


const Contacts = () => {
    const contact = [{
        text: "MY ACCOUNT",
        text_1: "About us",
        text_2: "Feedback",
        text_3: "Membership",
        text_4: ""
    }, {
        text: "MY ACCOUNT",
        text_1: "About us",
        text_2: "Feedback",
        text_3: "Membership",
        text_4: ""
    }, {
        text: "MY ACCOUNT",
        text_1: "About us",
        text_2: "Feedback",
        text_3: "Membership",
        text_4: ""
    }]
    return (
        <div className='w-full lg:h-[100vh] h-[70vh] bg-[#FBE9E7] px-5 border-t-2 border-black'>
            <div className=' w-full h-[35vh] lg:flex  grid grid-cols-3 gap-x-10'>
                {
                    contact.map((data, index) => {
                        return (
                            <div className='w-[250px] h-full '>
                                <div className='w-[200px] h-full pt-10 '>
                                    <h1 className='lg:text-xl text-sm text-black'>{data.text}</h1>
                                    <p className='lg:text-lg text-xs mt-2'>{data.text_1}</p>
                                    <p className='lg:text-lg text-xs'>{data.text_2}</p>
                                    <p className='lg:text-lg text-xs'>{data.text_3}</p>
                                    <p className='lg:text-lg text-xs'>{data.text_4}</p>
                                </div>
                            </div>
                        )
                    })
                }

                {/*  */}
                <div className='lg:w-[750px] w-[350px] h-full lg:flex gird grid-cols-2  pt-10'>
                    {/* <div className=''> */}
                    <div className=' w-[50%] ml-20'>
                        <h1 className='text-xl'>FIND US ON</h1>
                        <span className='flex gap-6 text-3xl pt-5'>
                            <BsInstagram />
                            <BsFacebook />
                            <FaTelegramPlane />
                            <FaTiktok />
                        </span>
                    </div>
                    {/* </div> */}
                    <br />
                    <br />
                    <div className='w-[50%] ml-10'>
                        <h1 className='text-xl'>PAYMENT METHOD</h1>
                        <div className='flex gap-3 pt-5'>
                            <img className='w-[40px] h-[40px] rounded-2xl' src="https://th.bing.com/th/id/OIP.76nHDUWLSqXuRQd81arO5wHaHa?pid=ImgDet&rs=1" alt="" />
                            <img className='w-[40px] h-[40px] rounded-2xl' src="https://companieslogo.com/img/orig/ABC.KH-3aa8d94f.png?t=1659408615" alt="" />
                            <img className='w-[40px] h-[40px] rounded-2xl' src="https://th.bing.com/th/id/OIP.pXvoNfnB_cBPrIh54lgIuwHaEw?pid=ImgDet&rs=1" alt="" />
                            <img className='w-[40px] h-[40px] rounded-2xl' src="https://th.bing.com/th/id/OIP.YSP_Mo6ypAj1q6VBdMFC9AAAAA?pid=ImgDet&rs=1" alt="" />
                            <img className='w-[40px] h-[40px] rounded-2xl' src="https://i1.wp.com/www.thailand-business-news.com/wp-content/uploads/2016/11/TrueMoney.jpg?resize=1000%2C600&ssl=1" alt="" />
                        </div>
                    </div>
                </div>

            </div>


            <div className='w-full  lg:flex grid grid-cols-1 mt-[1rem] items-center '>

                <div className='w-[30%] h-full pl-20'>
                    <div className='w-[200px] h-[200px] lg:mt-0 mt-[7rem]'>
                        <img className='lg:w-[200px] w-[150px] lg:h-[200px] h-[150px] rounded-full border-2 border-black' src="https://i.pinimg.com/564x/5c/57/e4/5c57e45a8d8f6debcc8e4a16561954d5.jpg" alt="" />

                    </div>
                </div>
                <div className="w-full">
                    <div className=' items-center w-[100%] grid grid-cols-2 lg:flex'>
                    <div className='lg:w-[25%] '>
                            <h1>Credit</h1>
                            <h2>Develop by</h2>
                            <p>Ket Kakavey</p>
                            <p>Chea BorMey</p>
                            <p>Ven Dalin</p>
                            <p>Rous Sinin</p>
                        </div>
                        <div className='lg:w-[25%] '>
                            <h1>UI/Ux Design by</h1>
                            <p>Hing Chantreanila</p>
                        </div>
                        <div className='lg:w-[25%] '>
                            <h1>Location</h1>
                            <p>Battambang</p>
                        </div>  
                <div className='lg:w-[25%] lg:flex grid'>
                            <p>Copyright@2024 <br /></p>
                            <p >All right serve...</p>
                        </div>
                    </div>




                </div>


            </div>
        </div>
    )
}

export default Contacts
