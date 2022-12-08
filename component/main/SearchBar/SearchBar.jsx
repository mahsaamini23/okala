import React from 'react';
import {Divider, Grid, IconButton, OutlinedInput, styled} from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
import CloseIcon from '@mui/icons-material/Close';
import data from './data/data';
import { useState } from 'react';
function SearchBar(){

    const [showResult, setShowResult] =useState("none")
    const [search, setsearch] =useState("");
    const MyComponent = styled(OutlinedInput)({
        marginTop: '0px',
        border: '2px solid white',
        '&.Mui-focused': {
            border: '1px solid white',
        }
    });
    const handleSearch = () => {
        setShowResult('flex')
        setsearch(e.target.value)
    }
    return (
        <Grid container xs={4} md={8} sx={{justifyContent: 'center'}}>
            <Grid container item xs={12} bgcolor='white' height='60px' borderRadius='6px'>
                <Grid xs={1} item sx={{display: 'flex', alignItems: 'center'}}>
                    <SearchIcon sx={{position: 'absolute', right: '11px'}}/>
                </Grid>
                <Grid item xs={10}>
                    <MyComponent placeholder='جستجو در همه  فروشگاه ها' style={{width: '100%'}} value={search}
                                 onChange={handleSearch}></MyComponent>
                </Grid>
                <Grid md={1} item sx={{display: {xs: 'none', md: 'flex'}, alignItems: 'center'}}>
                    <IconButton sx={{bgcolor: 'lightgray', borderRadius: '5px'}}>
                        <CloseIcon/>
                    </IconButton>
                </Grid>
            </Grid>
            <Grid container item md={12} sx={{
                display: {xs: 'none', md: showResult},
                background: 'red',
                alignItems: 'center',
                borderRadius: '5px',
                marginTop: '3px'
            }}>
<Grid>
{data.filter(item => item.title.toLowerCase().includes(search.toLowerCase())).map((item)=>(
               <Grid>
                {item.title}
               </Grid>
            ))}
</Grid>
                <Divider sx={{marginTop: '40px', marginBottom: '40px', bgcolor: 'white', width: '100%'}}></Divider>
            </Grid>
        </Grid>
    )
}

export default SearchBar

