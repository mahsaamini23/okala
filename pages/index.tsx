import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';

import { getExample } from '../api/api';
import { useEffect } from 'react';
import { styled } from '@mui/material/styles';

import CategorySlider from '../component/main/CategorySlide/CategorySlider';
import AdsSlider from '../component/main/AdsSlider/AdsSlider';
import StoreCards from '../component/main/StoreCards/StoreCards';
import Banner from '../component/main/banner/banner';
import Header from '../component/Layout/Header/header';


export default function Home() {

  useEffect(() => { getExample().then(res => console.log(res)); })

  return (
    <Grid bgcolor={'#fafafa'} display={'flex'} flexDirection={'column'} justifyContent={'center'}>
      <Container maxWidth="lg">
        <Header />
      </Container >
      <AdsSlider />
      <Container sx={{borderBottom:'1px solid #757575', margin:'0 0 30px 0'}} >
        <StoreCards />
        <CategorySlider />
        <Banner/>
      </Container>
    </Grid>
  )
}


