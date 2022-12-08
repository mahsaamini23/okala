import {Grid} from "@mui/material";
import FooterCard from './FooterCard/FooterCard'
import pic1 from '../../../../assets/image/100.png'
import pic2 from '../../../../assets/image/101.png'
import pic3 from '../../../../assets/image/102.png'
const FooterCards=()=>{
    return(
        <Grid container item xs={12} sx={{gap:'20px',justifyContent:'center',marginBottom:'10px'}}>
            <FooterCard img={pic1}></FooterCard>
            <FooterCard img={pic2}></FooterCard>
            <FooterCard img={pic3}></FooterCard>
        </Grid>
    )
}
export default FooterCards