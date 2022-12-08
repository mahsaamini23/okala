import {Grid} from "@mui/material";
import Image from 'next/image'

const FooterCard=({img})=>{
    return(
        <Grid item xs={3} sx={{border:'1px solid lightgray',borderRadius:'10px',display:'flex',justifyContent:'center'}}>
            <Image src={img} alt={'logo'} style={{width:'50%',height:'70px'}}></Image>
        </Grid>
    )
}
export default FooterCard