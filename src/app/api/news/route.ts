import {connect} from "@/dbConfig/dbConfig"
import News from "@/models/news"
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest){

    try {
        const {title, description} = await request.json()
        await connect()
        await News.create({title, description})
        return NextResponse.json({message: "Topic Created"}, {status: 201})
    } catch (error){
        return NextResponse.json({error: "something wrong in POST"}, {status: 500})
    }
    
}

export async function GET() {
    await connect()
    const news = await News.find()
    return NextResponse.json({news}) 
}

export async function DELETE(request: NextRequest){
    const id = request.nextUrl.searchParams.get("id")
    await connect()
    await News.findByIdAndDelete(id)
    return NextResponse.json({message: "News deleted"}, {status:200})
}