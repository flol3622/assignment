import React from 'react'
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';


const Home = () => {
    return (
        <div>
            <p>I am the home page</p>
            <Grid container spacing={2} justifyContent="center">
                {[0, 1, 2].map((value) => (
                    <Grid key={value} item>
                    <Paper sx={{ height: 150, width: 150 }}>
                     
                    </Paper>
                    </Grid>
                ))}
            </Grid>
        </div>
        
        
    )
}

export default Home