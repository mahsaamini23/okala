import Grid from '@mui/material/Grid';
import AdsSlider from '../component/main/AdsSlider/Slider';
import Footer from '../component/main/Footer/Footer'
import Category from '../component/main/CategorySlide/Category/Category';
import SearchBar from '../component/main/SearchBar/SearchBar'
import StoreCards from '../component/main/StoreCards-B/StoreCards';
import Container from '@mui/material/Container';
import SimpleAccordion from '../component/main/describtion/des';

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
      <SimpleAccordion />
      <Footer/>
      </Container>
      


    </Grid>
  )
}


