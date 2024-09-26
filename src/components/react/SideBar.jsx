import React, { useState } from 'react'

export const SideBar = () => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <nav className="text-sm text-darkGrayishBlueCustom">
            <button className="flex items-center border-none min-w-4"
                    onClick={()=>setIsOpen(!isOpen)}
            >
                <img src={isOpen?"./images/icon-close.svg":"./images/icon-menu.svg"} alt="" className="w-full z-[100]"/>
            </button>

         
            <ul className={"fixed z-[90] top-0 left-0 w-[65%] h-screen text-xl bg-white pt-24 pl-6 flex flex-col gap-6 font-bold text-veryDarkBlueCustom after:content-[''] after:absolute after:top-0 after:left-[100%] after:w-screen after:h-full after:bg-black after:opacity-60 after:z-[90] "
                        + (isOpen ? 'translate-x-[0%] after:translate-x-[0%] after:opacity-0':'translate-x-[-100%]  after:opacity-60 after:translate-x-[-100%] ') + "transition-transform duration-500 after:duration-900  after:transition-opacity"
            }
            >
                <li><a href="" className='translate-x-[-100%]'>Collections</a></li>
                <li><a href="">Men</a></li>
                <li><a href="">Women</a></li>
                <li><a href="">About</a></li>
                <li><a href="">Contact</a></li>
            </ul>
       
        </nav>
    )
}