import React, { useContext, useEffect, useState } from 'react'
import TextField from '@mui/material/TextField';
import classes from './signup.module.css';
import Image from 'next/image';
import instaImage from '../../../assets/images.png';
import Button from '@mui/material/Button';
import { useRouter } from 'next/router';
import { AuthContext } from 'context/auth';
import { getDownloadURL, ref, uploadBytesResumable } from 'firebase/storage';
import { db, storage } from '../../../firebase';
import { setDoc, doc } from 'firebase/firestore';

function index() {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [file, setFile] = useState(null);
  const [loading, setLoading] = useState(false);

  const { signup, user } = useContext(AuthContext);
  const router = useRouter();

  useEffect(() => {

    // if (user) {
    //   router.push('/');
    // }

  }, [user])


  const signupUser = async () => {

    try {
      setLoading(true);
      const user = await signup(email, password);
      console.log('Signed up');

      let d = sendDataToFirebaseStorage(user);
      console.log('mainnn', d);

      setLoading(false);

    } catch (error) {
      console.log(error.message);
      setLoading(false);
    }

  }

  function sendDataToFirebaseStorage(user) {
    

    const storageRef = ref(storage, `${user.user.uid}/Profile`);

    const uploadTask = uploadBytesResumable(storageRef, file);

    // Register three observers:
    // 1. 'state_changed' observer, called any time the state changes
    // 2. Error observer, called on failure
    // 3. Completion observer, called on successful completion

    uploadTask.on('state_changed',
      (snapshot) => {
        // Observe state change events such as progress, pause, and resume
        // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
        const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log('Upload is ' + progress + '% done');
        
      },
      (error) => {
        // Handle unsuccessful uploads
        console.log(error);
      },
      () => {
        // Handle successful uploads on complete
        // For instance, get the download URL: https://firebasestorage.googleapis.com/...
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          console.log('File available at', downloadURL);
          sendDataToFirestoreDB(downloadURL, user);
        });
      }
    );




  }


  async function sendDataToFirestoreDB(url, user){

    let dataObj = {
      name,
      email,
      uid : user.user.uid,
      photoURL : url
    }

    await setDoc(doc(db, 'users', user.user.uid), dataObj);
    console.log(dataObj);

  }


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
            size='small' value={email} onChange={(e) => setEmail(e.target.value)}
            type='email' margin='dense' />

          <TextField
            id="outlined-basic" label="Password" variant="outlined" fullWidth
            size='small' type='password' value={password}
            onChange={(e) => setPassword(e.target.value)} margin='dense' />

          <TextField
            id="outlined-basic" label="Full Name" variant="outlined" fullWidth
            size='small' value={name} onChange={(e) => setName(e.target.value)}
            type='text' margin='dense' />


          <Button fullWidth sx={{ marginTop: '5%' }} variant="outlined" component="label">
            Upload
            <input hidden accept="image/*" multiple type="file"
              onChange={(e) => setFile(e.target.files[0])} />
          </Button>

          <Button fullWidth sx={{ marginTop: '5%' }}
            onClick={signupUser} variant="contained" disabled={loading}>
            Sign up
          </Button>


        </div>

        <div className={classes.bottomCard}>
          Already have an account? <span style={{
            color: 'blue'
          }}>Login</span>
        </div>

      </div>
    </div>
  )
}

export default index