'use client'

import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'
import Fade from 'embla-carousel-fade'

import { IoIosArrowDropleftCircle, IoIosArrowDroprightCircle } from "react-icons/io";

import { useCallback } from 'react'
import ImageSlider from './ImageSlider'


export default function Carousel() {
    const IMAGES = ["/images/admin.jpg", "/images/photo4.jpg"]

    const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [Autoplay(),Fade()])

    const scrollPrev = useCallback(() => {
        if (emblaApi) emblaApi.scrollPrev()
    }, [emblaApi])

    const scrollNext = useCallback(() => {
        if (emblaApi) emblaApi.scrollNext()
    }, [emblaApi])

    return (
        <>
            <div className="embla">
            <div className="embla__viewport mx-auto h-auto max-w-lg border" ref={emblaRef}>
            <div className="embla__container">
                {IMAGES.map(image => (
                    <div className="embla__slide">
                        <ImageSlider theImage={image} />
                        
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