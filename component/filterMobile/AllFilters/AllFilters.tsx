import * as React from 'react';
import PriceFilter from "../../filter/PriceFilter/PriceFilter";
import SwitchFilter from "../../filter/SwitchFilter/SwitchFilter";
import Dialog from "@mui/material/Dialog";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import Button from "@mui/material/Button";
import IconButton from '@mui/material/IconButton';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import Slide from '@mui/material/Slide';
import { TransitionProps } from '@mui/material/transitions';


const Transition = React.forwardRef(function Transition(
    props: TransitionProps & {
      children: React.ReactElement;
    },
    ref: React.Ref<unknown>,
  ) {
    return <Slide direction="up" ref={ref} {...props} />;
});

const AllFilters=({openAllFilters, setOpenAllFilters} : any) : JSX.Element =>{

    const handleCloseAllFilters =()=>{
        setOpenAllFilters(false)
    }

    return(
        <Dialog
        fullScreen
        open={openAllFilters}
        onClose={handleCloseAllFilters}
        TransitionComponent={Transition}
      >
        <Grid container item p={2} xs={12} position={'fixed'} top={'0px'} boxShadow={'0px 1px 10px 1px #e0e0e0'} bgcolor={'#fff'}>
            <Grid xs={6} display={'flex'} justifyContent={'flex-start'} alignItems={'center'} gap={'20px'} >
                <Grid onClick={handleCloseAllFilters}>
                    <ArrowForwardIcon/> 
                </Grid>
                <Grid>
                    <Typography variant='subtitle2' fontWeight={'bold'}>فیلترها</Typography>
                </Grid>
            </Grid>
            <Grid xs={6} display={'flex'} justifyContent={'center'}>
                <Typography variant='subtitle2'>حذف همه فیلترها</Typography>
            </Grid>
        </Grid>
        <Grid mt={8} mb={10} overflow={'scroll'} sx={{overflowX:'hidden'}}>
            <Grid container px={2} py={3} display={'flex'} justifyContent={'space-between'} borderBottom={'1px solid #e9e9e9'}>
                <Typography variant='subtitle2'>دسته بندی</Typography>
                <KeyboardArrowLeftIcon sx={{size:'35px', color:'grey'}}/>
            </Grid>
            <Grid container px={2} py={3} display={'flex'} justifyContent={'space-between'} borderBottom={'1px solid #e9e9e9'}>
                <Typography variant='subtitle2'>برند</Typography>
                <KeyboardArrowLeftIcon sx={{size:'35px', color:"grey"}}/>
            </Grid>
            <PriceFilter/>
            <SwitchFilter/>

        </Grid>
        <Grid container p={2} display={'flex'} justifyContent={'center'} position={'fixed'} bottom={'0px'} bgcolor={'#fff'}>
            <Button sx={{color:'#fff', backgroundColor:'#f01436',padding:'10px 90px'}}>اعمال فیلتر</Button>
        </Grid> 
      </Dialog>
    )
}

export default AllFilters;

