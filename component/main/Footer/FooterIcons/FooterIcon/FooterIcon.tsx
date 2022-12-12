import { Grid, IconButton } from "@mui/material";
import Image from 'next/image'
import { useState } from "react";
const FooterIcon = ({ icon1, icon2 }: any) => {
    const [Oncolor, setOncolor] = useState(true);
    const handleMouseOver = () => {
        setOncolor(false)
    }
    const handleMouseout = () => {
        setOncolor(true)
    }
    return (
        <Grid container item xs={3} >
            <IconButton>
                <Image src={Oncolor ? icon1 : icon2} alt={icon1} style={{ width: '30px', height: '30px' }} onMouseOver={handleMouseOver} onMouseOut={handleMouseout} />
            </IconButton>
        </Grid>
    )
}
export default FooterIcon