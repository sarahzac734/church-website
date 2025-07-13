export default function EditNews () {
    return (
        <>
         <div className="pt-20"> 
            <div id="hello" className="text-3xl text-center pt-20 p-10 font-semibold text-white">Add News</div>
        </div>
       <form  className="mt-6 mb-20 flex flex-col gap-3"> 
            <input 
                name="title"
                className="border border-slate-500 mx-6 px-8 py-2 "
                type="text"
                placeholder="Topic Title"/>
            <input 
                name="description"
                className="border border-slate-500 mx-6 px-8 py-2 "
                type="text" 
                placeholder="Topic Description"/>
            <button type="submit" className="bg-sky-950 text-white mx-6 px-8 py-2 font-bold w-fit">Update News</button>
       </form>
       </>
    )
}