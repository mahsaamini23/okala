
import Grid from "@mui/material/Grid";
import SwapVertIcon from '@mui/icons-material/SwapVert';
import Typography from "@mui/material/Typography";
import FilterListIcon from '@mui/icons-material/FilterList';





const ShowBased =({setOpenShowBased, setOpenAllFilters}:any) : JSX.Element =>{

    const handleOpenDialog=()=>{
        setOpenShowBased(true)
    }
    const handleOpenDialogFilters =()=>{
        setOpenAllFilters(true)
    }

    return(
        <Grid container  p={1.5} display={'flex'} justifyContent={'space-evenly'} borderBottom={'1px solid #e9e9e9'}>
            <Grid item xs={5.5} display={'flex'} justifyContent={'center'} gap={'5px'} onClick={handleOpenDialog}>
                <SwapVertIcon/>
                <Typography variant='subtitle2'>پرفروشترین ها</Typography>
            </Grid>
            <Grid item xs={1}  display={'flex'} justifyContent={'center'}>
                <Grid width={'2px'} height={'20px'} bgcolor={'#e9e9e9'} borderRadius={'1px'}></Grid>
            </Grid>
            <Grid item xs={5.5} display={'flex'} justifyContent={'center'} gap={'5px'} onClick={handleOpenDialogFilters}>
                <FilterListIcon/>
                <Typography variant='subtitle2'>فیلترها</Typography>
            </Grid>
        </Grid>
    )
}

export default ShowBased;