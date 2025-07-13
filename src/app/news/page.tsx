import NewsList from "../components/NewsList";
import Link from "next/link";

export default function News() {
    return (
        <>
        <div className="pt-20"> 
            <div id="hello" className="text-3xl text-center pt-20 p-10 font-semibold text-white">News</div>
        </div>
        <div>
            <button className="bg-blue-500 text-center"><Link href="/addNews">Add News</Link></button>
            <NewsList />
        </div>
        </>
        
    )
}