import { NextResponse } from "next/server"
import { posts } from "../route";

export const GET = async (req) => {
    console.log(req)
    const {searchParams} = new URL(req.url);
    console.log(searchParams);
    const id = searchParams.get('id');
    const post = posts.find((elem)=> {
        return elem.id === +id;
    })
    if (post)
        return NextResponse.json(post)
    else
        return NextResponse.json({message:"not found"}, {status:"404"})
}