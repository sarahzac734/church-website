import Image from "next/image"


type ImageSliderProps = {
    theImage: string
}

export default function ImageSlider ({theImage}: ImageSliderProps) {
    

    return (
        <div className="justify-center items-center ...">
                
                <Image  src={theImage} width={800} height={240} alt="hello"/>
        </div>
    )

}