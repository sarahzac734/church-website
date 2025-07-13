import Image from "next/image"

export default function Bishops (){
    return (<div>
    <div className='back'></div>
    <div id ="hello" className="flex justify-center items-center ...">
    <div className='pt-24'><Image src="/images/img10.jpg" width={800} height={240} alt="hello"/></div>
    </div>
    <div className="pt-20 pb-15 text-black text-center text-3xl font-semibold"><h1>Metropolitans</h1></div>
    <div  className="grid grid-cols-6 gap-4">
      <div className="col-span-4 col-start-2 ..."><img className="rounded-full w-90 h-100 mx-auto" src="/images/bishop.png" alt="hello"/></div>
      <div className="col-span-2 col-start-3 ..."><span style={{fontWeight:'bolder', fontSize:'25px'}}>H.H. Ignatius Aphrem II </span><br/>Supreme Head of the Universal Syrian Orthodox Church</div>
      <div className="col-start-1 col-end-3 ..."><img className="rounded-full w-100 h-100 mx-auto" src="/images/severios2.png" alt="hello"/></div>
      <div className="col-span-2 col-start-5 ..."><img className="rounded-full w-100 h-100 mx-auto" src="/images/silvanos.png" alt="hello"/></div>
      <div className="col-span-2 col-start-1 ..."><span style={{fontWeight:'bolder', fontSize:'20px'}}>H.E. Kuriakose Mor Severios</span><br/>Archbishop and Chief Metropolitan of the Knanaya Archdiocese and Metropolitan of Chingavanam & Gulf Regions</div>
      <div className="col-span-2 col-start-5 ..."><span style={{fontWeight:'bolder', fontSize:'20px'}}>H.G. Silvanos Ayoub</span><br/>Metropolitan of North America and Canada Regions of the Knanaya Archdiocese</div>
      <div className="col-start-1 col-end-3 ..."><img className="rounded-full w-100 h-100 mx-auto" src="/images/k.png" alt="hello"/></div>
      <div className="col-span-2 col-start-5 ..."><img className="rounded-full w-100 h-100 mx-auto" src="/images/IvaniousKuriakose.png" alt="hello"/></div>
      <div className="col-span-2 col-start-1 ..."><span style={{fontWeight:'bolder', fontSize:'20px'}}>H.G. Kuriakose Mor Gregorios</span><br/>Metropolitan of Kallissery & Malabar Regions of the Knanaya Archdiocese</div>
      <div className="col-span-2 col-start-5 ..."><span style={{fontWeight:'bolder', fontSize:'20px'}}>H.G. Ivanios Kuriakose</span><br/>Metropolitan of Ranny & Outside Kerala Regions of the Knanaya Archdiocese</div>
    </div>

</div>)
}
//grey color that was before: #393E46