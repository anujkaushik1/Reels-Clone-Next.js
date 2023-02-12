import Navbar from 'Components/Navbar'
import ReelsVideos from 'Components/ReelsVideos'
import Upload from 'Components/Upload'
import React from 'react'


function Feed() {
  return (
    <div className='feed-container'>
        <Navbar/>
        <Upload/>
        <ReelsVideos/>
    </div>
  )
}

export default Feed