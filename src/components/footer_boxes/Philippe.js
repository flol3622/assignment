import * as React from 'react';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';

import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

export default function Philippe(kleur) {
  return (
    <Box
        sx={{
        display: 'flex',
        flexDirection: 'column',
        m: 5
        }}>
        <h2>Philippe</h2>
        <IconButton sx={{justifyContent: 'flex-start', p:0.5}} href="https://www.instagram.com/soubrierphilippe/" color="primary" aria-label="Instagram">
            <InstagramIcon/>
        </IconButton>
        <IconButton sx={{justifyContent: 'flex-start', p:0.5}} href="https://www.facebook.com/dai.dico/" color="primary" aria-label="Instagram">
            <FacebookIcon/>
        </IconButton>
        <IconButton sx={{justifyContent: 'flex-start', p:0.5}} href="https://www.linkedin.com/in/philippe-soubrier-0338b9205/" color="primary" aria-label="Instagram">
            <LinkedInIcon/>
        </IconButton>

    </Box>
  );
}