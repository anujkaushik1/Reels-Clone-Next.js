import React from 'react'
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

function index() {
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
              size='small' type='email' margin='dense' />

            <TextField
              id="outlined-basic" label="Password" variant="outlined" fullWidth
              size='small' type='password' margin='dense' />


            <Button fullWidth sx={{ marginTop: '5%' }} variant="contained">
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