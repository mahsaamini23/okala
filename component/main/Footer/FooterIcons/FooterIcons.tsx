import {Grid, IconButton} from "@mui/material";
import tele1 from '../../../../assets/image/tele1.png'
import tele2 from '../../../../assets/image/tele2.png'
import insta1 from '../../../../assets/image/insta1.png'
import insta2 from '../../../../assets/image/insta2.png'
import twitter1 from '../../../../assets/image/twitter1.png'
import twitter2 from '../../../../assets/image/twitter2.png'
import aparat1 from '../../../../assets/image/aparat1.png'
import aparat2 from '../../../../assets/image/aparat2.png'
import FooterIcon from "./FooterIcon/FooterIcon";

const FooterIcons=()=>{
    return(
<Grid container item xs={12}>
<FooterIcon
icon1={tele1}
icon2={tele2}
/>
<FooterIcon
icon1={insta1}
icon2={insta2}
/>
<FooterIcon
icon1={twitter1}
icon2={twitter2}
/>
<FooterIcon
icon1={aparat1}
icon2={aparat2}
/>
</Grid>
    )
}
export default FooterIcons