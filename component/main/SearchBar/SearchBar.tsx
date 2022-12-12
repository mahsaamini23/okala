import React from 'react';
import { Dialog, Divider, Grid, IconButton, OutlinedInput, styled } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
import CloseIcon from '@mui/icons-material/Close';
import { items } from './data/data'
import { itemType } from './data/data'
import { useState } from 'react';
function SearchBar() {

    const [showResult, setShowResult] = useState("none")
    const [search, setsearch] = useState("");
    const [DialogOpen, setDialogOpen] = useState(false)
    const MyComponent = styled(OutlinedInput)({
        marginTop: '0px',
        border: '2px solid white',
        '&.Mui-focused': {
            border: '1px solid white',
        }
    });
    const handleSearch = (e: { target: { value: React.SetStateAction<string>; }; }) => {
        setDialogOpen(true)
        setsearch(e.target.value)
    }

    return (
        <Grid container xs={4} md={8} sx={{ justifyContent: 'center',position:'relative',zIndex:'9999'}}>
            <Grid container item xs={12} bgcolor='white' height='60px' borderRadius='6px'>
                <Grid xs={1} item sx={{ display: 'flex', alignItems: 'center' }}>
                    <SearchIcon sx={{ position: 'absolute', right: '11px' }} />
                </Grid>
                <Grid item xs={10} >
                    <MyComponent placeholder='جستجو در همه  فروشگاه ها'
                        style={{ width: '100%' }}
                        value={search}
                        onChange={handleSearch}></MyComponent>
                </Grid>
                <Grid md={1} item sx={{ display: { xs: 'none', md: 'flex' }, alignItems: 'center' }}>
                    <IconButton sx={{ bgcolor: 'lightgray', borderRadius: '5px' }}>
                        <CloseIcon />
                    </IconButton>
                </Grid>
            </Grid>
                <Dialog open={DialogOpen} onClose={() => setDialogOpen(false)} sx={{position:'absolute',bottom:'530px',left:'500px'}}>
                <Grid container item sx={{width:'600px'}}>
                    <Grid bgcolor={'white'} sx={{ p: 3 }}>
                        <Grid>
                            {items.filter(A => A?.title?.toLocaleLowerCase()?.includes(search.toLocaleLowerCase())).map((A) => (
                                <Grid container key={A.id} sx={{ cursor: 'pointer' }}>
                                    <Grid item xs={6}>{A.title}</Grid>
                                </Grid>
                            ))}
                            <Divider sx={{ marginTop: '40px', marginBottom: '40px', bgcolor: 'white', width: '560px' }}></Divider>
                        </Grid>
                    </Grid>
                    </Grid>
                </Dialog>
            
        </Grid>
    )
}

export default SearchBar



