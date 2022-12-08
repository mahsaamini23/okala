import React from 'react';
import { Grid, Typography } from "@mui/material"
import pic1 from '../../../../assets/image/3.png'
import Image from 'next/image'
const Category=():JSX.Element=>{
return(
<Grid container item xs={3} md={1}>
    <Grid container item xs={12} sx={{bgcolor:'#a5edb6',borderRadius:'50%',justifyContent:'center'}}>
        <Image src={pic1} alt={'pic'} style={{width : '100%',marginTop:'-20px'}}/>
    </Grid>
    <Grid item xs={12} sx={{display:'flex',justifyContent:'center'}}>
        <Typography>خواروبار</Typography>
    </Grid>
</Grid>
)
}
export default Category