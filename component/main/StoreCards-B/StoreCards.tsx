import { Grid } from "@mui/material"
import StoreCard from "./StoreCard-B/StoreCard-B"

const StoreCards=()=>{
    return(
<Grid container xs={12} sx={{gap:'20px' , margin:'3em 0'}}>
    <StoreCard></StoreCard>
    <StoreCard></StoreCard>
    <StoreCard></StoreCard>
</Grid>
    )
}
export default StoreCards