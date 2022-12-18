
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import SwapVertIcon from '@mui/icons-material/SwapVert';

const Products=()=>{
    return(
        <Grid pb={'16px'}>
            <Grid container item display={'flex'} justifyContent={'flex-start'} alignItems={'center'} gap={'10px'} >
                <Grid>
                    <SwapVertIcon sx={{fontSize:25}}/>
                </Grid>
                <Grid>
                    <Typography p={'9px'} sx={{fontSize:'12px', color:'rgba(0, 0, 0, 0.87)',}}>نمایش بر اساس :</Typography>
                </Grid>
            </Grid>
        </Grid>
    )
}

export default Products;