import '@/styles/globals.css'
import '../../Components/Navbar.css';
import '../../Components/Upload.css';
import '../../Components/ReelsVideos.css';
import '../../Screens/Feed.css';
import AuthWrapper from 'context/auth';


export default function App({ Component, pageProps }) {
  return (
    <AuthWrapper>
        <Component {...pageProps} />
    </AuthWrapper>
    
  )
}
