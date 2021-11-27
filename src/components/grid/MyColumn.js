import React from 'react';
import { Grid, Typography } from '@mui/material';
import posts from './gridLayout';
import MyCard from './MyCard';

function MyColumn(props) {
    return (
        <Grid item sx={{width:'30%'}}>
            <Grid container spacing={2} alignItems='end' justifyContent="center" sx={{height: '100%'}}>
                {posts.filter(posts => posts[props.filter] === props.title).map((post) => 
                    <MyCard 
                        thumbnail= {post.thumbnail} 
                        title= {post.title}
                        link= {post.link}
                    />
                )}       
            </Grid>         
            <Typography justifyContent="center"> {props.title}</Typography>                 
        </Grid>
    );
  }
  
  export default MyColumn;