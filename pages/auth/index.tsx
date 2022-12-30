import { Grid } from '@mui/material'
import Image from 'next/image'
import React from 'react'

//Icons and logo and background
import bgMain from '../../assets/image/auth/backgroundMain.bg.svg'
import bgHover from '../../assets/image/auth/backgroundHover.bg.svg'
import bgHover1 from '../../assets/image/auth/backgroundHover1.bg.svg'
import { Box } from '@mui/system'


type Props = {}

function auth({ }: Props) {
  return (
    <Grid container display={"flex"}>
      {/* Background */}
      <Grid item xs={2} width={10} >
        <Box top={0} zIndex={2} position={"fixed"}>
          <Image src={bgMain} alt="background login" />
        </Box>
        <Box top={0} position={"absolute"}>
          <Image src={bgHover} alt="background login" />
        </Box>
        <Box top={0} position={"absolute"}>
          <Image src={bgHover1} alt="background login" />
        </Box>
      </Grid>


    </Grid>
  )
}

export default auth