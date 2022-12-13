import React from "react";
import {useCallback, useEffect, useRef, useState} from "react";
import {Ads} from '../../../data/AdsSlider/AdsSlider';
import "../../../styles/AdsSlider.module.css";

import SwiperCore, { EffectCoverflow, Pagination, Autoplay, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";
import "swiper/css";

import Grid from '@mui/material/Grid';
import Image from "next/image";
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';


SwiperCore.use([EffectCoverflow, Pagination]);

const AdsSlider=()=>{
  const [adsSlide, setAdsSlide] = useState(0);
   const swiperRef = useRef(null);

  const handleNextSlide = useCallback(()=>{
    adsSlide === Ads.length - 1 ? setAdsSlide(prev => 0) : setAdsSlide(prev => prev + 1)
  },[adsSlide])

  const handlePrevSlide = useCallback(()=>{
    adsSlide === 0 ? setAdsSlide(prev => Ads.length -1) : setAdsSlide(prev => prev - 1)
  },[adsSlide])

  useEffect(() => {
    swiperRef.current.swiper.slideTo(adsSlide)
  }, [adsSlide])


  return(
    <Grid>
      <Swiper 
        style={{
          height:350,
          position:'relative',
        }}
        ref={swiperRef} 
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
        pagination={{
          bulletActiveClass:'swiper-pagination-bullet-active'
        }}
        className="mySwiper"
        spaceBetween={30}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        modules={[Autoplay, Pagination, Navigation]}
      >
        <Grid container display={'flex'} justifyContent={'space-between'} position={'relative'} mt={4}>
          <Grid container item width={'80%'} height={'500px'} display={'flex'} flexDirection={'row'} justifyContent={'center'} margin={'auto'}>
          {Ads.map(slide => (
            <SwiperSlide key={slide.id} style={{ width:'75%',height:'300px', margin:'auto',display:'flex', justifyContent:'space-between', gap:'20px', cursor:'pointer'}}>
              <Grid>
                <Image style={{width:'100%', height:'100%', borderRadius:'10px'}} src={slide.image} alt="Ads image"/>
              </Grid>
            </SwiperSlide>
          ))}
          </Grid>
        </Grid>
      </Swiper>
      <Grid container px={4} display={'flex'} justifyContent={'space-between'} position={'absolute'} top={'120px'} zIndex={'100'}>
        <Grid container  item className="prev-arrow" 
          sx={{width:'45px', height:'45px',backgroundColor:'#fff', borderRadius:'100%', cursor:'pointer'}} 
          justifyContent={'center'} alignItems={'center'} onClick={handlePrevSlide}>
          <ArrowForwardIosIcon sx={{fontSize:20}}/>
        </Grid> 
        <Grid container  item className="next-arrow" sx={{width:'45px', height:'45px',backgroundColor:'#fff',borderRadius:'100%', cursor:'pointer'}} 
          display={'flex'} justifyContent={'center'} alignItems={'center'} onClick={handleNextSlide}>
          <ArrowBackIosIcon sx={{fontSize:25, paddingLeft:'5px'}}/>
        </Grid> 
      </Grid>
    </Grid>
  )
}

export default AdsSlider;