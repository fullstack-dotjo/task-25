import { NextResponse } from "next/server";

export const posts = [
    {
        id: 1,
        title: "post 1 title",
        body: "post 1 body"
    },
    {
        id: 2,
        title: "post 2 title",
        body: "post 2 body"
    },
    {
        id: 3,
        title: "post 3 title",
        body: "post 3 body"
    },
    {
        id: 4,
        title: "post 4 title",
        body: "post 4 body"
    }
];

export const GET = async() => {
    return NextResponse.json(posts);
}