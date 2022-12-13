import { Button, Grid, Typography } from "@mui/material"
import StoreCard from "./StoreCard/StoreCard"
import pic1 from '../../../assets/image/koorosh.webp'
import pic2 from '../../../assets/image/omarket.webp'
import pic3 from '../../../assets/image/obinsness.webp'
import StoreIcon from '@mui/icons-material/Store';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
const StoreCards = (): JSX.Element => {
    return (
        <Grid container item xs={12} marginTop='30px'>
            <Grid container item xs={12}>
                <Grid item xs={1} md={0.25}>
                    <StoreIcon />
                </Grid>
                <Grid item xs={11} md={11.75}>
                    <Typography variant='h1'>فروشگاه‌های محله شما</Typography>
                    <Typography variant='subtitle1' sx={{ color: 'secondary.main' }}>3 فروشگاه</Typography>
                </Grid>
            </Grid>
            <Grid container item xs={12} sx={{ gap: '10px', marginTop: '20px' }}>
                <StoreCard img={pic1} title={'کوروش'} rate={'4.45'} subtitle={'تحویل در 45 دقیقه'}></StoreCard>
                <StoreCard img={pic2} title={'امارکت'} rate={'3'} subtitle={'تحویل در 60 دقیقه'}></StoreCard>
                <StoreCard img={pic3} title={'ابیزینس'} rate={'4.45'} subtitle={'تحویل در 15 دقیقه'}></StoreCard>
            </Grid>
            <Grid item md={12} sx={{ display: { xs: 'none', md: 'flex' }, justifyContent: 'center', marginTop: '20px' }}>
                <Button sx={{ border: '1px solid #e0e0e0', borderRadius: '4px', padding: '8px 25px' }}>مشاهده همه فروشگاه ها<ArrowBackIosIcon sx={{ fontSize: "small", color: '#757575' }} /></Button>
            </Grid>
        </Grid>
    )
}
export default StoreCards