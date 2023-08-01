import React from 'react'
import Category from "../assets/Category.svg"
import Bag from "../assets/Bag.svg"
import Chat from "../assets/Chat.svg"
import Folder from "../assets/Folder.svg"
import settingIcon from '../assets/Setting.svg';

import User from "../assets/User.svg"
import Frame from "../assets/Frame.svg"


const List = ({ image, text, digit }) => {
    return (

        <div className=' h-[24px] w-full flex flex-row pl-0 items-center gap-4 '>
            {image}
            <p className='text-[#53545C] text-center font-normal text-sm'>{text}</p>
   
            {digit}

        </div>
    )
}


export default function Sidebar() {
    return (

        <div className='bg-white w-[296px] h-[1024px] shadow flex flex-col items-center justify-between overflow-overlay max-sm:hidden'>
            <div>
                <div className='flex items-center mb-12'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="45" height="44" viewBox="0 0 45 44" fill="none">
                        <path d="M18.5074 8.03699C18.6177 8.2616 18.6906 8.50214 18.7233 8.74942L19.3265 17.7192L19.626 22.2277C19.6291 22.6913 19.7018 23.152 19.8419 23.5948C20.2035 24.4539 21.0736 24.9999 22.0202 24.9618L36.4443 24.0184C37.0689 24.0081 37.6721 24.2417 38.1211 24.6678C38.4953 25.0229 38.7369 25.4874 38.813 25.987L38.8385 26.2904C38.2416 34.5556 32.1713 41.4494 23.9232 43.229C15.6751 45.0086 7.21712 41.2493 3.14128 33.9923C1.96625 31.884 1.23232 29.5666 0.982573 27.1761C0.878241 26.4685 0.8323 25.7538 0.8452 25.0389C0.832319 16.1776 7.1426 8.51676 15.9758 6.66991C17.0389 6.50438 18.0811 7.06718 18.5074 8.03699Z" fill="#97A5EB" />
                        <path opacity="0.4" d="M24.3948 0.335118C34.2745 0.586468 42.5781 7.69088 44.1764 17.26L44.1612 17.3306L44.1176 17.4333L44.1236 17.7151C44.101 18.0886 43.9568 18.4478 43.7084 18.7381C43.4495 19.0404 43.0959 19.2462 42.7065 19.3261L42.4691 19.3587L25.8274 20.437C25.2738 20.4916 24.7227 20.3131 24.311 19.9459C23.968 19.6399 23.7487 19.2269 23.6867 18.7818L22.5697 2.16431C22.5503 2.10812 22.5503 2.04721 22.5697 1.99102C22.585 1.53297 22.7866 1.1 23.1295 0.788841C23.4725 0.477686 23.9282 0.314276 24.3948 0.335118Z" fill="#FFCC91" />
                    </svg>
                    <p className='text-center text-base font-bold text-[#45464E]'>Metrix</p>

                </div>

                <div className="inline-flex flex-col items-start gap-[24px]">

                    <div className='flex flex-col w-[233px] py-[16px] px-[20px]  items-start rounded-[16px] bg-[#5570F1]'>

                        <div className="flex items-center gap-4">
                            <img src={Category} className='' />
                            <p className='font-normal text-sm '>Dashboard</p>
                        </div>

                    </div>

                    <List
                        image={<img src={Bag} className='flex w-[24px] h-[24px] py-[2.278px] px-[2.25px] justify-center items-center' />}
                        text="orders"
                        digit={<div className="flex rounded-[500px] bg-[#FFCC91] w-6  items-center justify-center">8</div>}
                    />


                    <List
                        image={<img src={User} className='flex w-[24px] h-[24px] py-[2.278px] px-[2.25px] justify-center items-center' />}
                        text="Customers"
                    />
                    <List
                        image={<img src={Folder} className='flex w-[24px] h-[24px] py-[2.278px] px-[2.25px] justify-center items-center' />}
                        text="Inventory"
                    />

                    <List
                        image={<img src={Chat} className='flex w-[24px] h-[24px] py-[2.278px] px-[2.25px] justify-center items-center' />}
                        text="Convarsations"
                        digit={<div className="flex rounded-[500px] bg-[#FFCC91] w-6 items-center justify-center">8</div>}
                    />
                    <List
                        image={<img src={settingIcon} className='flex w-[24px] h-[24px] py-[2.278px] px-[2.25px] justify-center items-center' />}
                        text="Settings"
                    />



                </div>
            </div>



            <div className='flex justify-end flex-col'>
                <div className='flex w-[232px] py-[11px] px-[16px] flex-row items-start gap-[10px] rounded-[16px] bg-[#5e6366]  mb-4'>
                    <div className='flex items-center gap-[12px]'>

                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <path d="M3 18V12C3 9.61305 3.94821 7.32387 5.63604 5.63604C7.32387 3.94821 9.61305 3 12 3C14.3869 3 16.6761 3.94821 18.364 5.63604C20.0518 7.32387 21 9.61305 21 12V18" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M21 19C21 19.5304 20.7893 20.0391 20.4142 20.4142C20.0391 20.7893 19.5304 21 19 21H18C17.4696 21 16.9609 20.7893 16.5858 20.4142C16.2107 20.0391 16 19.5304 16 19V16C16 15.4696 16.2107 14.9609 16.5858 14.5858C16.9609 14.2107 17.4696 14 18 14H21V19ZM3 19C3 19.5304 3.21071 20.0391 3.58579 20.4142C3.96086 20.7893 4.46957 21 5 21H6C6.53043 21 7.03914 20.7893 7.41421 20.4142C7.78929 20.0391 8 19.5304 8 19V16C8 15.4696 7.78929 14.9609 7.41421 14.5858C7.03914 14.2107 6.53043 14 6 14H3V19Z" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                        <p className='text-[#1c1d22] text-base font-normal'>Contact Support</p>
     
                    </div>

                </div>

                <div className='inline-flex  items-center rounded-[16px] pt-[11px] pr-[33px] pb-[13px] pl-[20px] bg-[#ffcc91] mb-4'>

                    <div className='flex flex-col items-start gap-4'>
                        <span className='flex items-end gap-3'>

                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                <path d="M20 12V22H4V12" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M22 7H2V12H22V7Z" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M12 22V7" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M12 7H16.5C17.163 7 17.7989 6.73661 18.2678 6.26777C18.7366 5.79893 19 5.16304 19 4.5C19 3.83696 18.7366 3.20107 18.2678 2.73223C17.7989 2.26339 17.163 2 16.5 2C13 2 12 7 12 7Z" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M12 7H7.5C6.83696 7 6.20107 6.73661 5.73223 6.26777C5.26339 5.79893 5 5.16304 5 4.5C5 3.83696 5.26339 3.20107 5.73223 2.73223C6.20107 2.26339 6.83696 2 7.5 2C11 2 12 7 12 7Z" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                            <p>Free Gift Await You!</p>
                        </span>

                        <div className='flex justify-center'>
                            <p className='flex w-[144px] h-[18px] flex-col justify-center text-sm '>Upgrade your account </p>
                        </div>

                    </div>


                </div>

                <div className='inline-flex items-start gap-3 w-[118px] h-[46px] bg-white mb-4'>

                    <div className='flex p-[11px] flex-col items-start gap-[10px]'>
                        <div className='flex items-center gap-[8px]'>
                            <img src={Frame} alt=" logoutIcon" />

                        </div>

                    </div>

                    <div className='flex p-[11px] flex-col items-start gap-[10px]'>
                        <div className='flex items-center gap-[8px]'>

                        </div>

                    </div>

                </div>

    

            </div>
        </div>
    )
}
