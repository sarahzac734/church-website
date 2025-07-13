import Image from "next/image"

export default function Service () {
    return (
        <div className="pt-24 pb-20">
            <div id ="hello" className="flex justify-center items-center ...">
            <div ><Image src="/images/service.jpg" width={800} height={200} alt="hello"/>
            </div>
            </div>

        <div className="text-center">
            <h2 className="text-3xl pt-6 font-semibold text-black"></h2>
        </div>
            <div className="flex py-10 justify-center text-center">
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
            
        </div>
    )
}