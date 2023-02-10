import React from 'react'
import TextField from '@mui/material/TextField';
import classes from './signup.module.css';
import Image from 'next/image';
import instaImage from '../../../assets/images.png';
import Button from '@mui/material/Button';

function index() {
  return (
    <div className={classes.main}>
      <div className={classes.signupContainer}>
        <div className={classes.signupCard}>

          <Image
            style={{
              height: '25%',
              width: '80%'
            }}
            src={instaImage} />
          <TextField
            id="outlined-basic" label="Email" variant="outlined" fullWidth
            size='small' type='email' margin='dense' />

          <TextField
            id="outlined-basic" label="Password" variant="outlined" fullWidth
            size='small' type='password' margin='dense' />

          <TextField
            id="outlined-basic" label="Full Name" variant="outlined" fullWidth
            size='small' type='text' margin='dense' />


          <Button fullWidth sx={{marginTop : '20px'}} variant="outlined" component="label">
            Upload
            <input hidden accept="image/*" multiple type="file" />
          </Button>

          <Button fullWidth sx={{marginTop : '20px'}} variant="contained">
            Sign up
          </Button>

        </div>

        <div className={classes.bottomCard}>
              Already have an account? <span style={{
                color : 'blue'
              }}>Login</span>
        </div>

      </div>
    </div>
  )
}

export default index