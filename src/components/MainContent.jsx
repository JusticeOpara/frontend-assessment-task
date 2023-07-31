import React from 'react'
import ChevronDown from "../assets/fi_chevron-down.svg"
import Icon from "../assets/icon.svg"
import User from "../assets/User.svg"
import Bag from "../assets/Bag.svg"
import Circular from "../assets/Circular.svg"
import Folder from "../assets/Folder.svg"
import Cart from "../assets/shopping-cart.svg"
import BarIcon1 from "../assets/barIcon1.svg"
import BarIcon2 from "../assets/barIcon2.svg"
import BarIcon3 from "../assets/barIcon3.svg"
import BarIcon4 from "../assets/barIcon4.svg"
import BarIcon5 from "../assets/barIcon5.svg"

export default function MainContent() {
    return (
        <div className='w-[970px] h-[727px] bg-slate-300 flex flex-col items-start gap-[18px]'>
            <div className='flex w-full h-[145px] items-start gap-5 bg-gray-900'>
                <div className=' rounded-xl flex w-[300px] h-[145px] py-3 px-4 flex-col items-start gap-[10px] flex-shrink-0 bg-sky-800'>

                    <div className='flex flex-col justify-between items-start flex-1 self-stretch'>
                        <div className='flex justify-between items-center self-stretch'>
                            <img src={Icon} alt="graph" />
                            <div className='flex w-[82px] [16px]items-center gap-2 bg-slate-500 text-[#BEC0CA]'>

                                <p className='text-xs font-normal '>This week </p>
                                <img src={ChevronDown} className="w-4 " alt='arrow-down' />
                            </div>
                        </div>

                        <div className='flex flex-start gap-8 self-stretch'>

                            <div className='flex flex-col items-start gap-2 flex-1 bg-red-50 w-[129.5px] h-[55px] text-[#BEC0CA]'>
                                <p className='text-[14px] text-[#45464E]'>Sales</p>
                                <p className='text-[20px] font-normal text-[#45464E]'>$400,000</p>
                            </div>

                            <div className='flex flex-col items-start gap-2 flex-1 bg-red-50 w-[129.5px] h-[55px] text-[#BEC0CA]'>
                                <p className='text-[14px] text-[#45464E]'>Values</p>

                                <div className='flex justify-center items-center gap-[7px]'>

                                    <p className='text-[20px] font-normal text-[#45464E]'>$450</p>
                                    <p className="text-xs">+20.00%</p>

                                </div>

                            </div>


                        </div>

                    </div>

                </div>

                <div className=' rounded-xl flex w-[300px] h-[145px] py-3 px-4 flex-col items-start gap-[10px] flex-shrink-0 bg-sky-800'>
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

                            <div className='flex flex-col items-start gap-2 flex-1 bg-red-50 w-[129.5px] h-[55px] text-[#BEC0CA]'>
                                <p className='text-[14px] text-[#45464E]'>Sales</p>
                                <p className='text-[20px] font-normal text-[#45464E]'>$400,000</p>
                            </div>

                            <div className='flex flex-col items-start gap-2 flex-1 bg-red-50 w-[129.5px] h-[55px] text-[#BEC0CA]'>
                                <p className='text-[14px] text-[#45464E]'>Values</p>

                                <div className='flex justify-center items-center gap-[7px]'>

                                    <p className='text-[20px] font-normal text-[#45464E]'>$450</p>
                                    <p className="text-xs">+20.00%</p>

                                </div>

                            </div>


                        </div>

                    </div>
                </div>



                <div className=' rounded-xl flex w-[330px] h-[145px] py-3 px-4 flex-col items-start gap-[10px] flex-shrink-0 bg-sky-800'>
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

                            <div className='flex flex-col items-start gap-2 flex-1 bg-red-50 w-[129.5px] h-[55px] text-[#BEC0CA]'>
                                <p className='text-[14px] text-[#45464E]'>Sales</p>
                                <p className='text-[20px] font-normal text-[#45464E]'>$400,000</p>
                            </div>

                            <div className='flex flex-col items-start gap-2 flex-1 bg-red-50 w-[129.5px] h-[55px] text-[#BEC0CA]'>
                                <p className='text-[14px] text-[#45464E]'>Values</p>

                                <div className='flex justify-center items-center gap-[7px]'>

                                    <p className='text-[20px] font-normal text-[#45464E]'>$450</p>
                                    <p className="text-xs">+20.00%</p>

                                </div>

                            </div>


                        </div>

                    </div>
                </div>

            </div>

            <div className='flex w-full h-[727px] items-start gap-[18px] bg-green-600'>
                <div className='flex w-[663px] h-full flex-col items-start gap-5 flex-shrink-0 bg-gray-50'>
                    <div className='h-[337px] bg-gray-600 flex items-start gap-5 self-stretch'>
                        <div className='rounded-[12px]  w-[321px] bg-red-200 flex py-[21px] px-[20px] justify-center items-center gap-[10px] self-stretch'>
                            <div className='flex h-[291px] flex-col items-center gap-6 flex-1 bg-blue-300'>
                                <div className="flex flex-col items-start gap-3 self-stretch bg-slate-700">

                                    <div className='flex items-start justify-between self-stretch  '>


                                        <p>Marketing</p>

                                        <div className='flex w-[82px] [16px]items-center gap-2 bg-slate-500 text-[#BEC0CA]'>

                                            <p className='text-xs font-normal '>This week </p>
                                            <img src={ChevronDown} className="w-4 " alt='arrow-down' />
                                        </div>
                                    </div>

                                    <div className='flex justify-between items-start self-stretch'>
                                        <p>.Acqustion</p>
                                        <p>.Paurchse</p>
                                        <p>.Retention</p>
                                    </div>
                                </div>

                                <img src={Circular} className=" h-[291px] flex flex-col items-center gap-[24px] flex-1" alt="barchart" />

                            </div>
                        </div>


                        <div className='flex flex-col flex-1 items-start gap-5 w-[322px] h-[337px] bg-slate-300'>
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

                            <div className='flex h-[159px] py-[11px] px-[15px] flex-col items-start justify-between self-stretch rounded-lg bg-[#5570F1]'>
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

                    <div className=" rounded-xl h-[369px] w-full bg-blue-200 flex py-[15px] px-[20px] flex-col justify-start gap-[10px] self-stretch ">
                        <div className='bg-white flex flex-col items-start gap-[36px] w-full h-[339px]'>
                            <div className='flex justify-between items-center  self-stretch'>
                                <div className='flex gap-5 items-center bg-red-400 '>

                                    <p className='text-[16px] font-medium'>Summary</p>

                                    <div className='rounded-lg flex py-[5px] px-3 justify-center items-center gap-3 bg-slate-500 text-[#BEC0CA]'>

                                        <p className='text-[16px] font-normal '>Sales </p>
                                        <img src={ChevronDown} className="w-4 " alt='arrow-down' />

                                    </div>
                                </div>

                                <div className='flex py-[5px] px-3 justify-center items-center gap-3 bg-slate-500 text-[#BEC0CA]'>

                                    <p className='text-sm font-normal text-black'>Last 7 Days </p>
                                    <img src={ChevronDown} className="w-4 " alt='arrow-down' />

                                </div>

                            </div>

                            

                        </div>

                    </div>
                </div>

                <div>

                </div>
            </div>





        </div>
    )
}
