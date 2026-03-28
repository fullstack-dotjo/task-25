import { NextResponse } from "next/server";
import { posts } from "../route";

export const generateMetaadata = async (props) => {
    const {id} = await props.params;
    const post = posts.find((elem) => {
        return elem.id === +id;
    })
    return ( 
        {
            title: `${post.title}`        
        }
        
    )
}

export const GET = async(req, props) => {
    const {id} = await props.params;
    const post = posts.find((elem) => {
        return elem.id === +id;
    })
    
    if (post)
        return NextResponse.json(post);
    else
        return NextResponse.json({message: "not found"}, {status: "404"})
}