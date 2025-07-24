import Image from "next/image"


type ImageSliderProps = {
    theImage: string
}

export default function ImageSlider ({theImage}: ImageSliderProps) {
    

    return (
        <div className="mx-auto ">
                
                <Image  src={theImage} width={1600} height={240} alt="hello"/>
        </div>
    )

}