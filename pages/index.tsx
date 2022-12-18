import Grid from '@mui/material/Grid';
import { styled } from '@mui/material/styles';
import CategorySlider from '../component/main/CategorySlide/CategorySlider';
import AdsSlider from '../component/main/AdsSlider/AdsSlider';
// import Footer from '../component/main/Footer/Footer';
// import SearchBar from '../component/main/SearchBar/SearchBar';
import StoreCards from '../component/main/StoreCards-B/StoreCards';
import Container from '@mui/material/Container';
import Describtion from '../component/main/describtion/describtion';
import Banner from '../component/main/banner/banner';
import Banner1 from '../assets/image/green.webp'
import Banner2 from '../assets/image/orange.webp'
// import DownloadApp from '../component/Layout/DownloadApp/DownloadApp';
import { getExample } from '../api/api';
import { useEffect } from 'react';
import Header from "../component/main/Header/header"


export default function Home() {

  useEffect(() => { getExample().then(res => console.log(res)); })

  return (
    <Grid bgcolor={'#fafafa'}>
      <Container maxWidth="lg">
        <Header />
        {/* <SearchBar /> */}
      </Container>
      <AdsSlider />
      <Container maxWidth="lg">
        <StoreCards />
        <CategorySlider />
        <Banner image={Banner1} />
        <Banner image={Banner2} />
        <Describtion />
        {/* <DownloadApp /> */}
        {/* <Footer /> */}
      </Container>
    </Grid>
  )
}


