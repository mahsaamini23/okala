import Grid from '@mui/material/Grid';
import AdsSlider from '../component/main/AdsSlider/Slider';
import StoreCard from '../component/main/StoreCard/StoreCard';
import DownloadApp from '../component/main/DownloadApp/DownloadApp';
export default function Home() {
  return (

    <Grid  dir="rtl" >
      <AdsSlider/>
      <StoreCard/>
      <DownloadApp/>
    </Grid>
  )
}


