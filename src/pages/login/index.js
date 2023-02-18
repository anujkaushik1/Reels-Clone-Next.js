import React, { useContext, useEffect, useState } from 'react'
import TextField from '@mui/material/TextField';
import classes from './login.module.css';
import Image from 'next/image';
import instaImage from '../../../assets/images.png';
import Button from '@mui/material/Button';
import { CarouselProvider, Slider, Slide, Image as Img } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
import bg1 from '../../../assets/bg1.png';
import bg2 from '../../../assets/bg2.png';
import bg3 from '../../../assets/bg3.png';
import { AuthContext } from 'context/auth';
import { useRouter } from 'next/router';

function index() {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const {login, user} = useContext(AuthContext);
  const router = useRouter();


  useEffect(() => {
    
    if(user) router.push('/');
  
  
  }, [user])
  

  const loginUser = async() => {

    try {
      setLoading(true);
      await login(email,password);
      console.log('logged in');
      setLoading(false);
      
    } catch (error) {
        console.log(error.message);
        setLoading(false);
    }

  }



  return (
    <div className={classes.main}>
      <div className={classes.loginContainer}>

        <div className={classes.parentContainer}>

          <div className={classes.courBg}>

            <div className={classes.cour}>

              <CarouselProvider
                naturalSlideWidth={241}
                naturalSlideHeight={423}
                totalSlides={3}
                infinite
                isPlaying 
                interval={2000}
              >
                <Slider>
                  <Slide index={0}><Image src={bg1} /></Slide>
                  <Slide index={1}><Image src={bg2} /></Slide>
                  <Slide index={2}><Image src={bg3} /></Slide>

                </Slider>
              </CarouselProvider>

            </div>

          </div>
          <div className={classes.loginCard}>

            <Image
              style={{
                height: '30%',
                width: '70%'
              }}
              src={instaImage} />
            <TextField
              id="outlined-basic" label="Email" variant="outlined" fullWidth
              size='small' value={email} type='email' margin='dense' 
              onChange={(e) => setEmail(e.target.value)}/>

            <TextField
              id="outlined-basic" label="Password" variant="outlined" fullWidth
              size='small' value={password} type='password' margin='dense'
              onChange={(e) => setPassword(e.target.value)} />


            <Button fullWidth sx={{ marginTop: '5%' }} 
              onClick = {loginUser} variant="contained" disabled = {loading}>
              Login
            </Button>

            <div style={{
              color: 'blue',
              marginTop: '10px'
            }}>
              Forgot Password ?
            </div>

          </div>

          <div className={classes.bottomCard}>
            Don't have an account? <span style={{
              color: 'blue'
            }}>Sign Up</span>
          </div>


        </div>

      </div>
    </div>
  )
}

export default index