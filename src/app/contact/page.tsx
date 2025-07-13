'use client'

export default function Contact (){

    async function handleOnSubmit(e: React.SyntheticEvent){
        e.preventDefault();

        await fetch ('/api/email', {
            method: 'POST',
            body: JSON.stringify({
                firstName: 'Cosmo'
            })
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
                <input type="text"  id="first_name" name="firstName" className="py-2.5 px-2 rounded-lg border-black w-100 border-1 text-sm text-gray-900" placeholder="First Name" required />
            </div>
            <div className="mb-5">
                <input type="text" id="last_name" name="lastName" className="py-2.5 px-2 rounded-lg border-black border-1 w-100 text-sm text-gray-900" placeholder="Last Name" required />
            </div>

            <div className="mb-5">
              <input type="email"  id="email" name="email" className="py-2.5 px-2 rounded-lg border-black border-1 w-100 text-sm text-gray-900" placeholder="Email" required />
          </div>
          </div>
          <div className="text-center">
          <textarea name="comment" className="border-1 px-2 rounded-lg"rows={4} cols={50} placeholder="Comment"></textarea>
          </div>
          <button className="border-1 rounded-lg">Submit</button>
            </div>
        </form>
        </div>
        </>)
}