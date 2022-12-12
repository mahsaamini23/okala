import React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Image from 'next/image';
import Link from 'next/link';

type Props={
    id: number,
    name: string,
    background: string,
    image: any,
}

const Category=({id, name, background, image}:Props):JSX.Element=>{
    return(
        <Grid>
            <Link href='/browse/category'>
                <Grid container item key={id} display={'flex'} flexDirection={'column'} alignItems={'center'} px={2} ml={4} sx={{cursor:'pointer'}}>
                    <Grid container item width={'140px'} height={'140px'} borderRadius={'100%'} bgcolor={background}>
                        <Image src={image} alt={'pic'} style={{width:'140px', height:'140px',margin:'-16px 0' }} />
                    </Grid>
                    <Grid  sx={{display:'flex',justifyContent:'center'}}>
                        <Typography sx={{ paddingTop:'24px'}}>{name}</Typography>
                    </Grid>
                </Grid>
            </Link>
        </Grid>
    )
}

export default Category