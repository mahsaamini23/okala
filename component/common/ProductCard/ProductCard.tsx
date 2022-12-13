import { Grid, Typography } from '@mui/material'
import React from 'react'
import picture1 from '../../../assets/image/product1.png'
import Image from "next/image"
/*type Props = {}*/

const ProductCard = () => {
  return (
    <Grid container item xs={3} md={2} padding='10px'>
        <Grid item xs={12} sx={{display:'flex',justifyContent:'center'}}>
            <Image src={picture1} alt='product' style={{width:'158px',height:'148px'}}></Image>
        </Grid>
        <Grid container item xs={12}>
            <Grid item xs={9} md={9}>
                <Typography sx={{fontSize:{xs:'10px',md:'15px'}}}>204,000 ریال</Typography>
            </Grid>
            <Grid item xs={3} md={3}sx={{display:'flex',justifyContent:'center',bgcolor:'#f01436',borderRadius:'6px',padding:'2px',color:'white'}}>
                <Typography sx={{fontSize:{xs:'10px',md:'15px'}}}>15%</Typography>
            </Grid>
        </Grid>
        <Grid item xs={12}>
        <Typography sx={{textDecoration:'line-through',fontSize:{xs:'10px',md:'15px'}}}>240,000</Typography>
        </Grid>
        <Grid item xs={12}>
            <Typography sx={{fontSize:{xs:'10px',md:'15px'}}}>
                اسپاگتی 1.2 رشته ای 700 گرمی
            </Typography>
        </Grid>
    </Grid>
  )
}

export default ProductCard