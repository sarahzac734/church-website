'use client'

import Image from "next/image"
import ImageSlider from "./components/ImageSlider"


const IMAGES = ["/images/test.png"]


export default function Home() {
  return (
    <>
    <div className="pt-10">    
    <div className="text-center">
        <div className="flex pt-15 pb-50 justify-center items-center ..." >
            <ImageSlider imageUrls={IMAGES}/>
        </div>

    </div>
    </div>
   
    </>
  )
}
