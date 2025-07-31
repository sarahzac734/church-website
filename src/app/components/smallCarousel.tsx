'use client'

import useEmblaCarousel from 'embla-carousel-react'
import Fade from 'embla-carousel-fade'

import { IoIosArrowDropleftCircle, IoIosArrowDroprightCircle } from "react-icons/io";

import { useCallback } from 'react'


export default function SmallCarousel() {
    const IMAGES = [{id:1,name:"/images/img2.jpg"},{id:2,name:"/images/img4.jpg"}]

    const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [Fade()])

    const scrollPrev = useCallback(() => {
        if (emblaApi) emblaApi.scrollPrev()
    }, [emblaApi])

    const scrollNext = useCallback(() => {
        if (emblaApi) emblaApi.scrollNext()
    }, [emblaApi])

    return (
        <>
            <div className="embla">
            <div className="embla__viewport mx-20 w-80 h-200 lg:h-120" ref={emblaRef}>
            <div className="embla__container">
                {IMAGES.map((image) => (
                    <div key={image.id} className="embla__slide">
                        <img  src={image.name} />
                        
                    </div>
                ))}
            </div>
            </div>
                <button className="embla__prev" onClick={scrollPrev}>
                    <IoIosArrowDropleftCircle className=' bg-white' />

                </button>
                <button className="embla__next" onClick={scrollNext}>
                    <IoIosArrowDroprightCircle/>
                </button>
           </div>
        </>
    )

}
