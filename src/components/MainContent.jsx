import React from 'react'
import ChevronDown from "../assets/fi_chevron-down.svg"
import Icon from "../assets/icon.svg"
import User from "../assets/User.svg"
import Bag from "../assets/Bag.svg"
import Circular from "../assets/Circular.svg"
import Folder from "../assets/Folder.svg"
import Cart from "../assets/shopping-cart.svg"
import Phone from "../assets/Phone.svg"
import BarChart from './Barchart'
import Iphone from "../assets/Rectangle.png"

export default function MainContent() {
    return (
        <div className='w-[970px] h-[727px] bg-gray-100 flex flex-col items-start gap-[18px]'>
            <div className='flex w-full h-[145px] items-start gap-5 bg-gray-100'>
                <div className=' rounded-xl flex w-[290px] h-[145px] py-3 px-4 flex-col items-start gap-[10px] flex-shrink-0 bg-white'>

                    <div className='flex flex-col justify-between items-start flex-1 self-stretch'>
                        <div className='flex justify-between items-center self-stretch'>
                            <img src={Icon} alt="graph" />
                            <div className='flex w-[82px] [16px]items-center gap-2 bg-slate-500 text-[#BEC0CA]'>

                                <p className='text-xs font-normal '>This week </p>
                                <img src={ChevronDown} className="w-4 " alt='arrow-down' />
                            </div>
                        </div>

                        <div className='flex flex-start gap-8 self-stretch'>

                            <div className='flex flex-col items-start gap-2 flex-1 w-[129.5px] h-[55px] text-[#BEC0CA]'>
                                <p className='text-[14px] text-[#45464E]'>Sales</p>
                                <p className='text-[20px] font-medium text-[#45464E]'>$400,000</p>
                            </div>

                            <div className='flex flex-col items-start gap-2 flex-1 w-[129.5px] h-[55px] text-[#BEC0CA]'>
                                <p className='text-[14px] text-[#45464E]'>Values</p>

                                <div className='flex justify-center items-center gap-[7px]'>

                                    <p className='text-[20px] font-medium text-[#45464E]'>$450</p>
                                    <p className="text-xs text-green-600">+20.00%</p>

                                </div>

                            </div>


                        </div>

                    </div>

                </div>

                <div className=' rounded-xl flex w-[290px] h-[145px] py-3 px-4 flex-col items-start gap-[10px] flex-shrink-0 bg-white'>
                    <div className='flex flex-col justify-between items-start flex-1 self-stretch'>
                        <div className='flex justify-between items-center self-stretch'>

                            <div className='flex w-9 h-9 p-2 justify-center items-center bg-[#ffcc91] rounded-lg'>
                                <img src={User} alt="graph" />
                            </div>

                            <div className='flex w-[82px] [16px]items-center gap-2 bg-slate-500 text-[#BEC0CA]'>

                                <p className='text-xs font-normal '>This week </p>
                                <img src={ChevronDown} className="w-4 " alt='arrow-down' />
                            </div>
                        </div>

                        <div className='flex flex-start gap-8 self-stretch'>

                            <div className='flex flex-col items-start gap-2 flex-1 w-[129.5px] h-[55px] text-[#BEC0CA]'>
                                <p className='text-[14px] text-[#45464E]'>Customers</p>
                               
                                <div className='flex justify-center items-center gap-[7px]'>

                                    <p className='text-[20px] font-medium text-[#45464E]'>1,250</p>
                                    <p className="text-xs text-green-500">+15.80%</p>

                                </div>

                            </div>

                            <div className='flex flex-col items-start gap-2 flex-1 w-[129.5px] h-[55px] text-[#BEC0CA]'>
                                <p className='text-[14px] text-[#45464E]'>Active</p>

                                <div className='flex justify-center items-center gap-[7px]'>

                                    <p className='text-[20px] font-medium text-[#45464E]'>1,180</p>
                                    <p className="text-xs text-green-500">85%</p>

                                </div>

                            </div>


                        </div>

                    </div>
                </div>



                <div className=' rounded-xl flex w-[350px] h-[145px] py-3 px-4 flex-col items-start gap-[10px] flex-shrink-0 bg-white'>
                    <div className='flex flex-col justify-between items-start flex-1 self-stretch'>
                        <div className='flex justify-between items-center self-stretch'>
                            <div className="flex w-9 h-9 p-2 justify-center items-center bg-[#ffcc91] rounded-lg">
                                <img src={Bag} alt="graph" />
                            </div>


                            <div className='flex w-[82px] [16px]items-center gap-2 bg-slate-500 text-[#BEC0CA]'>

                                <p className='text-xs font-normal '>This week </p>
                                <img src={ChevronDown} className="w-4 " alt='arrow-down' />
                            </div>
                        </div>

                        <div className='flex flex-start gap-8 self-stretch'>

                            <div className='flex flex-col items-start gap-2 flex-1 w-[129.5px] h-[55px] text-[#BEC0CA]'>
                                <p className='text-[14px] text-[#45464E]'>All Order</p>
                                <p className='text-[20px] font-medium text-[#45464E]'>450</p>
                            </div>
                            
                            <div className='flex flex-col items-start gap-2 flex-1 w-[129.5px] h-[55px] text-[#BEC0CA]'>
                                <p className='text-[14px] text-[#45464E]'>Pending</p>
                                <p className='text-[20px] font-medium text-[#45464E]'>5</p>
                            </div>

                            <div className='flex flex-col items-start gap-2 flex-1 w-[129.5px] h-[55px] text-[#BEC0CA]'>
                                <p className='text-[14px] text-[#45464E]'>Completed</p>
                                <p className='text-[20px] font-medium text-[#45464E]'>445</p>
                            </div>

                            


                        </div>

                    </div>
                </div>

            </div>

            <div className='flex w-full h-[727px] items-start gap-[18px] '>
                <div className='flex w-[663px] h-full flex-col items-start gap-5 flex-shrink-0 bg-grary-50'>
                    <div className='h-[337px] flex items-start gap-5 self-stretch'>
                        <div className='rounded-[12px]  w-[321px] bg-white flex py-[21px] px-[20px] justify-center items-center gap-[10px] self-stretch'>
                            <div className='flex h-[291px] flex-col items-center gap-6 flex-1 '>
                                <div className="flex flex-col items-start gap-3 self-stretch ">

                                    <div className='flex items-start justify-between self-stretch  '>


                                        <p className='font-medium text-base'>Marketing</p>

                                        <div className='flex w-[82px] [16px]items-center gap-2 bg-slate-500 text-[#BEC0CA]'>

                                            <p className='text-xs font-normal '>This week </p>
                                            <img src={ChevronDown} className="w-4 " alt='arrow-down' />
                                        </div>
                                    </div>

                                    <div className='flex justify-between items-start self-stretch'>
                                        <p className='text-[#A6A8B1] font-normal  text-xs'>.Acqustion</p>
                                        <p className='text-[#A6A8B1] font-normal  text-xs'>.Paurchse</p>
                                        <p className='text-[#A6A8B1] font-normal  text-xs'>.Retention</p>
          
                                    </div>
                                </div>

                                <img src={Circular} className=" h-[291px] flex flex-col items-center gap-[24px] flex-1" alt="barchart" />

                            </div>
                        </div>


                        <div className='flex flex-col flex-1 items-start gap-5 w-[322px] h-[337px] '>
                            <div className='flex h-[159px] py-[11px] px-[15px] flex-col items-start justify-between self-stretch rounded-lg bg-[#5570F1]'>

                                <div className='flex w-[36px] h-[36px] p-2 justify-center items-center rounded-lg bg-white'>

                                    <img src={Folder} className='w-5' alt="folder" />
                                </div>

                                <div className="flex items-start gap-8 self-stretch text-white">
                                    <div className='flex flex-col items-start gap-2 flex-1 w-[130px] h-[55px]'>
                                        <p className='text-sm font-normal  '>All Products</p>
                                        <span className='text-lg font-medium '>45</span>
                                    </div>

                                    <div className='flex flex-col items-start gap-2 flex-1 w-[130px] h-[55px]'>
                                        <p className='text-sm font-normal'>Active</p>
                                        <span className='text-lg font-medium'>32</span>
                                    </div>


                                </div>

                            </div>

                            <div className='flex h-[159px] py-[11px] px-[15px] flex-col items-start justify-between self-stretch rounded-lg bg-white'>
                                <div className='flex h-[36px] w-full justify-between'>
                                    <div className='flex w-[36px] h-[36px] p-2 justify-center items-center rounded-lg bg-white'>
                                        <img src={Cart} className='w-5' alt="folder" />
                                    </div>

                                    <div className='flex w-[82px] [16px] items-center gap-2 bg-slate-500 text-[#BEC0CA]'>

                                        <p className='text-xs font-normal '>This week </p>
                                        <img src={ChevronDown} className="w-4 " alt='arrow-down' />
                                    </div>

                                </div>


                                <div className="flex items-start gap-8 self-stretch text-black">
                                    <div className='flex flex-col items-start gap-2 flex-1 w-[130px] h-[55px]'>
                                        <p className='text-sm font-normal  '>Abandoned Cart </p>
                                        <span className='text-lg font-medium '>45</span>
                                    </div>

                                    <div className='flex flex-col items-start gap-2 flex-1 w-[130px] h-[55px]'>
                                        <p className='text-sm font-normal'>Customers</p>
                                        <span className='text-lg font-medium'>32</span>
                                    </div>


                                </div>

                            </div>
                        </div>

                    </div>

                    <BarChart />
                </div>

                <div className='w-[423px] h-full bg-white flex p-5 items-start gap-[10px] flex-1 rounded-lg '>
                    <div className='h-full w-full flex flex-col items-start gap-4 flex-1 '>

                        <p className='text-[#45464E] text-base font-medium'>Recents Orders</p>

                        <div className='flex flex-col items-start gap-3 self-stretch w-full h-full'>

                            <div className='h-[61px] w-full flex pb-0  items-start gap-[10px] self-stretch border-[1px] border-[#F1F3F9]'>
                                <img src={Phone} className='w-12 h-12' alt="phoneImg" />

                                <div className='flex flex-col items-start gap-[10px] flex-1 w-full h-full'>

                                    <div className='flex justify-between items-start self-stretch'>
                                        <p className='font-normal text-[#45464E] text-sm'>Iphone 13</p>

                                        <p className='font-normal text-[#45464E] text-[12px] '> 12 Sept 2022</p>
                                    </div>

                                    <div className='flex justify-between items-end self-stretch w-full h-[19px]'>

                                        <p className='text-[#33343A] font-normal text-sm'>₦730,000.00 X 1</p>

                                        <div className='flex py-[2px] justify-center items-start gap-[10px] rounded-lg bg-[#32936f] w-[80px] h-full'>
                                            <p className='text-xs font-normal text-[#519C66]'>Completed</p>

                                        </div>
                                    </div>
                                </div>
                            </div>


                            <div className='h-[61px] w-full flex pb-0  items-start gap-[10px] self-stretch border-[1px] border-[#F1F3F9]'>
                                <img src={Phone} className='w-12 h-12' alt="phoneImg" />

                                <div className='flex flex-col items-start gap-[10px] flex-1 w-full h-full'>

                                    <div className='flex justify-between items-start self-stretch'>
                                        <p className='font-normal text-[#45464E] text-sm'>Iphone 13</p>

                                        <p className='font-normal text-[#45464E] text-[12px] '> 12 Sept 2022</p>
                                    </div>

                                    <div className='flex justify-between items-end self-stretch w-full h-[19px]'>

                                        <p className='text-[#33343A] font-normal text-sm'>₦730,000.00 X 1</p>

                                        <div className='flex py-[2px] justify-center items-start gap-[10px] rounded-lg bg-[#32936f] w-[80px] h-full'>
                                            <p className='text-xs font-normal text-[#519C66]'>Completed</p>

                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className='h-[61px] w-full flex pb-0  items-start gap-[10px] self-stretch border-[1px] border-[#F1F3F9]'>
                                <img src={Phone} className='w-12 h-12' alt="phoneImg" />

                                <div className='flex flex-col items-start gap-[10px] flex-1 w-full h-full'>

                                    <div className='flex justify-between items-start self-stretch'>
                                        <p className='font-normal text-[#45464E] text-sm'>Iphone 13</p>

                                        <p className='font-normal text-[#45464E] text-[12px] '> 12 Sept 2022</p>
                                    </div>

                                    <div className='flex justify-between items-end self-stretch w-full h-[19px]'>

                                        <p className='text-[#33343A] font-normal text-sm'>₦730,000.00 X 1</p>

                                        <div className='flex py-[2px] justify-center items-start gap-[10px] rounded-lg bg-[#f57e77] w-[70px] h-full'>
                                            <p className='text-xs font-normal text-[#CC5F5F]'>Pending</p>

                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className='h-[61px] w-full flex pb-0  items-start gap-[10px] self-stretch border-[1px] border-[#F1F3F9]'>
                                <img src={Iphone} className='w-12 h-12' alt="phoneImg" />

                                <div className='flex flex-col items-start gap-[10px] flex-1 w-full h-full'>

                                    <div className='flex justify-between items-start self-stretch'>
                                        <p className='font-normal text-[#45464E] text-sm'>Iphone 13</p>

                                        <p className='font-normal text-[#45464E] text-[12px] '> 12 Sept 2022</p>
                                    </div>

                                    <div className='flex justify-between items-end self-stretch w-full h-[19px]'>

                                        <p className='text-[#33343A] font-normal text-sm'>₦730,000.00 X 1</p>

                                        <div className='flex py-[2px] justify-center items-start gap-[10px] rounded-lg bg-[#32936f] w-[80px] h-full'>
                                            <p className='text-xs font-normal text-[#519C66]'>Completed</p>

                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className='h-[61px] w-full flex pb-0  items-start gap-[10px] self-stretch border-[1px] border-[#F1F3F9]'>
                                <img src={Iphone} className='w-12 h-12' alt="phoneImg" />

                                <div className='flex flex-col items-start gap-[10px] flex-1 w-full h-full'>

                                    <div className='flex justify-between items-start self-stretch'>
                                        <p className='font-normal text-[#45464E] text-sm'>Iphone 13</p>

                                        <p className='font-normal text-[#45464E] text-[12px] '> 12 Sept 2022</p>
                                    </div>

                                    <div className='flex justify-between items-end self-stretch w-full h-[19px]'>

                                        <p className='text-[#33343A] font-normal text-sm'>₦730,000.00 X 1</p>

                                        <div className='flex py-[2px] justify-center items-start gap-[10px] rounded-lg bg-[#32936f] w-[80px] h-full'>
                                            <p className='text-xs font-normal text-[#519C66]'>Completed</p>

                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className='h-[61px] w-full flex pb-0  items-start gap-[10px] self-stretch border-[1px] border-[#F1F3F9]'>
                                <img src={Iphone} className='w-12 h-12' alt="phoneImg" />

                                <div className='flex flex-col items-start gap-[10px] flex-1 w-full h-full'>

                                    <div className='flex justify-between items-start self-stretch'>
                                        <p className='font-normal text-[#45464E] text-sm'>Iphone 13</p>

                                        <p className='font-normal text-[#45464E] text-[12px] '> 12 Sept 2022</p>
                                    </div>

                                    <div className='flex justify-between items-end self-stretch w-full h-[19px]'>

                                        <p className='text-[#33343A] font-normal text-sm'>₦730,000.00 X 1</p>

                                        <div className='flex py-[2px] justify-center items-start gap-[10px] rounded-lg bg-[#32936f] w-[80px] h-full'>
                                            <p className='text-xs font-normal text-[#519C66]'>Completed</p>

                                        </div>
                                    </div>
                                </div>
                            </div>


                            <div className='h-[61px] w-full flex pb-0  items-start gap-[10px] self-stretch border-[1px] border-[#F1F3F9]'>
                                <img src={Phone} className='w-12 h-12' alt="phoneImg" />

                                <div className='flex flex-col items-start gap-[10px] flex-1 w-full h-full'>

                                    <div className='flex justify-between items-start self-stretch'>
                                        <p className='font-normal text-[#45464E] text-sm'>Iphone 13</p>

                                        <p className='font-normal text-[#45464E] text-[12px] '> 12 Sept 2022</p>
                                    </div>

                                    <div className='flex justify-between items-end self-stretch w-full h-[19px]'>

                                        <p className='text-[#33343A] font-normal text-sm'>₦730,000.00 X 1</p>

                                        <div className='flex py-[2px] justify-center items-start gap-[10px] rounded-lg bg-[#f57e77] w-[70px] h-full'>
                                            <p className='text-xs font-normal text-[#CC5F5F]'>Pending</p>

                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className='h-[61px] w-full flex pb-0  items-start gap-[10px] self-stretch border-[1px] border-[#F1F3F9]'>
                                <img src={Phone} className='w-12 h-12' alt="phoneImg" />

                                <div className='flex flex-col items-start gap-[10px] flex-1 w-full h-full'>

                                    <div className='flex justify-between items-start self-stretch'>
                                        <p className='font-normal text-[#45464E] text-sm'>Iphone 13</p>

                                        <p className='font-normal text-[#45464E] text-[12px] '> 12 Sept 2022</p>
                                    </div>

                                    <div className='flex justify-between items-end self-stretch w-full h-[19px]'>

                                        <p className='text-[#33343A] font-normal text-sm'>₦730,000.00 X 1</p>

                                        <div className='flex py-[2px] justify-center items-start gap-[10px] rounded-lg bg-[#f57e77] w-[70px] h-full'>
                                            <p className='text-xs font-normal text-[#CC5F5F]'>Pending</p>

                                        </div>
                                    </div>
                                </div>
                            </div>


                            <div className='h-[61px] w-full flex pb-0  items-start gap-[10px] self-stretch border-[1px] border-[#F1F3F9]'>
                                <img src={Phone} className='w-12 h-12' alt="phoneImg" />

                                <div className='flex flex-col items-start gap-[10px] flex-1 w-full h-full'>

                                    <div className='flex justify-between items-start self-stretch'>
                                        <p className='font-normal text-[#45464E] text-sm'>Iphone 13</p>

                                        <p className='font-normal text-[#45464E] text-[12px] '> 12 Sept 2022</p>
                                    </div>

                                    <div className='flex justify-between items-end self-stretch w-full h-[19px]'>

                                        <p className='text-[#33343A] font-normal text-sm'>₦730,000.00 X 1</p>

                                        <div className='flex py-[2px] justify-center items-start gap-[10px] rounded-lg  bg-[#f57e77] w-[70px] h-full'>
                                            <p className='text-xs font-normal text-[#CC5F5F]'>Pending</p>

                                        </div>
                                    </div>
                                </div>
                            </div>





                        </div>

                    </div>
                </div>
            </div>





        </div>
    )
}
