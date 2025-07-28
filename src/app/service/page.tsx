import Image from "next/image"

export default function Service () {
    return (
        <div className="pt-24 pb-10 lg:pb-40">
            <div id ="hello" className="flex justify-center items-center ...">
            <div ><Image src="/images/service.jpg" width={800} height={200} alt="hello"/>
            </div>
            </div>
        
        <div className="text-center">
            <h2 className="text-3xl pt-6 font-semibold text-black"></h2>
        </div>
            <div className="flex py-15 justify-center text-center">
            <div className="rows-2">
                <p className="pb-2 underline"><span style={{fontWeight:"bold", fontSize:"25px"}}>Service</span></p>
                <p className="pb-2">Morning Prayer - 9:30 AM</p>
                <p className="pb-2">Holy Qurbana - 10:00 AM</p>
                <p className="break-after-row">Holy Mass is conducted every 3rd Saturday of each month.</p>
                <div className="pt-8 p-6"></div>
                <p className="pb-2 underline"><span style={{fontWeight:"bold", fontSize:"25px"}}>Location</span></p>
                <p>1234 Some Area WA 20000</p>
        </div>
        </div>
        <div className="lg:float-right">
        <div className="border border-slate-100 mx-auto lg:mx-5 rounded-2xl lg:-my-85 bg-stone-100  w-70 h-110">
                        <p className="text-center font-bold text-lg pt-6 pb-5 underline">Holy Week Schedule</p>
                        <ul className="list-disc">
                                <p className="mx-5 pb-3 font-bold text-cyan-950">March 24 - Palm Sunday</p>
                                <li className="mx-10 text-sm pb-3">9:30 AM - Morning Prayer & Holy Qurbana</li>
                                <p className="mx-5 pb-3 font-bold text-cyan-950">March 27 - Pesaha/Passover</p>
                                <li className="mx-10 text-sm pb-3">6:30 PM - Evening Prayer & Holy Qurbana</li>
                                <p className="mx-5 pb-3 font-bold text-cyan-950">March 29 - Good Friday</p>
                                <li className="mx-10 text-sm pb-3">8:30 AM - Morning Prayer</li>
                                <p className="mx-5 pb-3 font-bold text-cyan-950">March 30 - Easter</p>
                                <li className="mx-10 text-sm">9:30 AM - Evening Prayer & Holy Qurbana</li>
                        </ul>
                </div>
        
                </div>
        </div>
    )
}