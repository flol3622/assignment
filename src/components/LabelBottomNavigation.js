import * as React from 'react';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import RestoreIcon from '@mui/icons-material/Restore';
import FavoriteIcon from '@mui/icons-material/Favorite';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import HomeIcon from '@mui/icons-material/Home';
import {
  Link as RouterLink
} from 'react-router-dom';

export default function LabelBottomNavigation() {
  const [value, setValue] = React.useState('home');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <BottomNavigation sx={{ position: 'fixed', right: '25vw', left: '25vw', bottom: 0}} value={value} onChange={handleChange}>
      <BottomNavigationAction component={RouterLink} to="/recent"
        label="Recents"
        value="recents"
        icon={<RestoreIcon />}
      />
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
      <BottomNavigationAction component={RouterLink} to="/"
        label="Home" 
        value="home" 
        icon={<HomeIcon/>} />
    </BottomNavigation>
  );
}
