import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import Image from "next/image";

import App from '../../../data/DownloadApp/DownloadAp';
import MobileImage from '../../../assets/image/mobile.png';

const DownloadApp =()=>{
    return(
        <Grid container  display={'flex'} sx={{flexDirection:{xs:'column', md:'row'}}} justifyContent={'space-between'} bgcolor={'#f8f8f8'} borderRadius={'10px'} px={5} py={3} my={4}>
            <Grid sx={{width:{xs:'100%', md:'80%'}}}>
                <Typography variant='h2' my={2}>
                    دانلود اپلیکیشن اکالا
                </Typography>
                <Grid container display={'flex'} flexDirection={'row'}>
                    <Grid>
                        <Typography variant='subtitle2'>
                            خرید آسان و راحت با تخفیف های جذاب لحظه ای, دانلود برای سیستم عامل های اندروید و آیفون (ios)
                        </Typography>
                    </Grid>
                    <Grid  container item sx={{display:{xs:'none', md:'flex'}}} justifyContent={'flex-start'} alignItems={'baseline'} gap={'3px'}>
                        <Typography variant='subtitle2' color={'#02a3b2'} >آموزش نصب</Typography>
                        <ArrowBackIosIcon sx={{color:'#02a3b2',fontSize:15}} />
                    </Grid>
                </Grid>
                <Grid container display={'flex'} sx={{gap:{xs:'0', md:'15px'}}}>
                    {App.map(item  => (
                        <Grid key={item.id} my={4}>
                            <Image src={item.image} alt="app" style={{width:'128px', height:'38px'}} />
                        </Grid>
                    ))}
                </Grid>
            </Grid>
            <Grid  sx={{display:{xs:'none', md:'block'} , width:{xs:'0', md:'20%'}}}>
                <Image src={MobileImage} alt="imageMobile" style={{width:'200px', height:'208px'}}/>
            </Grid>
        </Grid>
    )
}

export default DownloadApp;