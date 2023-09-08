import React from 'react'
import LeftPlane from '../../components/LeftPlane/LeftPlane'
import NavBar from '../../components/Navigation/NavBar'
import PostPlane from '../../components/PostPlane/PostPlane'
import RightPlane from '../../components/RightPlane/RightPlane'
import "./Home.css"

export default function Home() {
  return (
    <>
    <NavBar/>
      <div className='bottonContainer'>
          <LeftPlane/>
          <PostPlane/>
          <RightPlane/>
      </div>
    </>
  )
}
