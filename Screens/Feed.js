import Navbar from 'Components/Navbar'
import ReelsVideos from 'Components/ReelsVideos'
import Upload from 'Components/Upload'
import { AuthContext } from 'context/auth'
import { useRouter } from 'next/router'
import React, { useContext, useEffect } from 'react'
import { RemoveScrollBar } from 'react-remove-scroll-bar'


function Feed() {

  const {login, user} = useContext(AuthContext);
  const router = useRouter();
  useEffect(() => {
   
    if(!user){
        router.push('/login');
    }

  }, [user]);

  return (
    <div className='feed-container'>
        <Navbar/>
        <Upload/>
        <ReelsVideos/>
    </div>
  )
}

export default Feed