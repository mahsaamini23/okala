import {useCallback, useEffect, useRef, useState} from "react";

import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Image from 'next/image'
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import categories from '../../../data/CategorySlider/CategorySlider';

import Category from "../../main/CategorySlide/Category/Category";
import photo from "../../../assets/image/4m.png";
import SwiperCore, { EffectCoverflow, Pagination, Autoplay, Navigation, Scrollbar} from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";
import "swiper/css";

SwiperCore.use([EffectCoverflow, Pagination ,Scrollbar]);

const CategorySlide=():JSX.Element=>{
    const [categorySlide, setCategorySlide] = useState(0)
    const swiperCategoryRef = useRef<any>(null)

    const handleNextCategory = useCallback(()=>{
        categorySlide === categories.length - 1 ? setCategorySlide(prev => 0) : setCategorySlide(prev => prev + 1)
      },[categorySlide])
    
      const handlePrevCategory = useCallback(()=>{
        categorySlide === 0 ? setCategorySlide(prev => categories.length -1) : setCategorySlide(prev => prev - 1)
      },[categorySlide])
    
      useEffect(() => {
        swiperCategoryRef.current.swiper.slideTo(categorySlide)
      }, [categorySlide])

    return(
        <Grid>
          <Swiper style={{height:300, position:'relative'}}  ref={swiperCategoryRef} 
          loop={true}
          //  effect={"coverflow"}
           grabCursor={true}
           centeredSlides={true}
           slidesPerView={"auto"}
          //  coverflowEffect={{
          //    rotate: 0,
          //    stretch:0,
          //    depth: 100,
          //    modifier: 1,
          //    slideShadows: false,
          //  }}
           scrollbar={{
            el: '.swiper-scrollbar',
            hide: true,
          }}
            className="mySwiper"
          // spaceBetween={10}
          // centeredSlides={true} 
        modules={[Autoplay, Pagination, Navigation]}
        >
            <Grid container display={'flex'} justifyContent={'space-between'} position={'relative'} mt={4}>
              <Grid container item width={'80%'} height={'400px'} overflow={'scroll'} display={'flex'} flexDirection={'row'} justifyContent={'center'} margin={'auto'}>
              {categories.map(item => (
                  <SwiperSlide  style={{ width:'40%',margin:'auto',display:'flex', justifyContent:'space-between', flexShrink:'100%', gap:'20px'}}>
                    <Grid container item width={'150px'} height={'150px'}>
                      <Grid container item  bgcolor={item.background} borderRadius={'100%'}>
                        <Image src={item.image} alt={'pic'} style={{width:'100%', height:'100%'}}/>
                      </Grid>
                      <Grid container item >
                        <Typography>{item.name}</Typography>
                      </Grid>
                    </Grid>
                  </SwiperSlide>
              ))}      
              </Grid>
            </Grid>
          </Swiper>
          <Grid container px={4} display={'flex'} justifyContent={'space-between'} position={'absolute'} top={'120px'} zIndex={'100'}>
            <Grid container  item className="prev-arrow" sx={{width:'45px', height:'45px',backgroundColor:'#fff', borderRadius:'100%', cursor:'pointer'}} 
             display={'flex'} justifyContent={'center'} alignItems={'center'} onClick={handlePrevCategory}>
              <ArrowForwardIosIcon/>
            </Grid> 
            <Grid container  item className="next-arrow" sx={{width:'45px', height:'45px',backgroundColor:'#fff',borderRadius:'100%', cursor:'pointer'}} 
             display={'flex'} justifyContent={'center'} alignItems={'center'}  onClick={handleNextCategory}>
              <ArrowBackIosIcon/>
            </Grid> 
          </Grid> 
          
        </Grid>
    )
}
export default CategorySlide




          // <Grid container width={'500px'} height={'200px'} display={'inline-block'} gap={'30px'} sx={{overflowX:'scroll', overflowY:'hidden', height:'200px',whiteSpace:'nowrap'}}>
          //   {categoryData.map(item => (
          //     <Grid >
          //         <Box key={item.id} width={'160px'} height={'160px'} bgcolor={item.background} borderRadius={'100%'}>
          //           <Image src={item.image} alt="photo" style={{width:'100%', height:'100%'}}/>
          //         </Box>
          //         <Grid display={'flex'} justifyContent={'center'} py={2}>
          //           <Typography>{item.name}</Typography>
          //         </Grid>
          //     </Grid>
          //   ))}
          // </Grid>