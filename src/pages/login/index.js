import React from 'react'
import TextField from '@mui/material/TextField';
import classes from './login.module.css';
import Image from 'next/image';
import instaImage from '../../../assets/images.png';
import Button from '@mui/material/Button';

function index() {
  return (
    <div className={classes.main}>
      <div className={classes.loginContainer}>
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


          <Button fullWidth sx={{marginTop : '5%'}} variant="contained">
            Login
          </Button>

          <div style={{
            color : 'blue',
            marginTop : '10px'
          }}>
            Forgot Password ?
          </div>

        </div>

        <div className={classes.bottomCard}>
              Don't have an account? <span style={{
                color : 'blue'
              }}>Sign Up</span>
        </div>

      </div>
    </div>
  )
}

export default index