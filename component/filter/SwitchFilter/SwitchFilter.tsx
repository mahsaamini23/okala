
import Grid from '@mui/material/Grid';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';
import StyledSwitch from '../../../styles/styledSwitch/styledSwitch';
import Typography from '@mui/material/Typography';

const SwitchFilter =()=>{
    return(
        <Grid sx={{padding:{xs:'0px', md:'20px'}}} bgcolor={'#fff'} boxShadow={'0px 2px rgba(22 22 22 4%) !important'} borderRadius={'4px'} >
            <Grid container display={'flex'} alignItems={'center'} gap={'5px'} sx={{borderBottom:{xs:'1px solid #e9e9e9', md:'0'}, padding:{xs:'30px 0', md:'20px 0'}}}>
                <StyledSwitch size='small'/>
                <Typography variant='subtitle2'>فقط کالاهای موجود</Typography>
            </Grid>
            <Grid width={'280px'} height={'1px'} bgcolor={'#e0e0e0'} display={{xs:"none", md:'flex'}} alignSelf={'center'}></Grid>
            <Grid container display={'flex'} alignItems={'center'} py={2} gap={'5px'} sx={{borderBottom:{xs:'1px solid #e9e9e9', md:'0'}, padding:{xs:'30px 0', md:'20px 0'}}}>
                <StyledSwitch size='small'/>
                <Typography variant='subtitle2'>فقط کالاهای پیشنهاد روز</Typography>
            </Grid>
        </Grid>
    )
}

export default SwitchFilter;