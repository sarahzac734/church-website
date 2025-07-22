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
        <div className="pt-10 pb-20">
        <form onSubmit={handleOnSubmit}>
            <div className="text-center">
            <div className="mt-20 px-6">
            <div className=" mb-5">
                <input 
                        type="text"
                        value={firstName}                 
                        onChange={(e) => setFirstName(e.target.value)}
                        id="firstName"
                        name="firstName" 
                        className="py-2.5 px-2 rounded-lg border-black w-100 border-1 text-sm text-gray-900"
                        placeholder="First Name" 
                    />
            </div>
            <div className="mb-5">
                <input 
                    type="text"
                    value={reason}
                    onChange={(e) => setReason(e.target.value)}
                    id="reason"
                    name="reason"
                    className="py-2.5 px-2 rounded-lg border-black w-100 border-1 text-sm text-gray-900"
                    placeholder="Reason"
                    />

            </div>
            <div className="mb-5">
                <input 
                        type="text"
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                        id="lastName" 
                        name="lastName" 
                        className="py-2.5 px-2 rounded-lg border-black border-1 w-100 text-sm text-gray-900" 
                        placeholder="Last Name" 
                        />
            </div>

            <div className="mb-5">
              <input 
                     type="email"
                     value={email}  
                     onChange={(e) => setEmail(e.target.value)}
                     id="email" 
                     name="email" 
                     className="py-2.5 px-2 rounded-lg border-black border-1 w-100 text-sm text-gray-900" 
                     placeholder="Email" 
                     />
          </div>
          </div>
          <div className="text-center">
                    <input 
                            name="comment"
                            id="comment"
                            value={comment}
                            onChange={(e) => setComment(e.target.value)}
                            className="border-1 px-2 rounded-lg"
                            placeholder="Comment"
                        />
          </div>
          <button className="border-1 cursor-pointer rounded-lg">Submit</button>
            </div>
        </form>
        </div>
        </>)
}