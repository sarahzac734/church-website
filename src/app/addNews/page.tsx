'use client'

import { useState } from "react"
import { useRouter } from "next/navigation"
import * as Yup from "yup"

export default function AddNews() {

    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")
    const router = useRouter()

    const [errors, setErrors] = useState({})

    const validationSchema = Yup.object({
        title:Yup.string().required("Title Required"),
        description:Yup.string().required("Description Required"),
     })

    const handleSubmit = async (e: React.SyntheticEvent<HTMLFormElement>) => {
        e.preventDefault()

        try {

            await validationSchema.validate({title, description},{abortEarly: false} )

            const res = await fetch( 'http://localhost:3000/api/news', {
                method: "POST",
                headers: {
                "Content-type": "application/json",
                },
                body: JSON.stringify({ title, description})
            } )

            if (res.ok){
                router.push('/webAdmin')
            }else{
                throw new Error("Failed to create ")
            }


        } catch (error) {
            const newErrors = {}

            error.inner.forEach(theError => {
                newErrors[theError.path] = theError.message
            })
            setErrors(newErrors)
        }
    }




    return (
        <>
         <div className="pt-20"> 
            <div id="hello" className="text-3xl text-center pt-20 p-10 font-semibold text-white">Add News</div>
        </div>
       <form onSubmit={handleSubmit} className="mt-6 mb-20 flex flex-col gap-3"> 
            <input 
                onChange={(e) => setTitle(e.target.value)}
                value={title}
                name="title"
                className="border border-slate-500 mx-6 px-8 py-2 "
                type="text"
                placeholder="News Title"
                />

            <input 
                onChange={(e) => setDescription(e.target.value)}
                value={description}
                name="description"
                className="border border-slate-500 mx-6 px-8 py-2 "
                type="text" 
                placeholder="News Description"/>
            <button type="submit" className="bg-sky-950 text-white cursor-pointer rounded-sm mx-6 px-8 py-2 font-bold w-fit">Add News</button>
       </form>
       </>
       
    )
}