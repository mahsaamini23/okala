import React from "react";
import {useCallback, useEffect, useRef, useState} from "react";
import categories from '../../../data/CategorySlider/CategorySlider';
import Category from "../../main/CategorySlide/Category/Category";


import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Image from 'next/image'
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import GridViewIcon from '@mui/icons-material/GridView';

import SwiperCore, { EffectCoverflow, Pagination, Autoplay, Navigation, Scrollbar} from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";
import "swiper/css";

SwiperCore.use([EffectCoverflow, Pagination ,Scrollbar]);

const CategorySlide=():JSX.Element=>{
    const [categorySlide, setCategorySlide] = useState(0)
    const [showBackButton, setShowBackButton] = useState(false);
    const swiperCategoryRef = useRef<any>(null)

    const handleNextCategory = useCallback(()=>{
        setShowBackButton(true);
        categorySlide === categories.length - 1 ? setCategorySlide(prev => 0) : setCategorySlide(prev => prev + 1)
      },[categorySlide])
    
      const handlePrevCategory = useCallback(()=>{
        categorySlide === 0 ? setCategorySlide(prev => categories.length -1) : setCategorySlide(prev => prev - 1)
      },[categorySlide])
    
      useEffect(() => {
        swiperCategoryRef.current.swiper.slideTo(categorySlide)
      }, [categorySlide])

    return(
        <Grid pt={{xs:3, md:4}} pb={{xs:4.5, md:4}} mb={{xs:3, md:4}} px={{xs:0, md:2}}>
          <Grid>
            <Grid pb={{xs:0, md:2}} width={'100%'} display={'flex'} alignItems={'center'}>
              <GridViewIcon sx={{fontSize:'20px', marginLeft:'6px'}}/>
              <Typography sx={{fontSize:'18px'}}>دسته بندی</Typography>
            </Grid>
            <Grid py={{xs:0, md:4}} sx={{position:'relative'}}>
              <Swiper style={{height:250, position:'relative', padding:'0 8px'}}  ref={swiperCategoryRef} 
                loop={false}
                grabCursor={false}
                centeredSlides={false}
                slidesPerView={7}
                scrollbar={{
                  el: '.swiper-scrollbar',
                  hide: true,
                }}
                className="mySwiper"
                spaceBetween={0}
                modules={[Autoplay, Pagination, Navigation]}
              >
                <Grid container display={'flex'} justifyContent={'space-between'}>
                  <Grid container item width={'80%'} height={'400px'} overflow={'scroll'} display={'flex'} flexDirection={'row'} justifyContent={'center'} margin={'auto'}>
                    {categories.map(item => (
                    <SwiperSlide  style={{ width:'40%',margin:'auto 40px auto -40px',display:'flex', justifyContent:'space-between', flexShrink:'100%', gap:'20px'}}>
                      <Category  id={item.id} name={item.name} background={item.background} image={item.image}/>
                    </SwiperSlide>
                    ))}      
                  </Grid>
                </Grid>
              </Swiper>
              <Grid container display={'flex'} justifyContent={'space-between'} position={'absolute'} top={'115px'}  zIndex={'100'}>
                <Grid container  item className="prev-arrow" sx={{width:'45px', height:'45px',backgroundColor:'#fff', borderRadius:'100%', cursor:'pointer'}} 
                  display={showBackButton ? 'flex' : 'none'} justifyContent={'center'} alignItems={'center'} position={'absolute'} top={'0px'} right={'0'}
                  onClick={handlePrevCategory}>
                  <ArrowForwardIosIcon sx={{fontSize:20}}/>
                </Grid> 
                <Grid container  item className="next-arrow" sx={{width:'45px', height:'45px',backgroundColor:'#fff',borderRadius:'100%', cursor:'pointer'}} 
                  display={'flex'} justifyContent={'center'} alignItems={'center'} position={'absolute'} top={'0px'} left={'0'} 
                  onClick={handleNextCategory}>
                  <ArrowBackIosIcon sx={{fontSize:25, paddingLeft:'5px'}}/>
                </Grid> 
              </Grid>
            </Grid>
          </Grid>
        </Grid>
    )
}
export default CategorySlide;