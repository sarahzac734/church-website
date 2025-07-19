'use client'

import Link from "next/link"
import { useState } from "react"

export default function AdminButton () {
    const [addNews, setAddNews] = useState(false)
    const handleBtn = () => {
        setAddNews(true)
        if(addNews){
            setAddNews(false)
        }
    }
    return (
        <div className="text-center">
         <button onClick={handleBtn} className="bg-sky-950 rounded-sm font-bold px-10 text-white text-center cursor-pointer">Admin</button>
         <div>{addNews ? <div className="mt-2 pb-2"><button className="bg-sky-950 rounded-sm font-semibold px-10 text-white text-center"><Link href="/addNews">Add News</Link></button></div>
            : null}
         </div>
        </div>
    )
}