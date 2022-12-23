import { Grid } from '@mui/material'
import Image from 'next/image'
import React from 'react'

//Icons and logo and background
import bgMain from '../../assets/image/auth/backgroundMain.bg.svg'
import bgHover from '../../assets/image/auth/backgroundHover.bg.svg'
import bgHover1 from '../../assets/image/auth/backgroundHover1.bg.svg'
import { Box } from '@mui/system'


type Props = {}

function auth({}: Props) {
  return (
    <Grid container position={"relative"}>
      {/* Background */}
        
      <Grid item xs={6} position={"relative"}>
        <Box position={"absolute"} sx={{ objectFit:"cover"}}>
          <Image src={bgMain} alt="background login"/>
        </Box>
        <Box position={"absolute"}>
          <Image src={bgHover} alt="background login"/>
        </Box>
        <Box position={"absolute"}>
          <Image src={bgHover1} alt="background login"/>
        </Box>
      </Grid>
       <Grid item xs={6}>

        asdf
        </Grid>

    </Grid>
  )
}

export default auth