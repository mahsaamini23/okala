import Grid from '@mui/material/Grid';
import AdsSlider from '../component/main/AdsSlider/Slider';
import Footer from '../component/main/Footer/Footer'
import Category from '../component/main/CategorySlide/Category/Category';
import SearchBar from '../component/main/SearchBar/SearchBar'
import StoreCards from '../component/main/StoreCards-B/StoreCards';
import Container from '@mui/material/Container';
import Describtion from '../component/main/describtion/describtion';
import Banner from '../component/main/banner/banner';
import Banner1 from '../assets/image/green.webp'
import Banner2 from '../assets/image/orange.webp'

export default function Home() {
  return (
    
    <Grid>
      <Container maxWidth="lg">
          <SearchBar/>  
      </Container>
      <AdsSlider/>
      <Container maxWidth="lg">
      <Category/>
      <StoreCards/>
      {/* <Banner />
      <Banner /> */}
      <Banner image={Banner1} />
      <Banner image={Banner2} />
      <Describtion />
      <Footer/>
      </Container>
      


    </Grid>
  )
}


