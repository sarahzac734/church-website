'use client'
import React from 'react'
import Link from 'next/link'
import { AiOutlineMenu } from 'react-icons/ai'
import { useState } from 'react'

const NavBar = () => {
    const [menuOpen, setMenuOpen] = useState(false)

    const handleNav = () => {
       setMenuOpen(!menuOpen);
    }



  return (
   <nav className="fixed  z-1000 w-full h-25 shadow-xl bg-white">
    <div className='flex justify-between items-center h-full w-full px-8 2xl:px-16 text-black'>
      <Link href="/" className='font-black'>St. John the Baptist Knanaya Church of Greater Washington</Link>
      <div className="hidden lg:flex">
        <ul className="hidden lg:flex">
            <Link href="/">
                <li className="ml-10 hover:border-b text-base">Home</li>
            </Link>
            <li>
                <div className="dropdown">
                <button className="ml-10 hover:border-b text-base">About Us
                <i className="fa fa-caret-down"></i>
                </button>
                <div className="dropdown-content">
                    <Link href="/metropolitans">Metropolitans</Link>
                    <Link href="/clergy">Clergy</Link>
                    <Link href="/admin">Administration</Link>
                </div>
                </div>
            </li>
            <Link href="/service">
                <li className="ml-10 hover:border-b text-base">Service</li>
            </Link>
            <Link href="/news">
                <li className="ml-10 hover:border-b text-base">News</li>
            </Link>
            <li>
                <div className="dropdown">
                <button className="ml-10 hover:border-b text-base">Resources
                <i className="fa fa-caret-down"></i>
                </button>
                <div className="dropdown-content">
                    <Link href="/prayers">Holy Week Prayers</Link>
                    <Link href="/calendar">Holy Qurbana Calendar</Link>

                </div>
                </div>
            </li>
            <Link href="/contact">
                <li className="ml-10 hover:border-b text-base">Contact Us</li>
            </Link>

        </ul>
      </div>
      <div onClick={handleNav} className="lg:hidden cursor-pointer pl-24">
        <AiOutlineMenu size={25} />
      </div>
    </div>
    <div className={
        menuOpen ? "p-20 lg:hidden bg-cyan-700 ease-in duration-500" : "top-[-100%]" 
    }>
       { menuOpen &&
                <div className="flex-col py-3">
                    <ul>
                    <Link href="/">
                        <li 
                            onClick={() => setMenuOpen(false)}
                            className="cursor-pointer py-3">
                            Home
                        </li>
                    </Link>
                    <li>
                        <div className="dropdown">
                        <button className="ml-10 hover:border-b text-base">About Us
                        <i className="fa fa-caret-down"></i>
                        </button>
                        <div className="dropdown-content">
                            <Link onClick={() => setMenuOpen(false)} href="/metropolitans">Metropolitans</Link>
                            <Link onClick={() => setMenuOpen(false)} href="/clergy">Clergy</Link>
                            <Link onClick={() => setMenuOpen(false)} href="/admin">Administration</Link>
                        </div>
                        </div>
                    </li>
                    <Link href="/service">
                        <li onClick={() => setMenuOpen(false)} className="cursor-pointer">Service</li>
                    </Link>
                    <Link href="/news">
                        <li onClick={() => setMenuOpen(false)} className="cursor-pointer">News</li>
                    </Link>
                    <li>
                        <div className="dropdown">
                        <button className="ml-10 hover:border-b text-base">Resources
                        <i className="fa fa-caret-down"></i>
                        </button>
                        <div className="dropdown-content">
                            <Link onClick={() => setMenuOpen(false)} href="/prayers">Holy Week Prayers</Link>
                            <Link onClick={() => setMenuOpen(false)} href="/calendar">Holy Qurbana Calendar</Link>

                        </div>
                        </div>
                    </li>
                    <Link href="/contact">
                        <li onClick={() => setMenuOpen(false)} className="cursor-pointer">Contact Us</li>
                    </Link>

                    </ul>
            
                </div>
            }
    </div>
   </nav>
  )
}

export default NavBar
