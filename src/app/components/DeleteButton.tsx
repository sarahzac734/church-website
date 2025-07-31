'use client'

import { FaTrashAlt } from "react-icons/fa";
import { useRouter } from "next/navigation";
import { useState } from "react";


interface DeleteProp {
    id: string,
  }

export default function DeleteButton ({ id }: DeleteProp) {
    const router = useRouter()
    const [dlt,setdelete] = useState(false)
    const [ok, setOk] = useState(false)



    const openCard = () => {
        setdelete(true)

    }
    const cancelBtn = () => {
        setdelete(false)
    }

    

    const deleteNews = async () => {
        setOk(true)

        if(ok){
            const res = await fetch( process.env.NEXT_PUBLIC_URL + `/api/news?id=${id}`,{
                method: "DELETE",
            })
            setdelete(false)
            if(res.ok){
                router.refresh()
            }
        }
    }

    return ( 
        <>
            <div>{dlt && <div ><div className="border-stone-400 rounded-2xl pt-8 pb-8 bg-stone-200 w-100">
                        <h2 className="text-center font-bold text-l">Are you sure?</h2>
                        <div className="flex gap-2 pt-8 justify-center">
                        <div>
                            <button onClick={cancelBtn} className="bg-cyan-600 w-30 h-10 font-extrabold cursor-pointer rounded-2xl text-white">Cancel</button>
                        </div>
                        <div>   
                            <button onClick={deleteNews} className="bg-cyan-950 w-40 h-10 font-bold rounded-2xl cursor-pointer text-white">OK</button>
                        </div>
                        </div>
                        </div></div>}</div>
                        <div><button className="cursor-pointer" onClick={openCard}><FaTrashAlt size={24}/></button></div>

        </>
    )
}