import React from 'react'
import { Grid } from "@mui/material";
import Image, { StaticImageData } from 'next/image'

type Props = {
    img: StaticImageData
}

const FooterCard = ({ img }: Props) => {
    return (
        <Grid item xs={3} sx={{ border: '1px solid lightgray', borderRadius: '10px', display: 'flex', justifyContent: 'center' }}>
            <Image src={img} alt={'logo'} style={{ width: '50%', height: '70px' }}></Image>
        </Grid>
    )
}

export default FooterCard