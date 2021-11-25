import React from 'react'
import { Card, CardContent, Grid, Typography } from '@mui/material'

function MyCard(props) {
    return (
        <Grid item>
            <Card sx={{ height: 100, width: 100}}>
                <CardContent>
                    <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                        {props.children}
                    </Typography>
                </CardContent>
            </Card>
        </Grid>
    );
  }
  
  export default MyCard;

