import { Box, Button, Grid, Typography } from '@mui/material'
import { Ads_NoLogin } from '../../../data/AdsSlider/AdsSlider'
import React from 'react'
import Image from 'next/image';
import Container from '@mui/material/Container';
import { IconButton } from '@mui/material';
import { styled } from '@mui/system';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';

type Props = {}
const MyComponent = styled('div')({
    alignItems: "center",
    height: "245px",
    "&::after": {
        content:"' '",
        display: 'block',
        background: `url('${Ads_NoLogin[0].image.src}')`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "0 0",
        position: "absolute",
        left:0,
        top:"auto",
        width: "441px",
        height: "245px",
    }
  });

const AdsNoLogin = (props: Props) => {
    return (
        <MyComponent sx={{display:"flex", backgroundColor: "rgba(232,245,233)",color: 'darkslategray',direction: "row"}}>
            <Container maxWidth="lg" >
                <Grid container >
                    <Grid item xs={7}>
                        <Typography variant='poster' marginY={0} lineHeight={3} fontWeight="800">
                            خرید سوپرمارکتی از فروشگاه‌های اطراف
                        </Typography>
                        <Typography variant='h1' fontWeight="600">
                            ارسال سریع و پرداخت در محل
                        </Typography>
                    </Grid>

                    <Grid item alignSelf={"end"}>
                        <IconButton sx={{
                            bgcolor: "rgba(55,143,56)",
                            ['&:hover']: {
                                backgroundColor: "rgba(55,143,56)"
                            }
                        }}>
                            <Typography color={"white"} fontWeight={600}>
                                ورود و انتخاب آدرس
                            </Typography>
                            <ArrowBackIosNewIcon sx={{ color: "white" }} />
                        </IconButton>
                    </Grid>
                </Grid>
            </Container>
        </MyComponent>
    )
}

export default AdsNoLogin