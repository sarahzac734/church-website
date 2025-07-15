import {connect} from "@/dbConfig/dbConfig"
import News from "@/models/news"
import { NextRequest, NextResponse } from "next/server";


export async function PUT(request:NextRequest, { params }) {

    try{
        const { id } = params
        const { newTitle: title, newDescription:description} = await request.json()
        await connect()
        await News.findOneAndUpdate({_id: id}, {title, description})
        return NextResponse.json({ message: "News updated"}, {status: 200})


    }catch (error:any){
        return NextResponse.json({ error: error.message}, {status: 500})

    }
}


export async function GET(request:NextRequest, { params}) {
    const { id } = params
    await connect()
    const one = await News.findOne({_id: id})
    return NextResponse.json({one}, {status:200})
}