export default function Calendar(){
    return (
        <>
            <div className="pt-20 text-center">
            <div id = "hello" className="text-white pt-20 p-10 font-bold text-3xl"><h1>Holy Qurbana Calendar</h1></div>
            <div  className="flex p-15 justify-center items-center ...">
            <div className="cal"><iframe src="https://calendar.google.com/calendar/embed?height=600&wkst=1&ctz=America%2FNew_York&showPrint=0&src=Y2h1cmNoY2FsZW5kYXIyNDJAZ21haWwuY29t&color=%23039be5" width="700" height="600"></iframe> </div>
            </div>
            </div>
        </>
    )
}