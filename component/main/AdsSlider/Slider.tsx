import Grid from '@mui/material/Grid';
import { iteratorSymbol } from 'immer/dist/internal';
import {Ads} from '../../../data/AdsSlider/AdsSlider';
import CardAdsSlider from '../AdsSlider/CardSlider/CardSlider';

interface AdsData {
    item:'object'
}

const AdsSlider=()=>{
    return(
        <Grid>
            {Ads.map(item => ( 
                <CardAdsSlider id={item.id} image={item.image} />
            ))}
        </Grid>
    )
}

export default AdsSlider;