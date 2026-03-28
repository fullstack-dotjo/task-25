import React from 'react'
import Post from './components/Post';
import Link from 'next/link';

const page = async() => {
    const res = await fetch("http://localhost:3000/api/posts", {
        cache: "no-store"
    });
    const posts = await res.json();
    console.log(posts)
  return (
    <div>
        <h2>Posts</h2>
        {
            posts.map((elem)=> {
                return (
                    <div key={elem.id}>
                        <Post title={elem.title} body={elem.body}/>
                            <Link href={`http://localhost:3000/api/posts/${elem.id}`}>Go to post API</Link>
                    </div>

                )
            })
        }
    </div>
  )
}

export default page