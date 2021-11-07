import * as React from 'react';
import Box from '@mui/material/Box';
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
    <Box sx={{ height: 320, transform: 'translateZ(0px)', flexGrow: 1, display: 'inline'}}>
      <SpeedDial
        FabProps={{ size: "small", style: { backgroundColor: "grey" }}}
        ariaLabel=""
        direction='down'
        color='brown'
        sx={{ position: 'absolute', top: 16, right: 16}}
        icon={<MenuIcon/>}
      >
        {actions.map((action) => (
          <SpeedDialAction
            key={action.name}
            icon={action.icon}
            tooltipTitle={action.name}
          />
        ))}
      </SpeedDial>
    </Box>
  );
}

