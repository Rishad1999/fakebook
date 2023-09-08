import React from 'react'
import "./Post.css"
import FavoriteIcon from '@mui/icons-material/Favorite';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import MoodIcon from '@mui/icons-material/Mood';
import SickIcon from '@mui/icons-material/Sick';
import ReplyIcon from '@mui/icons-material/Reply';

export default function Post() {
  return (
    <div className="post">
        <div className="postContainer">
            <div className="postTop">
                <img src="/images/2.jpeg" alt="" className="postImg" />
                <span className="postUserName">Rishad Mohamed</span>
                <span className="postTime">5 mins ago</span>
            </div>
            <div className="postCenter">
                <span className="postCaption">My garden..!</span>
                <img src="/images/3.jpeg" alt="" className="postedImg" />
            </div>
            <div className="postBottom">
                <div className="postBottomLeft">
                    <FavoriteIcon htmlColor='red' className='reactionIcon'/>
                    <ThumbUpIcon htmlColor='blue' className='reactionIcon'/>
                    <MoodIcon htmlColor='orange' className='reactionIcon'/>
                    <SickIcon htmlColor='light blue' className='reactionIcon'/>
                    <span className="likeCount">Batman and 225 others</span>
                </div>
                <div className="postBottomRight">
                    <span className="commentCount"> 15 Comments </span>
                    <span className="share"> Share </span>
                    <ReplyIcon className='reply'/>
                </div>
            </div>
            
        </div>
    </div>
  )
}