import React from 'react';
import MyColumn from '../components/grid/MyColumn';
import { Stack } from '@mui/material';


const Home = () => {
    return (
        <div>
            <Stack direction="row" alignItems="end" justifyContent='center' spacing={1} sx={{position: 'absolute', bottom:80, left:20, right:20}}>
                <MyColumn title='2017' filter='year'/>
                <MyColumn title='2018' filter='year'/>
                <MyColumn title='2019' filter='year' breedte='2'/>
                <MyColumn title='2020' filter='year' breedte='3'/>
                <MyColumn title='2021' filter='year' breedte='2'/>
            </Stack>
        </div>
        
        
    )
}

export default Home