import * as React from 'react';
import Box from '@mui/material/Box';

export default function Footer() {
  return (
    <Box 
        sx={{ 
        width: '100vw', 
        height: 100, 
        backgroundColor: 'red', 
        position: 'absolute',
        top: '100vh',
        mt: 0
        }}
        id="footer">

      <p>test</p>
    </Box>
  );
}
