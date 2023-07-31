import React from 'react'
// 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
import Notification from "../assets/Notification.svg"
import Profile from "../assets/profile.png"
import Contnet from "../assets/contnet.svg"
import ChevronDown from "../assets/fi_chevron-down.svg"
import MainContent from './MainContent'


export default function Homepage() {

    return (
        <div className='flex pb-0 flex-col py-[14px] px-[21px] items-center gap-7'>

            <div className="flex w-[970px]  flex-col items-start bg-red-400">
                <div className=' h-[60px] w-full flex  flex-col items-start gap-[10px] self-stretch  bg-red-100'>
                    <div className=' h-[] w-[] flex justify-between items-center self-stretch bg-white'>
                        <div>
                            <p className='bg-[#45464E] text-[20px] font-normal '>Dashboard</p>

                        </div>

                        <div className='flex items-center gap-5 w-[246px] h-[32px] bg-stone-500'>

                            <div className='flex  justify-center items-center gap-[10px] self-stretch py-[5px] px-3 rounded-lg bg-[#FEF5EA]'>
                                <div className='flex items-center gap-5 w-[130px] h-[20px]'>
                                    <p className='text-[14px] font-normal text-[#1C1D22] '>Nanny's Shop</p>

                                    <img src={ChevronDown} alt="arrow-down" />

                                </div>

                            </div>

                            <img src={Notification} className="w-[18px] flex-shrink-0" alt="Notification" />
                            <img src={Profile} className='w-8 h-8 rounded-lg' alt="Profile" />

                        </div>

                    </div>
                </div>

                <div className='flex flex-col items-start self-stretch py-[4px] px-[20px] gap-[10px] h-[24px] w-full border-t-2 border-[#F1F3F9]'>
                    <div className='flex items-stretch gap-[11px] w-[240px] h-[16px]'>
                        <img src={Contnet} className='flex w-4 h-6 p-2 justify-center items-center' alt='home' />

                    </div>

                </div>

            </div>

            <MainContent />

            {/* <div className='w-[970px] h-[727px] bg-slate-300 flex items-start gap-[18px]'>
                <div className='flex w-full h-[145px] items-start gap-5 bg-gray-400'>
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



            </div> */}


        </div>
    )
}
