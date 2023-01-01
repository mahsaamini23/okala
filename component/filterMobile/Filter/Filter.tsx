
import MobileAllFilters from "../MobileAllFilters/MobileAllFilters";

import Dialog from "@mui/material/Dialog";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import Button from "@mui/material/Button";

import { JsxElement } from "typescript";
import { useState } from "react";

type Props={
    header:string,
    title:string,
    openFilter:boolean,
    setOpenFilter:any,
    nameBtn:string,
    children:any,
}

const Filter=({header, title,openFilter, setOpenFilter, nameBtn, children}: Props) : JSX.Element =>{
    const [open, setOpen] = useState<boolean>(false)

    const handleClose=()=>{
        setOpen(false)
    }
    return(
        <Dialog
        fullScreen
        open={openFilter}
        onClose={handleClose}
        >
            <Grid container item p={2} xs={12} position={'fixed'} top={'0px'} boxShadow={'0px 1px 10px 1px #e0e0e0'} bgcolor={'#fff'}>
                <Grid xs={6} display={'flex'} justifyContent={'flex-start'} alignItems={'center'} gap={'20px'} >
                    <Grid onClick={()=>setOpenFilter(false)}>
                        <ArrowForwardIcon/> 
                    </Grid>
                    <Grid>
                        <Typography variant='subtitle2' fontWeight={'bold'}>{header}</Typography>
                    </Grid>
                </Grid>
                <Grid xs={6} display={'flex'} justifyContent={'center'}>
                    <Typography variant='subtitle2'>{title}</Typography>
                </Grid>
            </Grid>
            <Grid mt={8}>
                {children}
            </Grid>
            <Grid container p={2} display={'flex'} justifyContent={'center'} position={'fixed'} bottom={'0px'} bgcolor={'#fff'}>
                <Button sx={{color:'#fff', backgroundColor:'#f01436',padding:'10px 90px'}}>{nameBtn}</Button>
            </Grid> 
        </Dialog>
    )
}

export default Filter;