import * as React from 'react';
import SpeedDial from '@mui/material/SpeedDial';
import SpeedDialAction from '@mui/material/SpeedDialAction';
import PrintIcon from '@mui/icons-material/Print';
import ShareIcon from '@mui/icons-material/Share';
import MenuIcon from '@mui/icons-material/Menu';
import ContactsIcon from '@mui/icons-material/Contacts';
import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate';
import {Link as RouterLink} from 'react-router-dom';
import { Box } from '@mui/system';

const actions = [
  { icon: <Box component={RouterLink} to="/add"><AddPhotoAlternateIcon sx={{mt:1}}/></Box>, name: 'Add extra post' },
  { icon: <ContactsIcon />, name: 'contact' },
  { icon: <PrintIcon />, name: 'Print' },
  { icon: <ShareIcon />, name: 'Share' },
];

export default function BasicSpeedDial() {
  return (
    <SpeedDial
      FabProps={{ size: "small", style: { backgroundColor: "white"}}}
      ariaLabel=""
      direction='down'
      sx={{ position: 'absolute', top: 16, right: 16}}
      icon={<MenuIcon sx={{color:'darkgrey'}}/>}
    >
      {actions.map((action) => (
        <SpeedDialAction
          key={action.name}
          icon={action.icon}
          tooltipTitle={action.name}
        />
      ))}
    </SpeedDial>

  );
}

