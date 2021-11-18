import * as React from 'react';
import Box from '@mui/material/Box';

export default function Contact() {
  return (
    <Box
    sx={{
    display: 'flex',
    flexDirection: 'column',
    m: 5,
    }}>
    <h2>Contact</h2>
    <p>Karel van Hultemstraat 11<br/>
        9000 Gent<br/>
        +32 479 26 88 94
    </p>
    </Box>

  );
}