export default function Calendar(){
    return (
        <>
            <div className="pt-50 text-center">
            <div className="text-black font-bold text-3xl"><h1>Qurbana Calendar</h1></div>
            <div className="cal"><iframe src="https://calendar.google.com/calendar/embed?height=600&wkst=1&ctz=America%2FNew_York&showPrint=0&src=Y2h1cmNoY2FsZW5kYXIyNDJAZ21haWwuY29t&color=%23039be5" width="800" height="600"></iframe> </div>
            </div>
        </>
    )
}