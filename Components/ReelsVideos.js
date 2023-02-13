import React from 'react'
import { RemoveScrollBar } from 'react-remove-scroll-bar';
import FavoriteIcon from '@mui/icons-material/Favorite';
import Avatar from '@mui/material/Avatar';

function ReelsVideos() {
  return (
    <div className='reels-videos-main'>

      <div className='video-container'>

        <div className='post-container'>

          <video/>

          <div className='videos-info'>
                <div className='avatar-container'>
                  <Avatar sx={{margin : '0.5rem'}} alt="Remy Sharp" 
                     src="/static/images/avatar/2.jpg" />
                  <p> Anuj Kaushik</p>
                </div>

                <div className='post-like'>
                  <FavoriteIcon/>
                  <p>10</p>
                </div>
          </div>

        </div>
        

      </div>


    </div>
  )
}

export default ReelsVideos