import React from 'react'
import "./RightPlane.css"

export default function RightPlane() {
  return (
    <div className='rightPlaneBox'>
       <div className="rightPlaneContainer">
        <div className="adContainer">
          <span className="sponsored">Sponsored By</span>
          <img src="/images/4.jpg" alt="" className="adImage" />
          <span className="adText">
          Use your own staff to realise lower fees and enjoy the flexibility to choose couriers. Extend your restaurant's reach with Uber Eats 
          </span>
        </div>
        <div className="birthdayContainer">
          <img src="/images/5.jpg" alt="" className="birthdayImg" />
          <span className="birthdaytext">Arushan and 2 others having birthday today</span>
        </div>
       </div>
    </div>
  )
}
