import * as React from 'react';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import { Paper, Typography } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import SvgIcon, { SvgIconProps } from '@mui/material/SvgIcon';

function BasketIcon(props: SvgIconProps) {
    return (
        <SvgIcon {...props}>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M3 2a1 1 0 000 2h1v11a2 2 0 002 2h11.646a2 2 0 001.857-1.257l2.347-6C22.375 8.429 21.415 7 20 7H6V3a1 1 0 00-1-1H3zm17 7H6v6h11.646L20 9z"></path>
            <path d="M6.5 20.5a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0zM16 19a1.5 1.5 0 100 3 1.5 1.5 0 000-3z" ></path>
        </SvgIcon>
    );
}

function OrderIcon(props: SvgIconProps) {
    return (
        <SvgIcon {...props}>
            <path d="M9 12h6M9 15h6M5.25 3.75h13.5a.75.75 0 01.75.75v14.25A2.25 2.25 0 0117.25 21H6.75a2.25 2.25 0 01-2.25-2.25V4.5a.75.75 0 01.75-.75v0zM7.5 2.25v3M12 2.25v3M16.5 2.25v3" stroke="#363636" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
        </SvgIcon>
    );
}

function UserIcon(props: SvgIconProps) {
    return (
        <SvgIcon {...props}>
            <path d="M12 21a9 9 0 100-18 9 9 0 000 18z" stroke="#363636" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
            <path d="M12 15a3.75 3.75 0 100-7.5 3.75 3.75 0 000 7.5zM5.981 18.694a6.75 6.75 0 0112.038 0" stroke="#363636" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
        </SvgIcon>
    );
}

export default function SimpleBottomNavigation() {
    const [value, setValue] = React.useState(0);

    return (
        <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0, display:{xs:"block",md:"none"} }} elevation={3}>
            <BottomNavigation
                showLabels
                value={value}
                onChange={(event, newValue) => {
                    setValue(newValue);
                }}
            >
                <BottomNavigationAction label={<Typography sx={{ color: value === 0 ? "red" : "" ,fontSize: { xs: "0.7rem", md: "1rem", lg: "1.2rem" }}}>خانه</Typography>} icon={<HomeIcon sx={{ color: value === 0 ? "red" : "" }} />} />
                <BottomNavigationAction label={<Typography sx={{ color: value === 1 ? "red" : "" ,fontSize: { xs: "0.7rem", md: "1rem", lg: "1.2rem" }}}>سبد خرید</Typography>} icon={<BasketIcon sx={{ color: value === 1 ? "red" : "black" }} />} />
                <BottomNavigationAction label={<Typography sx={{ color: value === 2 ? "red" : "" ,fontSize: { xs: "0.7rem", md: "1rem", lg: "1.2rem" }}}>سفارش ها</Typography>} icon={<OrderIcon sx={{ color: value === 2 ? "red" : "white" }} />} />
                <BottomNavigationAction label={<Typography sx={{ color: value === 3 ? "red" : "" ,fontSize: { xs: "0.7rem", md: "1rem", lg: "1.2rem" }}}> ورود به اکالا</Typography>} icon={<UserIcon sx={{ color: value === 3 ? "red" : "white" }} />} />
            </BottomNavigation>
        </Paper>
    );
}
