import { Button, FormControl,  FormGroup, FormHelperText, FormLabel, MenuItem, Select, TextField } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import { styled } from '@mui/material/styles';

const Input = styled('input')({
    display: 'none',
  });

export default function Add() {

    const [category, setCategory] = React.useState('');
    
    const handleChange = (event) => {
        setCategory(event.target.value);
    };
    
    
    return (
        <Box>
            <FormControl sx={{ m: 5 }} component="fieldset" variant="standard">
                <FormLabel component="legend">New post form</FormLabel>
                <FormGroup>



                    
                    <TextField id="title" label="Title of post" placeholder="Title" margin="normal"/>
                    <TextField id="postLink" label="Link to post" placeholder="Link" margin="normal"/>
                    <TextField id="year" label="Year" placeholder="Year" margin="normal"/>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={category}
                        label='Category'
                        onChange={handleChange}
                    >
                        <MenuItem value={'woodworking'}>woodworking</MenuItem>
                        <MenuItem value={'3D printing'}>3D printing</MenuItem>
                        <MenuItem value={'DIY'}>DIY</MenuItem>
                        <MenuItem value={'3D'}>3D</MenuItem>

                    </Select> 
                <FormHelperText>Catregory</FormHelperText>    
                <label htmlFor="contained-button-file" >
                    <Input accept="image/*" id="contained-button-file" multiple type="file" />
                    <Button variant="contained" component="span" sx={{mt:3}}>
                        Upload thumbnail
                    </Button>
                </label>                       
                </FormGroup>
                
            </FormControl>
        </Box>
    )
}
