import Link from "next/link";
import NewsList from "../components/NewsListAdmin";

export default function WebAdmin () {
    return (
        <>
        <div className="pt-20"> 
            <div id="hello" className="text-3xl text-center pt-20 p-10 font-semibold text-white">Web Admin</div>
        </div>
        <div className="pb-50">
            <NewsList />
        </div>
        <div className="mt-2  text-center"><button className="bg-sky-950 rounded-sm font-semibold px-10 text-white text-center"><Link href="/addNews">Add News</Link></button>
            <div className="mt-2"><button className="bg-sky-950 rounded-sm font-semibold px-10 text-white"><Link href="/news">Done</Link></button></div>

        </div>
        </>
    )
}