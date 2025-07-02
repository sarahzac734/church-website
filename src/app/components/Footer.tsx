'use client'

import Link from "next/link"

//bg-blue-950?
export default function Footer (){
    return (
    <>
     <footer className="blue">
        <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
                <div className="md:flex md:justify-between">
                <div className="mb-6 md:mb-0">
                     <span className="self-center text-2xl font-semibold whitespace-nowrap text-black-50">St. John the Baptist Knanaya Church</span>
                     <ul className="text-black-50">
                         <li className="mb-4 mt-3" >
                            1234 Some Area WA 20000
                       </li>
                        <li>
                            dcknanaya@gmail.com
                         </li>
                   </ul>
             </div>
             <div className="grid grid-cols-2 gap-8 sm:gap-8 sm:grid-cols-3">
                <div>
                        <h2 className="mb-6 text-sm font-semibold uppercase text-black-50">Reach Us</h2>
                       <ul className="text-black-50">
                         <li className="mb-4">
                             <Link href="/contact" className="hover:underline">Contact</Link>
                         </li>
                          <li>
                              <Link href="/prayerForm"  className="hover:underline">Prayer Request Form</Link>
                          </li>
                    </ul>
                 </div>
                 <div>
                      <h2 className="mb-6 text-sm font-semibold text-black-50 uppercase">Resources</h2>
                     <ul className="text-black-50 ">
                         <li className="mb-4">
                         <Link href="/prayerForm" className="hover:underline ">Holy Week Prayers</Link>
                         </li>
                          <li>
                              <a href="/calendar" className="hover:underline">Qurbana Calendar</a>
                          </li>
                   </ul>
                </div>
             </div>
         </div>
         <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <div className="sm:flex sm:items-center sm:justify-between">
           <span className="text-sm text-black-50 sm:text-center">© 2025 St. John the Baptist Knanaya Church - All Rights Reserved.
           </span>
        </div>
        </div>
     </footer>

    </>
    )
}