import * as React from 'react';
import IconButton from '@mui/material/IconButton';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

export default function FooterArrow() {
  return (
    <div onClick={() => { window.scrollTo({top: document.documentElement.scrollHeight, behavior: 'smooth' })}}>

        <IconButton 
            aria-label="delete" 
            disabled color="primary">
          
            <KeyboardArrowDownIcon />
        </IconButton>
    </div>

  );
}
