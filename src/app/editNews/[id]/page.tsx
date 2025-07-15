import EditNewsForm from "../../components/EditNewsForm";

async function getNewsByID (id){
  try {
  const res = await fetch( `http://localhost:3000/api/news?id=${id}`)

  return res.json()
  } catch (error) {
    console.log(error)
  }
}


export default async function EditNews({ params }) {

  const { id } = await params
  const { news } = await getNewsByID(id)
  const { title, description } = news
  console.log("whoooo     "+ title + "    des" + description)


  return <EditNewsForm id={id} title={title} description={description}/>;
}
