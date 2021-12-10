import React from 'react';
import { Stack, Typography } from '@mui/material';
import posts from './gridLayout.json';
import MyCard from './MyCard';
import { Box } from '@mui/system';

function MyColumn(props) {

    var myWidth = 80 * props.breedte;

    return (
        <Stack display='inline-block' width = {myWidth} sx={{padding:1}}>
            <Box flexDirection='column-reverse' display='flex' flexWrap='wrap'sx={{height:700}}>
                {posts.filter(posts => posts[props.filter] === props.title).map((post) => 
                    <MyCard 
                        thumbnail= {post.thumbnail} 
                        title= {post.title}
                        link= {post.link}
                    />
                )}       
            </Box>
            <Box>
                <Typography> {props.title}</Typography> 
            </Box>
        </Stack>
    );
  }

  export default MyColumn;