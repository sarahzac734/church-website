'use client'

import { useState } from "react"
import { useRouter } from "next/navigation"

interface EditProps {
    id: string,
    title: string,
    description: string,
  }




export default function EditNews ({id, title, description}: EditProps) {

    const [newTitle, setNewTitle] = useState(title)
    const [newDescription, setNewDes] = useState(description)
    const router = useRouter()

    const handleSubmit = async (e: React.SyntheticEvent<HTMLFormElement>) => {
        e.preventDefault()

        try {
             await fetch( `/api/news/${id}`, {
                method: "PUT",
                headers: {
                    "Content-type": "application/json"
                },
                body: JSON.stringify({ newTitle, newDescription}),
            })

            router.push('/news')
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <>
         <div className="pt-20"> 
            <div id="hello" className="text-3xl text-center pt-20 p-10 font-semibold text-white">Edit News</div>
        </div>
       <form  onSubmit={handleSubmit} className="mt-6 mb-20 flex flex-col gap-3"> 
            <input 
                name="title"
                onChange={(e) => setNewTitle(e.target.value)}
                value={newTitle}
                className="border border-slate-500 mx-6 px-8 py-2 "
                type="text"
                placeholder="News Title"/>
            <input 
                name="description"
                onChange={(e) => setNewDes(e.target.value)}
                value={newDescription}
                className="border border-slate-500 mx-6 px-8 py-2 "
                type="text" 
                placeholder="News Description"/>
            <button type="submit" className="bg-sky-950 text-white cursor-pointer rounded-sm mx-6 px-8 py-2 font-bold w-fit">Edit News</button>
       </form>
       </>
    )
}