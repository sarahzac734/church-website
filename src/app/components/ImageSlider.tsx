import Image from "next/image"


type ImageSliderProps = {
    theImage: string
}

export default function ImageSlider ({theImage}: ImageSliderProps) {
    

    return (
        <div className="mx-auto ">
                
                < img className="w-1600 h-auto" src={theImage} alt="hello"/>
        </div>
    )

}