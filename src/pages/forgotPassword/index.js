import React, { useContext, useEffect, useState } from 'react'
import TextField from '@mui/material/TextField';
import classes from './forgot.module.css';
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

  const {forgotPass, user} = useContext(AuthContext);
  const router = useRouter();


  useEffect(() => {
    
    if(user) router.push('/');
  
  
  }, [user])
  

  const handleClick = async() => {

    try {
      setLoading(true);
      await forgotPass(email);
      console.log('Email sent');
      router.push('/login');
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
                  <Slide index={0}><Image alt='bg1' src={bg1} /></Slide>
                  <Slide index={1}><Image alt='bg2' src={bg2} /></Slide>
                  <Slide index={2}><Image alt='bg3' src={bg3} /></Slide>

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



            <Button fullWidth sx={{ marginTop: '5%' }} 
              onClick = {handleClick} variant="contained" disabled = {loading}>
              Send Email
            </Button>

            

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