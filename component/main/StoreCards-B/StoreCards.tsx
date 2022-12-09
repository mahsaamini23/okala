import { Grid } from "@mui/material"
import StoreCard from "./StoreCard-B/StoreCard-B"
import pic1 from '../../../assets/image/koorosh.webp'
import pic2 from '../../../assets/image/omarket.webp'
import pic3 from '../../../assets/image/obinsness.webp'
const StoreCards=()=>{
    return(
<Grid container xs={12} sx={{gap:'10px'}}>
    <StoreCard img={pic1} title={'کوروش'} rate={'4.45'} subtitle={'تحویل در 45 دقیقه'}></StoreCard>
    <StoreCard img={pic2} title={'امارکت'} rate={'3'} subtitle={'تحویل در 60 دقیقه'}></StoreCard>
    <StoreCard img={pic3} title={'ابیزینس'} rate={'4.45'} subtitle={'تحویل در 15 دقیقه'}></StoreCard>
</Grid>
    )
}
export default StoreCards