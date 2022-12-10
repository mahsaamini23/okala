import { Grid, Typography } from "@mui/material"
import Image from "next/image"
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import star from '../../../../assets/image/star.png'
type props={
    img:string,
    title:string,
    rate:string,
    subtitle:string,
}
const StoreCard = ({img,title,rate,subtitle}:props) => {
    return (
        <Grid container item xs={12} md={5} sx={{ border: '1px solid #e0e0e0', borderRadius: '3px', padding: '10px','&:hover':{boxShadow:'1'}}}>
            <Grid item xs={3} sx={{ border: '1px solid #e0e0e0', borderRadius: '3px', display: 'flex', justifyContent: 'center', alignSelf: 'center', padding: '10px' }}>
                <Image src={img} alt='logo' style={{ width: '80px', height: '80px' }} />
            </Grid>
            <Grid container item xs={9} sx={{ padding: '10px', gap: '8px' }}>
                <Grid item xs={12}>
                    <Typography variant='h2' sx={{fontWeight: 'bold'}}>{title}</Typography>
                </Grid>
                <Grid container item xs={12}>
                    <Grid xs={10} container item alignItems='center'>
                        <Grid item xs={1}>
                        <Image src={star} alt='star' style={{width:'20px',height:'20px'}}></Image>
                        </Grid>
                        <Grid item xs={11} sx={{color:'secondary.main'}}>
                        <Typography variant='subtitle1'>{rate}</Typography>
                        </Grid>
                    </Grid>
                    <Grid item xs={2} sx={{ display: 'flex', justifyContent: 'flex-end',cursor:'pointer',color:'#757575' }}>
                        <ArrowBackIosIcon fontSize="small"/>
                    </Grid>
                </Grid>
                <Grid container item xs={12} alignItems='center'>
                    <Grid item xs={1}>
                    <AccessTimeIcon fontSize="small"/>
                    </Grid>
                    <Grid item xs={11} sx={{color:'secondary.main'}}>
                    <Typography variant='subtitle1'>{subtitle}</Typography>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    )
}
export default StoreCar;

