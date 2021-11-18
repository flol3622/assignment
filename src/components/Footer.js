import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';

import Flupke from './footer_boxes/Flupke';
import Philippe from './footer_boxes/Philippe';
import Contact from './footer_boxes/Contact'

export default function Footer() {
  return (
    <Box 
        sx={{ 
        width: '100vw', 
        position: 'absolute',
        top: '100vh',
        background: 'linear-gradient(347deg, rgba(34,193,195,0.5) 0%, rgba(253,187,45,0.5) 100%)',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center'       
        }}
        id="footer">
      
      <Grid container spacing={0} justifyContent="center">
        <Grid item>
          <Flupke/>
        </Grid>
        <Grid item>
          <Contact/>
        </Grid>
        <Grid item>
          <Philippe/>
        </Grid>
      </Grid>
    </Box>
  );
}