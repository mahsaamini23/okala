import React from 'react';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import InputBase from '@mui/material/InputBase';
import SearchIcon from '../../../assets/image/main/header/search/search.icon.svg'
import Image from 'next/image';
import CloseIcon from '@mui/icons-material/Close';
import IconButton from '@mui/material/IconButton';


type props={
    w:number,
    open:boolean,
    handleClose: React.Dispatch<React.SetStateAction<HTMLElement|null>>,
    handleText: React.Dispatch<React.SetStateAction<string>>
    };

export default function Searchbar({w, open,handleClose, handleText}:props) {
    const handleChange = (e:any) =>{
        handleText(e.target.value);
    }
    return (
        <Paper
            component="form"
            sx={{ p: '2px 6px', display: 'flex', alignItems: 'center', width:w, justifyContent: "start",boxShadow:0, border:"1px solid rgb(0,0,0,0.1)" }}
        >
            <Grid container >
                <Grid item xs={12} display="flex">
                    <Box sx={{ p: '5px' }} aria-label="SearchBar">
                        <Image src={SearchIcon} alt={"Searchbar"}></Image>
                    </Box>
                    <InputBase
                        sx={{ ml: 2, flex: 1, fontSize: "12px" }}
                        placeholder="جستجو رد همه فروشگاه ها"
                        inputProps={{ 'aria-label': 'search google maps' }}
                        onChange={handleChange}
                    />
                    {open?<IconButton onClick={(e)=>{
                        e.stopPropagation();
                        handleClose(null)
                        }}>
                        <CloseIcon/>
                    </IconButton>:<></>}
                </Grid>
            </Grid>

        </Paper>
    );
}