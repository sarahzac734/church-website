import { useState } from "react"
import { IoMdArrowDropleftCircle, IoIosArrowDroprightCircle } from "react-icons/io";


type ImageSliderProps = {
    imageUrls: string[]
}

export default function ImageSlider ({imageUrls}: ImageSliderProps) {
    const [imageIndex, setImageIndex] = useState(0)

    function showNextImage() {
        setImageIndex(index => {
            if (index === imageUrls.length - 1) return 0
            return index + 1
        })
    }

    function showPrevImage() {
        setImageIndex(index => {
            if (index === 0) return imageUrls.length -1
            return index - 1
        })
    }

    return <div>
        <img src={imageUrls[imageIndex]} className="img-slider-style"/>
        <button onClick={showNextImage} className="img-slider-btn" style={{left:0}}><IoMdArrowDropleftCircle />
        </button>
        <button onClick={showPrevImage} className="img-slider-btn" style={{right:0}}><IoIosArrowDroprightCircle />
        </button>
    </div>

}