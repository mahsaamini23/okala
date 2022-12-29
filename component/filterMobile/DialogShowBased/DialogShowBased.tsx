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
import FormControl from '@mui/material/FormControl';

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
                    defaultValue="پرفروشترین"
                    name="radio-buttons-group"
                >
                    <FormControlLabel value="bestselling" control={<Radio />} label="پرفروشترین" />
                    <FormControlLabel value="biggest discount" control={<Radio />} label="بیشترین تخفیف" />
                    <FormControlLabel value="newest" control={<Radio />} label="جدیدترین" />
                    <FormControlLabel value="cheapest" control={<Radio />} label="ارزانترین" />
                    <FormControlLabel value="most expensive" control={<Radio />} label="گرانترین" />
                </RadioGroup>
            </Grid>
        </Dialog>
    )
}

export default DialogShowBased;