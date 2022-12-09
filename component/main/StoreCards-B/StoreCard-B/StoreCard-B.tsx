import { Grid, Typography } from "@mui/material"
import Image from "next/image"
import pic1 from '../../../../assets/image/koorosh.webp'
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
const StoreCard=()=>{
    return(
<Grid container item xs={12}md={4} sx={{border:'1px solid lightgray',borderRadius:'3px',padding:'10px'}}>
    <Grid item xs={3} sx={{border:'1px solid lightgray',borderRadius:'3px',display:'flex',justifyContent:'center',alignSelf:'center',padding:'10px'}}>
    <Image src={pic1} alt='logo' style={{width:'80px',height:'80px'}}/>
    </Grid>
   <Grid container item xs={9} sx={{padding:'10px',gap:'8px'}}>
    <Grid item xs={12}>
        <Typography variant='h2'>افق کوروش</Typography>
    </Grid>
    <Grid container item xs={12}>
        <Grid xs={10}>
        <Typography>4.45</Typography>
        </Grid>
    <Grid item xs={2} sx={{display:'flex',justifyContent:'flex-end'}}>
        <ArrowBackIosIcon/>
    </Grid>
    </Grid>
    <Grid item xs={12}>
    <Typography>تحویل در 45 دقیقه</Typography>
    </Grid>
   </Grid>
</Grid>
    )
}
export default StoreCard