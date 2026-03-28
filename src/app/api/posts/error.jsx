import Link from 'next/link'
import React from 'react'

const error = () => {
  return (
    <div>
        <p>error loading the page</p>
        <Link href={"http://localhost:3000/api/posts"}>return to all posts</Link>
    </div>
  )
}

export default error