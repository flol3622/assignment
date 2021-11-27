import React from 'react';
import Grid from '@mui/material/Grid';
import MyColumn from '../components/grid/MyColumn';


const Home = () => {
    return (
        <div>
            <Grid container direction='row' spacing={2} justifyContent="center" sx={{position: 'absolute', bottom:80}}>
                
                <MyColumn title='2017' filter='year'/>
                <MyColumn title='2018' filter='year'/>
                <MyColumn title='2019' filter='year'/>
                <MyColumn title='2020' filter='year'/>
                <MyColumn title='2021' filter='year'/>
                <MyColumn title='2022' filter='year'/>
            </Grid>
        </div>
        
        
    )
}

export default Home