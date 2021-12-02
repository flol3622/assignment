import React from 'react';
import { Backdrop, Card, CardActionArea, CardMedia, Stack, Typography } from '@mui/material'

function MyCard(props) {

    const [open, setOpen] = React.useState(false);
        const handleClose = () => {
        setOpen(false);
        };
        const handleToggle = () => {
        setOpen(!open);
        };

    return (
        <Stack>
            <Card sx={{ height: 70, width: 70, transition:'all 0.2s ease-in-out', '&:hover':{}}} variant="outlined">
                <CardActionArea onClick={handleToggle}>
                    <CardMedia
                        component="img"
                        height="80"
                        image={props.thumbnail}
                        alt={props.thumbnail}
                    />
                </CardActionArea>
                <Backdrop
                    sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
                    open={open}
                    onClick={handleClose}
                >
                    <CardMedia
                        component= 'iframe'
                        src= {props.link}
                        sx={{
                            border: 'none',
                            borderRadius: '20px',
                            height: '90%',
                            maxWidth: '500px'
                    }}/>
                </Backdrop>
            </Card>
                        
            <Typography sx={{ fontSize: 8, width: '80px' ,display: 'inline-block' }} variant="caption">
                {props.title}
            </Typography>
        </Stack>
    );
  }
  
  export default MyCard;

