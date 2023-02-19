import Navbar from 'Components/Navbar'
import React from 'react'

function ProfileScreen() {
  return (
    <div>

      <Navbar/>
      <div>
        <div className='profile_upper'>
            <img src='https://firebasestorage.googleapis.com/v0/b/reels-clone-nextjs-24142.appspot.com/o/yYOucxSFqCMvgAl1Ep50obFeE4p1%2FProfile?alt=media&token=c435ee59-373d-45c6-813f-7e0bce26e468'
              style={{height : '8rem', width : '8rem', borderRadius : '50%'}}/>
            
            <div>
              <h1>Name</h1>
              <h3>Posts : 10</h3>
            </div>

        </div>

        <hr/>

        <div className="profile_videos">
        <video src='https://firebasestorage.googleapis.com/v0/b/reels-clone-dae17.appspot.com/o/posts%2F6c39033b-b645-4369-9fb2-662427c44257%2Fvid3.mp4?alt=media&token=17e5e794-3a2e-4fcd-9e01-90e11a112864'/>
        <video src='https://firebasestorage.googleapis.com/v0/b/reels-clone-dae17.appspot.com/o/posts%2F6c39033b-b645-4369-9fb2-662427c44257%2Fvid3.mp4?alt=media&token=17e5e794-3a2e-4fcd-9e01-90e11a112864'/>
        <video src='https://firebasestorage.googleapis.com/v0/b/reels-clone-dae17.appspot.com/o/posts%2F6c39033b-b645-4369-9fb2-662427c44257%2Fvid3.mp4?alt=media&token=17e5e794-3a2e-4fcd-9e01-90e11a112864'/>
        </div>

      </div>
    </div>
  )
}

export default ProfileScreen