import { Grid, Typography } from '@mui/material'
import Image from 'next/image'
import React from 'react'

//Icons and logo and background
import bgMain from '../../assets/image/auth/backgroundMain.bg.svg'
import bgHover from '../../assets/image/auth/backgroundHover.bg.svg'
import bgHover1 from '../../assets/image/auth/backgroundHover1.bg.svg'
import { Box,TextField } from '@mui/material';


type Props = {}

function auth({ }: Props) {
  return (
    <Grid container display={"flex"} height={"100%"} position="fixed">
      {/* Background */}
      <Grid xs={6} item width={10} position="relative" >
        <Box top={0} position="inherit">
          <Image src={bgMain} alt="background login" />
        </Box>
        <Box top={0} position={"fixed"}>
          <Image src={bgHover} alt="background login" />
        </Box>
        <Box top={0} position={"fixed"}>
          <Image src={bgHover1} alt="background login" />
        </Box>
      </Grid>
      <Grid item height={"100%"} margin="auto" xs={6} display={"flex"} flexDirection="column" position={"relative"} justifyContent="center" alignItems="center">

        <Typography>
          ورود / ثبت نام
        </Typography>
        <Typography>
          لطفا شماره موبایل خود را وارد نمایید
        </Typography>
        <TextField dir='rtl' label="Outlined" variant="outlined" sx={{border:"1px solid"}}/>

      </Grid>
    </Grid>
  )
}

export default auth