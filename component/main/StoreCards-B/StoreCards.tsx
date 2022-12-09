import { Grid, Typography } from "@mui/material"
import StoreCard from "./StoreCard-B/StoreCard-B"
import pic1 from '../../../assets/image/koorosh.webp'
import pic2 from '../../../assets/image/omarket.webp'
import pic3 from '../../../assets/image/obinsness.webp'
import StoreIcon from '@mui/icons-material/Store';
const StoreCards = () => {
    return (
        <Grid container item xs={12} marginTop='30px'>
            <Grid container item xs={12}>
                <Grid item xs={0.25}>
                    <StoreIcon />
                </Grid>
                <Grid item xs={11.75}>
                    <Typography variant='h1'>فروشگاه‌های محله شما</Typography>
                    <Typography variant='subtitle1' sx={{ color: '#757575' }}>3 فروشگاه</Typography>
                </Grid>
            </Grid>
            <Grid container item xs={12} sx={{ gap: '10px', marginTop: '20px' }}>
                <StoreCard img={pic1} title={'کوروش'} rate={'4.45'} subtitle={'تحویل در 45 دقیقه'}></StoreCard>
                <StoreCard img={pic2} title={'امارکت'} rate={'3'} subtitle={'تحویل در 60 دقیقه'}></StoreCard>
                <StoreCard img={pic3} title={'ابیزینس'} rate={'4.45'} subtitle={'تحویل در 15 دقیقه'}></StoreCard>
            </Grid>
        </Grid>
    )
}
export default StoreCards