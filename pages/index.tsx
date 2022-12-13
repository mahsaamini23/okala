import Grid from '@mui/material/Grid';

import CategorySlider from '../component/main/CategorySlide/CategorySlider';
import AdsSlider from '../component/main/AdsSlider/AdsSlider';
import Footer from '../component/main/Footer/Footer';
import SearchBar from '../component/main/SearchBar/SearchBar';
import StoreCards from '../component/main/StoreCards-B/StoreCards';
import Container from '@mui/material/Container';
import SimpleAccordion from '../component/main/describtion/des';
import ProductCard from '../component/common/ProductCard/ProductCard';
import DownloadApp from '../component/main/DownloadApp/DownloadApp';

export default function Home() {

  return (
    <Grid>
      <Container maxWidth="lg">
          <SearchBar/>  
      </Container>
        <AdsSlider/>
      <Container maxWidth="lg">
        <StoreCards/>
        <CategorySlider/>
        <SimpleAccordion />
        <DownloadApp/>
        <Footer/>
      {/* <ProductCard/> */}
      </Container>
    </Grid>
  )
}


