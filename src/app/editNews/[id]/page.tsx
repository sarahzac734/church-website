import EditNewsForm from "../../components/EditNewsForm";

async function getNewsByID (id:string){
  try {
    const res = await fetch( process.env.NEXT_PUBLIC_URL + `/api/news/${id}`)
    const x = await res.json()
    return x
  } catch (error) {
    console.log(error)
  }
}


export default async function EditNews({ params}: {params: Promise<{id: string}>}) {

  const { id } = await params
  const y = await getNewsByID(id)
  const {title, description} = y.data



  return <EditNewsForm id={id} title={title} description={description}/>;
}
