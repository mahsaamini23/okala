import Grid from '@mui/material/Grid';
import IconButton from '@mui/material/IconButton';
import Image from "next/image";
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

import {Ads} from '../../../data/AdsSlider/AdsSlider';
import {useCallback, useEffect, useRef, useState} from "react";

import SwiperCore, { EffectCoverflow, Pagination, Autoplay, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";
import "swiper/css";


SwiperCore.use([EffectCoverflow, Pagination]);

 const AdsSlider=()=>{
  const [slide, setSlide] = useState(0)
  const swiperRef = useRef(null)

  const handleNextSlide = useCallback(()=>{
    slide === Ads.length - 1 ? setSlide(prev => 0) : setSlide(prev => prev + 1)
  },[slide])

  const handlePrevSlide = useCallback(()=>{
    slide === 0 ? setSlide(prev => Ads.length -1) : setSlide(prev => prev - 1)
  },[slide])

  useEffect(() => {
    swiperRef.current.swiper.slideTo(slide)
  }, [slide])


    return(
        <Grid>
          <Swiper style={{height:300, position:'relative'}}  ref={swiperRef} 
          loop={true}
           effect={"coverflow"}
           grabCursor={true}
           centeredSlides={true}
           slidesPerView={"auto"}
           coverflowEffect={{
             rotate: 0,
             stretch:0,
             depth: 100,
             modifier: 1,
             slideShadows: false,
           }}
           pagination={true}
            className="mySwiper"
          spaceBetween={30}
          // centeredSlides={true} 
            autoplay={{
            delay: 2000,
            disableOnInteraction: false,
          }}
        modules={[Autoplay, Pagination, Navigation]}
        >
                <Grid container display={'flex'} justifyContent={'space-between'} position={'relative'} mt={4}>
                  <Grid container item width={'80%'} height={'400px'} display={'flex'} flexDirection={'row'} justifyContent={'center'} margin={'auto'}>
                    {Ads.map(slide => (
                      <SwiperSlide key={slide.id} style={{ width:'75%',margin:'auto',display:'flex', justifyContent:'space-between', gap:'20px'}}>
                        <Grid>
                          <Image style={{width:'100%', height:'100%', borderRadius:'10px'}} src={slide.image} alt="Ads image"/>
                        </Grid>
                      </SwiperSlide>
                    ))}
              </Grid>
            </Grid>
          </Swiper>
          <Grid container px={4} display={'flex'} justifyContent={'space-between'} position={'absolute'} top={'120px'} zIndex={'100'}>
            <Grid container  item className="prev-arrow" sx={{width:'45px', height:'45px',backgroundColor:'#fff', borderRadius:'100%', cursor:'pointer'}} 
             display={'flex'} justifyContent={'center'} alignItems={'center'} onClick={handlePrevSlide}>
              <ArrowBackIosIcon/>
            </Grid> 
            <Grid container  item className="next-arrow" sx={{width:'45px', height:'45px',backgroundColor:'#fff',borderRadius:'100%', cursor:'pointer'}} 
             display={'flex'} justifyContent={'center'} alignItems={'center'}  onClick={handleNextSlide}>
              <ArrowForwardIosIcon/>
            </Grid> 
          </Grid>
          
        </Grid>
    )
}

export default AdsSlider;