import {connect} from "@/dbConfig/dbConfig"
import News from "@/models/news"
import { NextRequest, NextResponse } from "next/server";


export async function PUT(request:NextRequest, { params }) {
    const { id } = params
    const { newTitle: title, newDescription:description} = await request.json()
    await connect()
    await News.findOneAndUpdate(id, {title, description})
    return NextResponse.json({ message: "News updated"}, {status: 200})
}