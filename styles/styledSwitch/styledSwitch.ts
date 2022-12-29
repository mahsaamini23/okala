
import { styled, alpha } from '@mui/system';
import Switch from '@mui/material/Switch';

const StyledSwitch = styled(Switch)(({ theme }) => ({
    '& .MuiSwitch-switchBase.Mui-checked': {
      color: '#F01436',
      '&:hover': {
        backgroundColor: alpha('#F01436', theme.palette.action.hoverOpacity),
      },
    },
    '& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track': {
      backgroundColor: '#F01436',
    },
}));

export default StyledSwitch;