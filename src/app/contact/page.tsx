'use client'

import { useState } from "react";

export default function Contact (){

    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [email, setEmail] = useState("")
    const [comment, setComment] = useState("")
    const [reason, setReason] = useState("")


    async function handleOnSubmit(e: React.SyntheticEvent){
        e.preventDefault();

        await fetch ('/api/email', {
            method: 'POST',
            body: JSON.stringify({firstName,lastName,email,comment,reason})
        })
    }


    return (
        <>
        <div className="pt-20"> 
            <div id="hello" className="text-3xl text-center pt-20 p-10 font-semibold text-white">Contact Us</div>
        </div>
        <div className="pt-5 pb-20">
        <form onSubmit={handleOnSubmit}>
            <div className="mt-20 ">
            <div className="pb-10 grid grid-cols-2 mx-auto gap-y-5 gap-x-10 w-120 lg:w-190">
                <input 
                     type="text"
                     value={firstName}                 
                     onChange={(e) => setFirstName(e.target.value)}
                     id="firstName"
                     name="firstName" 
                     className="... px-3 border border-stone-400 rounded-xl h-10  bg-stone-100"
                     placeholder="First Name" 
                     />
           
                

                <input 
                     type="text"
                     value={lastName}
                     onChange={(e) => setLastName(e.target.value)}
                     id="lastName" 
                     name="lastName" 
                     className="... px-3 border border-stone-400 rounded-xl h-10  bg-stone-100"
                     placeholder="Last Name" 
                     />

                <input 
                     type="email"
                     value={email}  
                     onChange={(e) => setEmail(e.target.value)}
                     id="email" 
                     name="email" 
                     className="... px-3 border border-stone-400 rounded-xl h-10  bg-stone-100"                     
                     placeholder="Email" 
                     />

                <input 
                    type="text"
                    value={reason}
                    onChange={(e) => setReason(e.target.value)}
                    id="reason"
                    name="reason"
                    className="... px-3 border border-stone-400 rounded-xl h-10  bg-stone-100"
                    placeholder="Reason"
                    />
                </div>
                </div>

          <div className="w-120 lg:w-190 h-60 grid grid-cols-1 mx-auto">
                    <textarea 
                            name="comment"
                            id="comment"
                            value={comment}
                            onChange={(e) => setComment(e.target.value)}
                            className=" border border-stone-400 p-3 rounded-xl bg-stone-100 ..."                           
                            placeholder="Comment"
                        />
          </div>
            <div className="py-10 pb-50 w-120 lg:w-190 grid grid-cols-1 mx-auto">
                <button className="bg-cyan-800 rounded-xl h-10 text-white font-bold cursor-pointer">Submit</button>
            </div>
         </form>
        </div>
        </>)
}