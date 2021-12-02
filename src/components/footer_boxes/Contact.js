import * as React from 'react';
import Box from '@mui/material/Box';
import { Typography } from '@mui/material';

export default function Contact() {
  return (
    <Box
    sx={{
    display: 'flex',
    flexDirection: 'column',
    m: 5,
    }}>
      <Typography variant='h5' pb='10px'>Contact</Typography>
      <Typography variant='subtitle1'>
        Karel van Hultemstraat 11<br/>
        9000 Gent<br/>
        +32 479 26 88 94
      </Typography>
    </Box>

  );
}