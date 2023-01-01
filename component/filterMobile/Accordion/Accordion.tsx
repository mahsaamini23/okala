
import  Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';

type Props={
    title:string,
    setOpenAccordion:any,
}   

const AccordionItem =({title,setOpenAccordion}:Props) :JSX.Element =>{
    return(
        <Grid container px={2} py={3} display={'flex'} justifyContent={'space-between'} borderBottom={'1px solid #e9e9e9'} onClick={()=>setOpenAccordion(true)}>
            <Typography variant='subtitle2'>{title}</Typography>
            <KeyboardArrowLeftIcon sx={{size:'35px', color:'grey'}}/>
        </Grid>
    )
}

export default AccordionItem;