'use client'

import Image from "next/image"
import AOS from 'aos'
import "aos/dist/aos.css"
import { useEffect } from "react"

export default function Bishops (){
    useEffect(() => {
      AOS.init({})
    }, [])


    return (<div>
    <div className='back'></div>
    <div id ="hello" className="flex justify-center items-center ...">
    <div className='pt-24'><Image src="/images/img10.jpg" width={800} height={240} alt="hello"/></div>
    </div>
    <div className="pt-20 pb-15 text-black text-center text-3xl font-semibold"><h1>Metropolitans</h1></div>
            <div className="rounded-2xl w-140 h-140 mx-auto bg-stone-100 text-center mb-10" data-aos="fade-right" data-aos-easing="linear"
     data-aos-duration="1250"> 
                <div><img className="pt-15 w-60 h-auto mx-auto" src="/images/bishop.png" alt="hello"/></div>
                <div className="pt-5"><span  style={{fontWeight:'bolder', fontSize:'25px'}}>H.H. Ignatius Aphrem II </span><br/>Supreme Head of the Universal Syrian Orthodox Church</div>
            </div>
            <div className="rounded-2xl w-140 h-140 mx-auto bg-stone-100 text-center mb-10" data-aos="fade-left" data-aos-easing="linear"
     data-aos-duration="1250"> 
                <div><img className="pt-15 w-60 h-auto mx-auto" src="/images/severios.jpg" alt="hello"/></div>
                <div className="pt-5"><span  style={{fontWeight:'bolder', fontSize:'25px'}}>H.E. Kuriakose Mor Severios</span><br/>Archbishop and Chief Metropolitan of the Knanaya Archdiocese and Metropolitan of Chingavanam & Gulf Regions</div>
            </div>
            <div className="rounded-2xl w-140 h-140 mx-auto bg-stone-100 text-center mb-10" data-aos="fade-right" data-aos-easing="linear"
     data-aos-duration="1250"> 
                <div><img className="pt-15 w-60 h-auto mx-auto" src="/images/silvanos-ayoub.png" alt="hello"/></div>
                <div className="pt-5"><span  style={{fontWeight:'bolder', fontSize:'25px'}}>H.G. Silvanos Ayoub</span><br/>Metropolitan of North America and Canada Regions <br/> of the Knanaya Archdiocese</div>
            </div>
            <div className="rounded-2xl w-140 h-140 mx-auto bg-stone-100 text-center mb-10" data-aos="fade-left" data-aos-easing="linear"
     data-aos-duration="1250"> 
                <div><img className="pt-15 w-60 h-auto mx-auto" src="/images/gregorios.jpg" alt="hello"/></div>
                <div className="pt-5"><span  style={{fontWeight:'bolder', fontSize:'25px'}}>H.G. Kuriakose Mor Gregorios</span><br/>Metropolitan of Kallissery & Malabar Regions <br/> of the Knanaya Archdiocese</div>
            </div>
            <div className="rounded-2xl w-140 h-140 mx-auto bg-stone-100 text-center mb-10" data-aos="fade-right" data-aos-easing="linear"
     data-aos-duration="1250"> 
                <div><img className="pt-15 w-60 h-auto mx-auto" src="/images/kuriakose.png" alt="hello"/></div>
                <div className="pt-5"><span  style={{fontWeight:'bolder', fontSize:'25px'}}>H.G. Ivanios Kuriakose</span><br/>Metropolitan of Ranny & Outside Kerala Regions <br/> of the Knanaya Archdiocese</div>
            </div>

</div>)
}
//grey color that was before: #393E46