import { CiEdit } from "react-icons/ci";
import DeleteButton from "./DeleteButton";
import Link from "next/link";


interface NewsProp {
    _id:string,
    title:string,
    description:string,
}

async function getNews (){
  
        const res = await fetch( `https://church-website-mauve.vercel.app/api/news`)

        return res.json()
}


export default async function NewsListAdmin () {

   const {news} = await getNews()
   
   const items = news.map((n:NewsProp) => (
            <li key={n._id}>
            <div  className="p-4 border border-slate-300 my-3 mx-4 flex justify-between gap-4 items-start">
                <div>
                    <h2 className="font-bold text-xl">{n.title}</h2>
                    <div>{n.description}</div>
                </div>
            
            <div className="flex gap-2">
                <DeleteButton id={n._id} />
                <Link href={`/editNews/${n._id}`}>
                    <CiEdit size={24} />
                </Link>
            </div>
            </div>
            </li>
          ))
    return <ul>{items}</ul>
}

