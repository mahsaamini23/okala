import React, {useState} from "react";

import StyledButton from "../../../styles/styledButton/styledButton";
import StyledSlider from "../../../styles/styledSlider/styledSlider";

import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import Stack from '@mui/material/Stack';
import Slider from '@mui/material/Slider';
import Box from '@mui/material/Box';
import Input from '@mui/material/Input';
import InputBase from '@mui/material/InputBase';
import Button from '@mui/material/Button';

// function valuetext(rating) {
//     return `${rating}°C`;
// }

interface stateInterface {
    showAllFilter: boolean,
    setShowAllFilter: (value : boolean) => void,
}

const PriceFilter =({setShowAllFilter}:any) :JSX.Element=>{
    const [showPriceFilter, setShowPriceFilter] = useState(true)
    const [rating, setRating] = useState([1, 11999200])

    const handlePriceFilter=()=>{
        setShowPriceFilter(current => !current);
    }

    const handelChangeRating=()=>{

    }

    return(
        <Grid p={2} bgcolor={'#fff'} boxShadow={'0px 2px 10px 5px #e9e9e9'} borderRadius={'4px'} borderBottom={{xs:'1px solid #e9e9e9', md:'0'}}>
            <Grid mb={'10px'} display={'flex'} justifyContent={'space-between'} alignItems={'baseline'}>
                <Grid display={'flex'} justifyContent={'flex-start'} alignItems={'center'} gap={'5px'}>
                    <Grid width='4px' height='16px' bgcolor={'#7cc8cc'} borderRadius={'5px'} sx={{display:{xs:'none', md:'block'}}}></Grid>
                    <Grid>
                        <Typography variant={'subtitle2'} fontWeight={'bold'} sx={{display:{xs:'none', md:'block'}}}>فیلتر قیمت</Typography>
                        <Typography variant={'subtitle2'} fontWeight={'bold'} sx={{display:{xs:'block', md:'none'}}}>محدوده قیمت</Typography>
                    </Grid>
                </Grid>
                <Grid>
                    <IconButton onClick={handlePriceFilter} sx={{display:{xs:'none', md:'block'}}}>
                        {showPriceFilter ? 
                        <KeyboardArrowUpIcon/> :
                        <KeyboardArrowDownIcon/>
                        }
                    </IconButton>
                    <Typography variant='caption' sx={{display:{xs:'block', md:'none'}}}>مقدار پیشفرض</Typography>
                </Grid>
            </Grid>
            <Grid display={showPriceFilter ? 'block' : 'none'} sx={{marginTop:{xs:'30px', md:'0px'}}}>
                <Grid mb={'12px'} pr={'25px'}>
                    <Stack width={'220px'}>
                        <StyledSlider
                        // slots={{ thumb: AirbnbThumbComponent }}
                        // getAriaLabel={(index) => (index === 0 ? 'Minimum price' : 'Maximum price')}
                        defaultValue={[20000, 10120000]}
                        min={20000}
                        max={10120000}
                        />
                    </Stack>
                </Grid>
                <Grid mb={'25px'} p={'8px 8px 3px 8px'} width={'260px'} display={'flex'} bgcolor={'#f8f8f8'} justifyContent={'center'} borderRadius={'8px'} gap={'8px'}>
                    <Grid display={'flex'} justifyContent={'center'} alignItems={'baseline'}>
                        <Typography variant={'caption'}>تا</Typography>
                        <InputBase value={'۱۰,۱۲۰,۰۰۰'} sx={{paddingRight:"10px", fontSize:'14px'}}/>
                        <Typography variant={'caption'}>ریال</Typography>
                    </Grid>
                    <Grid bgcolor={'#bfbfbf'} width={'2px'} height={'25px'}></Grid>
                    <Grid display={'flex'} justifyContent={'center'} alignItems={'baseline'}>
                        <Typography variant={'caption'}>از</Typography>
                        <InputBase value={'۲۰,۰۰۰'} sx={{paddingRight:"20px", fontSize:'14px'}}/>
                        <Typography variant={'caption'}>ریال</Typography>
                    </Grid>
                </Grid>
                <Grid mb={'12px'} display={'flex'} justifyContent={'center'} gap={'10px'}>
                    <Button sx={{border:'1px solid #bfbfbf', color:'#f01436', backgroundColor:'#fff', padding:'5px 15px', borderRadius:'10px'}}>مقدار پیش فرض</Button>
                    <StyledButton sx={{border:'1px solid #f01436', backgroundColor:'#f01436', color:'#fff', padding:'5px 15px', borderRadius:'10px'}}>فیلتر قیمت</StyledButton>
                </Grid>
            </Grid>
        </Grid>
    )
}

export default PriceFilter;