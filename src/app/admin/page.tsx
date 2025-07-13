import { IoPerson } from "react-icons/io5";
import Image from "next/image";

export default function Admins() {
    return (
        <div>
        <div id ="hello" className="flex justify-center items-center ...">
        <div className='pt-24'><Image src="/images/admin.jpg" width={800} height={200} alt="hello"/></div>
        </div>
        <div className="pt-20 pb-15">
            <div className="text-center">
                <h2 className="text-3xl font-semibold text-black">Administration Team</h2>
                <div className="pt-30 pb-30 flex justify-center items-center ...">
                    <div className="columns-2 gap-50">
                        <p className="pb-4 font-bold text-xl">Secretary</p>
                        <IoPerson className="bg-sky-950" color="white" size={100}/> 
                        <p className="pt-4">Thomas Jacob</p>

                        <p className="pb-4 font-bold text-xl">Trustee</p>
                        <IoPerson className="bg-sky-950" color="white" size={100}/>
                        <p className="pt-4">Tino Philip</p>
                    </div>
                </div>
        </div>
        </div>
        </div>
        
    )
}