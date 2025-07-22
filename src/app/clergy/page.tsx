import { IoPerson } from "react-icons/io5";
import Image from "next/image";

export default function Clergy () {
    return (
        <div>
            <div id ="hello" className="flex justify-center items-center ...">
            <div className='pt-25'><Image src="/images/photo4.jpg" width={900} height={200} alt="hello"/></div>
            </div>
        <div className="pt-20 pb-15">
        <div className="text-center">
            <h2 className="text-3xl font-semibold text-black">Clergy</h2>
            <div className="pt-30 pb-30 flex justify-center text-center items-center ...">
                    <div className="rounded-2xl w-70 h-70 mx-auto bg-stone-100 text-center">
                        <div className="mt-10">
                            <p className="pb-4 underline font-bold text-xl">Vicar</p>
                            <IoPerson className="bg-sky-950 mx-auto" color="white" size={100}/> 
                            <p className="pt-4">Fr. Anil K Thomas</p>
                        </div>
                    </div>

            </div>
        </div>
        </div>
        </div>
    
    )
}