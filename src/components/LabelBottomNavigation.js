import * as React from 'react';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';

import RestoreIcon from '@mui/icons-material/Restore';
import FavoriteIcon from '@mui/icons-material/Favorite';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import CategoryOutlinedIcon from '@mui/icons-material/CategoryOutlined';

import {Link as RouterLink} from 'react-router-dom';

import FooterArrow from './FooterArrow';
import ScrollIntoView from 'react-scroll-into-view'
import { Stack, Typography } from '@mui/material';

export default function LabelBottomNavigation() {
  const [value, setValue] = React.useState('home');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Stack
      direction='row'
      justifyContent='center'
      sx={{ 
        position: 'absolute', 
        bottom: 10,
        width:'100%',
        
    }}>

      <Typography variant='caption'>Flupke projects</Typography>
      <BottomNavigation
        sx={{background: 'none'}}
        value={value}
        onChange={handleChange}
      >

        <BottomNavigationAction component={RouterLink} to="/"
          label="Categories" 
          value="home" 
          icon={<CategoryOutlinedIcon/>} 
        />
          <BottomNavigationAction component={RouterLink} to="/recent"
          label="Recents"
          value="recents"
          icon={<RestoreIcon />}
        />
        <ScrollIntoView selector="#footer"><FooterArrow/></ScrollIntoView>

        <BottomNavigationAction component={RouterLink} to="/favorite"
          label="Favorites"
          value="favorites"
          icon={<FavoriteIcon />}
        />
        <BottomNavigationAction component={RouterLink} to="/nearby"
          label="Nearby"
          value="nearby"
          icon={<LocationOnIcon />}
        />
      </BottomNavigation>

      <Typography variant='caption' width='120'>Architecture projects</Typography>
    </Stack>

  );
}
