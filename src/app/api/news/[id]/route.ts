import {connect} from "@/dbConfig/dbConfig"
import News from "@/models/news"
import { NextRequest, NextResponse } from "next/server";


export async function PUT(request:NextRequest, { params}: {params: {id: string}}) {

    try{
        const { id } = params
        const { newTitle: title, newDescription:description} = await request.json()
        await connect()
        await News.findOneAndUpdate({_id: id}, {title, description})
        return NextResponse.json({ message: "News updated"}, {status: 200})
        

    }catch (error){
        console.log(error)
        return NextResponse.json({ error: "something wrong in PUT"}, {status: 500})

    }
}


export async function GET(request:NextRequest, { params}: {params: {id: string}}) {

    try {
    const { id } = params
    await connect()
    const data = await News.findOne({_id: id})
    return NextResponse.json({data}, {status:200})
    } catch (error) {
        console.log(error)
        return NextResponse.json({ error: "something wrong in GET"}, {status: 500})
    }
}