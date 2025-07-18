'use client'

import { FaTrashAlt } from "react-icons/fa";
import { useRouter } from "next/navigation";

export default function DeleteButton ({ id }) {
    const router = useRouter()
    const deleteNews = async () => {
        const confirmed = confirm("Are you sure?")

        if(confirmed){
            const res = await fetch(`http://localhost:3000/api/news?id=${id}`,{
                method: "DELETE",
            })

            if(res.ok){
                router.refresh()
            }
        }
    }

    return ( 
        <button onClick={deleteNews}><FaTrashAlt size={24}/></button>
    )
}