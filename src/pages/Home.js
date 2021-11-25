import React from 'react'
import Grid from '@mui/material/Grid';
import MyCard from '../components/grid/MyCard';
import MyColumn from '../components/grid/MyColumn';

const Home = () => {
    return (
        <div>
            <p>I am the home page</p>
            <Grid container spacing={2} justifyContent="center" sx={{position: 'absolute', bottom:60}}>
                <MyColumn titel='eertste kolom'>
                    <MyCard></MyCard>
                    <MyCard></MyCard>
                    <MyCard></MyCard>
                    <MyCard></MyCard>
                    <MyCard></MyCard>
                </MyColumn>
                <MyColumn titel='tweede kolom'>
                    <MyCard></MyCard>
                    <MyCard></MyCard>
                </MyColumn>
                <MyColumn titel='derde kolom'>
                    <MyCard></MyCard>
                    <MyCard></MyCard>
                </MyColumn>
            </Grid>
        </div>
        
        
    )
}

export default Home