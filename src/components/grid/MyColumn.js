import React from 'react'
import { Grid, Typography } from '@mui/material'

function MyColumn(props) {
    return (
        <Grid item sx={{width:'30%'}}>
            <Grid container spacing={2} justifyContent="center">
                {props.children}
            </Grid>         
            <Typography> {props.titel}</Typography> 
        </Grid>


    );
  }
  
  export default MyColumn;