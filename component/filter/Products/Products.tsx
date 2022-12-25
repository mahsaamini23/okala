import { useState } from "react"; 

import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import SwapVertIcon from '@mui/icons-material/SwapVert';
import Button from "@mui/material/Button";
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

const Products=()=>{
    const [filterBtn, setFilterBtn] = useState([{title:'پرفروشترین'}, {title:'بیشترین تخفیف'},{title:'جدیدترین'},{title:'ارزانترین'},{title:'گرانترین'}]);

    return(
        <Grid pb={'16px'}>
            <Grid container display={'flex'} flexDirection={'row'} justifyContent={'flex-start'}>
                <Grid display={'flex'} justifyContent={'flex-start'} alignItems={'center'}>
                    <Grid>
                        <SwapVertIcon sx={{fontSize:25}}/>
                    </Grid>
                    <Grid>
                        <Typography p={'9px'} sx={{fontSize:'12px', color:'rgba(0, 0, 0, 0.87)',}}>نمایش بر اساس :</Typography>
                    </Grid>
                </Grid>
                <Grid>
                    <Grid>
                        {filterBtn.map((Btn, index) => (
                            <Button  key={index} sx={{
                                fontSize:'12px',
                                '&:hover': {
                                    backgroundColor: '#e0f2f4',
                                    color: '#000',
                                },
                                '&:active': {
                                    backgroundColor:'#e0f2f1',
                                    color:'#02a0a4'
                                }
                                }} 
                            >
                                {Btn.title}
                            </Button>
                        ))}
                    </Grid>
                </Grid>
            </Grid> 
            <Grid height={'500px'}></Grid>
            <Grid>
                <Stack spacing={2} display={'flex'} justifyContent={'center'}>
                    <Pagination count={5} variant="outlined" shape="rounded" sx={{alignSelf:'center'}} />
                </Stack>
            </Grid>
        </Grid>
    )
}

export default Products;