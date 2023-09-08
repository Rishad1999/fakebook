import React from 'react'
import AddPost from '../AddPost/AddPost'
import "./PostPlane.css"
import Post from '../Post/Post'

export default function PostPlane() {
  return (
    <div className="postPlaneBox">
        <AddPost/>
        <Post/>
        <Post/>
        <Post/>
        <Post/>
        <Post/>
    </div>
  )
}
