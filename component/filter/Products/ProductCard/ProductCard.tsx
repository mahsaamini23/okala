import * as React from 'react';
import Grid from '@mui/material/Grid';
import ControlPointIcon from '@mui/icons-material/ControlPoint';
import Image from 'next/image';
import photo from "../../../../assets/image/Protein/2311.png"
import Typography from "@mui/material/Typography";

const ProductCard = () : JSX.Element =>{
    return (
        <Grid width={'200px'} px={2} py={4} display={'flex'} flexDirection={'column'} gap={'10px'} border={'1px solid #e9e9e9'}> 
            <Grid mb={2} container display={'flex'} alignItems={'flex-end'} gap={'10px'}>
                <ControlPointIcon sx={{color:"#f01436", fontSize:35, fontWeight:"light"}}/>
                <Image src={photo} alt="product" style={{width:'100px', height:'100px',display:'flex', alignSelf:'center'}}/>
            </Grid>
            <Grid container display={'flex'} justifyContent={'space-between'}>
                <Grid >
                    <Typography variant='subtitle2'>۱۴۵۰۰ ریال</Typography>
                    <Typography variant='caption'> ۱۷۰۰۰</Typography>
                </Grid>
                <Grid width={'25px'} height={'20px'} bgcolor={'#f01436'} color={'#fff'}borderRadius={'5px'} display={'flex'} justifyContent={'center'} alignItems={'center'}>
                    <Typography variant='caption' color={'#fff'} >۱۲٪</Typography>
                </Grid>
            </Grid>
            <Typography variant='subtitle2'>اسپاگتی ۱.۴ رشته ای ۵۰۰ گرمی مانا</Typography>
        </Grid>
    )
}

export default ProductCard;