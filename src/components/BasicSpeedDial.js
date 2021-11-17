import * as React from 'react';
import SpeedDial from '@mui/material/SpeedDial';
import SpeedDialAction from '@mui/material/SpeedDialAction';
import PrintIcon from '@mui/icons-material/Print';
import ShareIcon from '@mui/icons-material/Share';
import MenuIcon from '@mui/icons-material/Menu';
import LanguageIcon from '@mui/icons-material/Language';
import ContactsIcon from '@mui/icons-material/Contacts';

const actions = [
  { icon: <LanguageIcon />, name: 'Language' },
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

