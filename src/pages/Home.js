import React from 'react';
import MyColumn from '../components/grid/MyColumn';
import { Stack } from '@mui/material';


const Home = () => {
    return (
        <Stack direction="row" alignItems="end" justifyContent='center' spacing={1} sx={{position: 'absolute', bottom:70, left:20, right:20}}>
            <MyColumn filter='category' title='woodworking' breedte='4'/>
            <MyColumn filter='category' title='3D printing'breedte='2'/>
            <MyColumn filter='category' title='DIY' breedte='2'/>
            <MyColumn filter='category' title='3D'/>
        </Stack>
    )
}

export default Home