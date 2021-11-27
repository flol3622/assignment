import React from 'react';
import { Backdrop, Card, CardActionArea, CardMedia, Grid, Typography } from '@mui/material'

function MyCard(props) {

    const [open, setOpen] = React.useState(false);
        const handleClose = () => {
        setOpen(false);
        };
        const handleToggle = () => {
        setOpen(!open);
        };
  

    return (
        <Grid item>
            <Card sx={{ height: 60, width: 60}} variant="outlined">
                <CardActionArea onClick={handleToggle}>
                    <CardMedia
                        component="img"
                        height="60"
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
                            border: '',
                            borderRadius: '25',
                            height: '90%',
                            width: '70%'
                    }}/>
                </Backdrop>
            </Card>
                        
            <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                {props.title}
            </Typography>
        </Grid>
    );
  }
  
  export default MyCard;

