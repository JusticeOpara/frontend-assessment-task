import React from 'react'
import ChevronDown from "../assets/fi_chevron-down.svg"



export default function BarChart() {
    return (
        <div className=" rounded-xl h-[369px] w-full bg-white flex py-[15px] px-[20px] flex-col justify-start gap-[10px] self-stretch ">
            <div className='bg-white flex flex-col items-start gap-[36px] w-full h-[339px]'>
                <div className='flex justify-between items-center  self-stretch'>
                    <div className='flex gap-5 items-center  '>

                        <p className='text-[16px] font-medium'>Summary</p>

                        <div className='rounded-lg flex py-[5px] px-3 justify-center items-center gap-3 bg-[#5570f1] text-[#BEC0CA]'>

                            <p className='text-[16px] font-normal '>Sales </p>
                            <img src={ChevronDown} className="w-4 " alt='arrow-down' />

                        </div>
                    </div>

                    <div className='flex py-[5px] px-3 justify-center items-center gap-3 text-[#BEC0CA]'>

                        <p className='text-sm font-normal text-black'>Last 7 Days </p>
                        <img src={ChevronDown} className="w-4 " alt='arrow-down' />

                    </div>
                </div>

                <div className='flex justify-between items-start self-stretch w-full h-[273px] bg-white'>
                    <div className='flex flex-col items-end gap-9 w-[25px] h-[213px]'>
                        <span  className='text-[11px] font-normal text-[#BEC0CA]'>100k</span>
                        <span className='text-[11px] font-normal text-[#BEC0CA]'>90k</span>
                        <span className='text-[11px] font-normal text-[#BEC0CA]'>80k</span>
                        <span className='text-[11px] font-normal text-[#BEC0CA]'>70k</span>
                        <span className='text-[11px] font-normal text-[#BEC0CA]'>60k</span>

                    </div>



                    <div className='w-[40px] h-full flex flex-col items-center gap-5'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="241" viewBox="0 0 14 241" fill="none">
                            <rect x="0.357147" width="13" height="241" rx="6.5" fill="#EEF0FA" />
                            <rect x="0.357147" y="30" width="13" height="211" rx="6.5" fill="#5570F1" />
                        </svg>

                        <span className='text-[11px] font-normal text-[#BEC0CA]'>Sept 10</span>
                    </div>

                    <div className='w-[40px] h-full flex flex-col items-center gap-5'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="241" viewBox="0 0 14 241" fill="none">
                            <rect x="0.214294" width="13" height="241" rx="6.5" fill="#EEF0FA" />
                            <rect x="0.214294" y="157" width="13" height="84" rx="6.5" fill="#5570F1" />
                        </svg>

                        <span className='text-[11px] font-normal text-[#BEC0CA]'>Sept 11</span>
                    </div>


                    <div className='w-[40px] h-full flex flex-col items-center gap-5'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="241" viewBox="0 0 14 241" fill="none">
                            <rect x="0.571442" width="13" height="241" rx="6.5" fill="#EEF0FA" />
                            <rect x="0.571442" y="87" width="13" height="154" rx="6.5" fill="#5570F1" />
                        </svg>

                        <span className='text-[11px] font-normal text-[#BEC0CA]'>Sept 12</span>
                    </div>

                    <div className='w-[40px] h-full flex flex-col items-center gap-5'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="241" viewBox="0 0 14 241" fill="none">
                            <rect x="0.928589" width="13" height="241" rx="6.5" fill="#EEF0FA" />
                            <rect x="0.928589" y="190" width="13" height="51" rx="6.5" fill="#5570F1" />
                        </svg>

                        <span className='text-[11px] font-normal text-[#BEC0CA]'>Sept 13</span>
                    </div>

                    <div className='w-[40px] h-full flex flex-col items-center gap-5'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="241" viewBox="0 0 14 241" fill="none">
                            <rect x="0.785736" width="13" height="241" rx="6.5" fill="#EEF0FA" />
                            <rect x="0.785736" y="45" width="13" height="196" rx="6.5" fill="#5570F1" />
                        </svg>

                        <span className='text-[11px] font-normal text-[#BEC0CA]'>Sept 14</span>
                    </div>

                    <div className='w-[40px] h-full flex flex-col items-center gap-5'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="241" viewBox="0 0 14 241" fill="none">
                            <rect x="0.5" width="13" height="241" rx="6.5" fill="#EEF0FA" />
                            <rect x="0.5" y="45" width="13" height="196" rx="6.5" fill="#5570F1" />
                        </svg>
                        <span className='text-[11px] font-normal text-[#BEC0CA]'>Sept 15</span>
                    </div>

                    <div className='w-[40px] h-full flex flex-col items-center gap-5'>

                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="241" viewBox="0 0 14 241" fill="none">
                            <rect x="0.642883" width="13" height="241" rx="6.5" fill="#EEF0FA" />
                            <rect x="0.642883" y="135" width="13" height="106" rx="6.5" fill="#5570F1" />
                        </svg>

                        <span className='text-[11px] font-normal text-[#BEC0CA]'>Sept 16</span>
                    </div>

                </div>



            </div>

        </div>
    )
}
