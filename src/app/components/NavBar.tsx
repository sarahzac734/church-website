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

    console.log("hi " + menuOpen)


  return (
   <nav className="fixed w-full h-25 shadow-xl bg-white">
    <div className='flex justify-between items-center h-full w-full px-8 2xl:px-16 text-black'>
      <Link href="/" className='font-black'>St. John the Baptist Knanaya Church of Greater Washington</Link>
      <div className="hidden md:flex">
        <ul className="hidden md:flex">
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
                    <Link href="/prayerForm">Prayer Request Form</Link>
                    <Link href="/calendar">Holy Qurbana Calendar</Link>
                </div>
                </div>
            </li>
            <Link href="/contact">
                <li className="ml-10 hover:border-b text-base">Contact Us</li>
            </Link>

        </ul>
      </div>
      <div onClick={handleNav} className="md:hidden cursor-pointer pl-24">
        <AiOutlineMenu size={25} />
      </div>
    </div>
   </nav>
  )
}

export default NavBar
