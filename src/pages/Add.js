import { Button, FormGroup, FormHelperText, FormLabel, Input, MenuItem, Select, TextField } from '@mui/material'
import { Box } from '@mui/system'
import React, {useState} from 'react'
import SaveIcon from '@mui/icons-material/Save';
import mime from "mime-types"

export default function Add() {

    const [categorie, setCategorie] = React.useState('');
    const [foto, setFoto] = useState(null)
        
    const handleChange = (event) => {
        setCategorie(event.target.value);
    };

      // upload data to solid pod
    async function uploadData() {
        const mimetype = mime.lookup(foto.name)
        const naamFoto = foto.name
        var requestOptionsPicture = {
        method: "PUT",
        headers: { "Content-Type": mimetype },
        body: foto,
        };

        // parameters post
        // heb al:
        //  category
        //  naamFoto
        const date = document.getElementById("date").value
        const naam = document.getElementById("title").value
        const postLink = document.getElementById("postLink").value

        // add picture to solid pod
        await fetch(
        `http://localhost:5000/Flupke3622/mydata/thumbnails/${naamFoto}`,
        requestOptionsPicture
        );

        // alert
        const message =
            ",{ \n" + 
            '    "title": "'+ naam + '",\n' + 
            '    "link": "'+ postLink + 'embed",\n' + 
            '    "year": "'+ date + '",\n' + 
            '    "thumbnail": "http://localhost:5000/Flupke3622/mydata/thumbnails/'+ naamFoto + '",\n' + 
            '    "category": "'+ categorie + '",\n' +
            "}";
        
        navigator.clipboard.writeText(message);
        alert("text copied to clipboard, add it to gridLayout.JSON");
        window.location.href = 'http://localhost:3000';
    }

    
    return (
        <Box justifyContent='center' display='flex' mt='50px'>
            <FormGroup>
                <FormLabel component="legend" >New post form</FormLabel>
                                   
                <TextField id="title" label="Title of post" placeholder="Title" margin="normal"/>
                <TextField id="postLink" label="Link to post" placeholder="Link" margin="normal"/>
                <TextField id="date" label="Year" placeholder="Year" margin="normal"/>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={categorie}
                    label='Category'
                    variant="standard"
                    onChange={handleChange}
                >
                    <MenuItem value={'woodworking'}>woodworking</MenuItem>
                    <MenuItem value={'3D printing'}>3D printing</MenuItem>
                    <MenuItem value={'DIY'}>DIY</MenuItem>
                    <MenuItem value={'3D'}>3D</MenuItem>

                </Select> 
                <FormHelperText>Category</FormHelperText>    
                <Input 
                    type="file" 
                    onChange={e => setFoto(e.target.files[0])}
                    sx={{mt:2}}
                />
                <FormHelperText>Add " media/?size=t " to post url to get thumbnail</FormHelperText>
                <Button 
                    color="secondary" 
                    startIcon={<SaveIcon />}
                    onClick={uploadData}
                    sx={{mt:3}}>
                    save and copy text
                </Button>
            </FormGroup>
        </Box>
    )
}
