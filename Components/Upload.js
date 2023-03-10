import { Button, LinearProgress } from '@mui/material';
import React from 'react';
import MovieCreationIcon from '@mui/icons-material/MovieCreation';

function Upload() {
    return (
        <div className='upload-container'>
            <div className='upload-button'>

                <Button className='btn' variant="outlined" startIcon={<MovieCreationIcon />}
                    component="label" style={{
                        width: '20%',
                        height: '40px'
                    }} >
                    Upload
                    <input hidden accept="image/*" multiple type="file" />
                </Button>

            </div>

            <div className='linear-progress'>
                <LinearProgress 
                    variant="determinate" value={50} style={{
                        width: '20%'
                    }} />
            </div>

        </div>

    )
}

export default Upload