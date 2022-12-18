import { styled } from '@mui/system';
import Slider from '@mui/material/Slider';

const StyledSlider = styled(Slider)(({theme})=>({
    color:'#f01436',
    width:'100%',
    height:6,    
    // position:'relative',
    
    '& .MuiSlider-track': {
        
    },
    '& .MuiSlider-thumb': {
        height: 20,
        width: 20,
        backgroundColor: '#fff',
        border: '7px solid currentColor',
        '&:focus, &:hover, &.Mui-active, &.Mui-focusVisible': {
            boxShadow: 'none',
        
        },
        '&:before': {
            display: 'none',
        },
    },
}))

export default StyledSlider;