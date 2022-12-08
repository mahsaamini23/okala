import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Image from 'next/image'


import SwiperCore, { EffectCoverflow, Pagination, Autoplay, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";
import "swiper/css";

SwiperCore.use([EffectCoverflow, Pagination]);

const CategorySlide=():JSX.Element=>{
    return(
        <Grid>
            <Swiper>
                <Grid>
                    <SwiperSlide>
                        <Grid container item xs={3} md={1}>
                            <Grid container item xs={12} sx={{bgcolor:'#a5edb6',borderRadius:'50%',justifyContent:'center'}}>
                                <Image src={".."} alt={'pic'} style={{width : '100%',marginTop:'-20px'}}/>
                            </Grid>
                            <Grid item xs={12} sx={{display:'flex',justifyContent:'center'}}>
                                <Typography>خواروبار</Typography>
                            </Grid>
                        </Grid>
                    </SwiperSlide>
                </Grid>
            </Swiper>
        </Grid>
    )
}
export default CategorySlide