import { Grid, Typography } from "@mui/material";
import Image, { StaticImageData } from "next/image";
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import star from '../../../../assets/image/star.png';


type typeItem={
    id:number,
    image:any|string,
    title:string,
    rate:string,
    subtitle:string,
}


const StoreCard = ({id,image,title,rate,subtitle}:typeItem) => {
    return (
        <Grid key={id} container item xs={12} md={5} display={'flex'} height={{xs:'100px', md:'130px'}} sx={{ border: '1px solid #e0e0e0', borderRadius:{xs:'3px', md:'8px'}, padding:'10px','&:hover':{boxShadow:'1'}}} alignItems={'center'}>
            <Grid item xs={4} md={3} width={{xs:'60px', md:'px'}} height={{xs:'80px', md:'100px'}} sx={{ border: '1px solid #e0e0e0', borderRadius: '3px', display: 'flex', justifyContent: 'center', }}>
                <Image src={image} alt='logo' style={{ width:'80px', height: '80px' }} />
            </Grid>
            <Grid container item xs={8} md={9} display={'flex'} justifyContent={'center'} sx={{ padding:{xs:'4px', md:'10px'}, gap:{xs:'2px', ms:'8px'} }}>
                <Grid item xs={12}>
                    <Typography  sx={{fontWeight: 'bold', typography:{xs:'subtitle2', md:'subtitle1'}}}>{title}</Typography>
                </Grid>
                <Grid container item xs={12} display={'flex'} gap={'5px'}>
                    <Grid xs={9} container item display={'flex'} justifyContent={'flex-start'} alignItems={'center'}>
                        <Grid item xs={1} width={{xs:'20px', md:'30px'}} height={{xs:'20px', md:'30px'}}>
                            <Image src={star} alt='star' style={{width:'100%', height:'100%'}}></Image>
                        </Grid>
                        <Grid item xs={11} sx={{color:'secondary.main'}}  paddingRight={{xs:'5px', md:''}}>
                            <Typography sx={{typography:{xs:'caption', md:'subtitle2'}}}>{rate}</Typography>
                        </Grid>
                    </Grid>
                    <Grid item xs={2} sx={{ display: 'flex', justifyContent: 'flex-end',cursor:'pointer',color:'#757575' }}>
                        <ArrowBackIosIcon fontSize="small"/>
                    </Grid>
                </Grid>
                <Grid container item xs={12} alignItems='center'>
                    <Grid item xs={1}>
                        <AccessTimeIcon fontSize="small"/>
                    </Grid>
                    <Grid item xs={11} sx={{color:'secondary.main'}}>
                        <Typography sx={{typography:{xs:'caption', md:'subtitle2'}}} paddingRight={{xs:'8px', md:''}}>{subtitle}</Typography>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    ) 
}
export default StoreCard;

