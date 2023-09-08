import React from 'react'
import "./AddPost.css"
import InsertPhotoIcon from '@mui/icons-material/InsertPhoto';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import LiveTvIcon from '@mui/icons-material/LiveTv';

export default function AddPost() {
  return (
    <div className="addPost">
      <div className="addPostContainer">
        <div className="addPostTop">
            <img src='/images/1.jpeg' alt="" className='addPostPic'/>
            <input placeholder='What is on your mind..? ' type="text" className="addPostInput" />
        </div>
        <hr className='postHr'/>
        <div className="addPostBottom">
            <div className="addPostOptions">
                <div className="addPostOption">
                    <InsertPhotoIcon htmlColor='yellow' className='addPhoto'/>
                    <span className="addPostOptionText">Add Photo/Video</span>
                </div>
                <div className="addPostOption">
                    <LocationOnIcon htmlColor='red' className='addLocation'/>
                    <span className="addPostOptionText">Add the Location</span>
                </div>
                <div className="addPostOption">
                    <LocalOfferIcon htmlColor='blue' className='addTag'/>
                    <span className="addPostOptionText">Tag</span>
                </div>
                <div className="addPostOption">
                    <LiveTvIcon htmlColor='tomato' className='goLive'/>
                    <span className="addPostOptionText">Go Live</span>
                </div>
            </div>
            <button className="postButton">Post</button>
        </div>
      </div>
    </div>
  )
}
