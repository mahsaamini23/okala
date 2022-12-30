import * as React from 'react';
import Dialog from "@mui/material/Dialog";
import Slide from '@mui/material/Slide';
import SwapVertIcon from '@mui/icons-material/SwapVert';
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { TransitionProps } from '@mui/material/transitions';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';

interface stateInterface {
    openShowBased: boolean,
    setOpenShowBased: (value : boolean) => void,
}

const Transition = React.forwardRef(function Transition(
    props: TransitionProps & {
      children: React.ReactElement<any, any>;
    },
    ref: React.Ref<unknown>,
  ) {
    return <Slide direction="up" ref={ref} {...props} />;
  });

const DialogShowBased =({openShowBased,setOpenShowBased}:stateInterface) : JSX.Element=>{

    const filterList = [{title:'پرفروشترین ها'},{title:'بیشترین تخفیف'},{title:'جدیدترین ها'},{title:'ارزانترین'},{title:'گرانترین ها'}];

    const handleCloseShowBased=()=>{
        setOpenShowBased(false)
    }
    return(
        <Dialog 
        open={openShowBased}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleCloseShowBased}
        fullWidth
        >
            <Grid py={2}>
                <Grid px={2} mb={2} display={'flex'} gap={'5px'}>
                    <SwapVertIcon sx={{color:'grey'}}/>
                    <Typography variant='subtitle2'>نمایش بر اساس :</Typography>
                </Grid>
                <RadioGroup
                    aria-labelledby="demo-radio-buttons-group-label"
                    defaultValue="bestselling"
                    name="radio-buttons-group"
                    sx={{marginLeft:'25px'}}
                >
                    <FormControlLabel value="bestselling" control={<Radio />} label="پرفروشترین" sx={{borderBottom:'1px solid #e9e9e9'}} />
                    <FormControlLabel value="biggest discount" control={<Radio />} label="بیشترین تخفیف" sx={{borderBottom:'1px solid #e9e9e9', marginTop:'10px'}}/>
                    <FormControlLabel value="newest" control={<Radio />} label="جدیدترین" sx={{borderBottom:'1px solid #e9e9e9', marginTop:'15px'}}/>
                    <FormControlLabel value="cheapest" control={<Radio />} label="ارزانترین" sx={{borderBottom:'1px solid #e9e9e9', marginTop:'15px'}}/>
                    <FormControlLabel value="most expensive" control={<Radio />} label="گرانترین" sx={{marginTop:'15px'}}/>
                </RadioGroup>
            </Grid>
        </Dialog>
    )
}

export default DialogShowBased;