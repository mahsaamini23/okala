import {Grid, IconButton, styled} from "@mui/material";
import Image from 'next/image'
import { useState } from "react";
const FooterIcon=({icon1,icon2})=>{
    const[show1,setshow1]=useState('block');
    const[show2,setshow2]=useState('none');
    const MyComponent = styled(IconButton)({

        /*'&:hover': {
            backgroundColor:'red',
             
        } */
    });
const handleMouseOver=()=>{
    setshow1('none')
    setshow2('block')
}

    return(
        <Grid container item xs={3} >
<MyComponent>
<Image src={icon1} alt={icon1} style={{width:'30px',height:'30px',display:show1}} onMouseOver={handleMouseOver}/>
<Image src={icon2} alt={icon2} style={{width:'30px',height:'30px',display:show2}} />
</MyComponent>
        </Grid>
    )
}
export default FooterIcon