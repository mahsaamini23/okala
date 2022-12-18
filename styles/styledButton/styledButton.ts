import { styled } from '@mui/system';
import Button from '@mui/material/Button';

const StyledButton = styled(Button)(({theme})=>({
    color:'#fff',
    backgroundColor:'#f01436',
    '&:hover': {
        backgroundColor: '#e53935',
        color: '#fff',
    },
    
}))

export default StyledButton;