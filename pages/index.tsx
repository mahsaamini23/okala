import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';

import { getExample } from '../api/api';
import { useEffect } from 'react';
import { styled } from '@mui/material/styles';

import CategorySlider from '../component/main/CategorySlide/CategorySlider';
import AdsSlider from '../component/main/AdsSlider/AdsSlider';
import StoreCards from '../component/main/StoreCards/StoreCards';
import Banner from '../component/main/banner/banner';
import Describtion from  '../component/main/describtion/describtion';
import ProductCard from '../component/common/ProductCard/ProductCard';
import con from '../component/main/container/container';
import Header from '../component/Layout/Header/header';


export default function Home() {

  useEffect(() => { getExample().then(res => console.log(res)); })


  return (
    <Grid bgcolor={'#fafafa'} display={'flex'} flexDirection={'column'} justifyContent={'center'}>
      <Container maxWidth="lg">
      <Header />
      </Container >
      <AdsSlider />
      <Container maxWidth="lg">
      <StoreCards />
      <CategorySlider />
      <Banner/>
      </Container >
      <hr/>
      <Container maxWidth="lg">
      <Describtion />

      {/* <Footer/> */}
      </Container>
    </Grid>
  )
}


