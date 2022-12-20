import * as React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";

import Image from "next/image";
import banner1 from "../../../assets/image/orange.webp"
import banner2 from "../../../assets/image/green.webp"
import GridView from "@mui/icons-material/GridView";


export default function Banner() {
  return (
    <Grid py={{xs:1, md:2}} px={{xs:1, md:0}} display={'flex'} justifyContent={'center'}>
      <Grid  >
        <Grid xs={12} sx={{gap:{xs:4, md:2}}}>
          <Grid sx={{ borderRadius:{xs:4, md:20}, width:{xs:'310px', md:'1120px'}, height:{xs:'88px', md:'240px'}}} my={{xs:'8px', md:'16px'}} display={'flex'} justifyContent={'center'}>
            <Image
              src={banner1}
              style={{width:'100%', height:'100%',borderRadius:'10px'}}
              alt="banner"
            />
          </Grid>
          <Grid sx={{ borderRadius:{xs:4, md:20}, width:{xs:'310px', md:'1120px'}, height:{xs:'88px', md:'240px'}}} my={{xs:'8px', md:'16px'}} display={'flex'} justifyContent={'center'}>
            <Image
              src={banner2}
              style={{width:'100%', height:'100%',borderRadius:'10px' }}
              alt="banner"
            />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}
