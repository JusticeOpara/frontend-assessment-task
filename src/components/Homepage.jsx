import React from 'react'
// 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
import Notification from "../assets/Notification.svg"
import Profile from "../assets/profile.png"
import Contnet from "../assets/contnet.svg"
import ChevronDown from "../assets/fi_chevron-down.svg"
import MainContent from './MainContent'


export default function Homepage() {

    return (
        <div className='flex pb-0 flex-col py-[14px] px-[21px] items-center gap-7 max-sm:justify-center bg-gray-100 '>

            <div className="flex w-[970px]  flex-col items-start ">
                <div className=' h-[60px] w-full flex  flex-col items-start gap-[10px] self-stretch  '>
                    <div className=' h-[] w-[] flex justify-between items-center self-stretch bg-white'>
                        <div>
                            <p className='text-[20px] font-medium text-[#45464E]'>Dashboard</p>

                        </div>

                        <div className='flex items-center gap-5 w-[246px] h-[32px] '>

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
                
                <div className='flex flex-col items-start self-stretch py-[4px] px-[20px] gap-[10px] h-[24px] w-full border-t-[1px] border-[#ffffff]'>
                    <div className='flex items-stretch gap-[11px] w-[240px] h-[16px]'>
                        
                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="none">
                            <path d="M5.09581 12.8548V10.8102C5.0958 10.2921 5.5171 9.87115 6.03895 9.86789H7.95506C8.47924 9.86789 8.90417 10.2898 8.90417 10.8102V12.8488C8.90416 13.2982 9.26934 13.6634 9.72195 13.6667H11.0292C11.6397 13.6682 12.2258 13.4285 12.6581 13.0005C13.0904 12.5724 13.3333 11.9912 13.3333 11.385V5.57724C13.3333 5.0876 13.1147 4.62315 12.7364 4.30901L8.29531 0.782856C7.519 0.166092 6.41024 0.186016 5.65692 0.830266L1.31133 4.30901C0.91515 4.61389 0.678358 5.07972 0.666656 5.57724V11.3791C0.666656 12.6425 1.69824 13.6667 2.97077 13.6667H4.24818C4.4661 13.6682 4.67565 13.5834 4.8303 13.431C4.98496 13.2785 5.07194 13.0711 5.07193 12.8548H5.09581Z" fill="#5570F1" />
                        </svg>
                    </div>

                </div>

            </div>

            <MainContent />


        </div>
    )
}
