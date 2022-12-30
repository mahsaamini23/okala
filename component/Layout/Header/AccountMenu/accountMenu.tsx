import * as React from 'react';
import Box from '@mui/material/Box';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import imgBG from '../../../../assets/image/main/header/AccountMenu/accountMenu.bg.svg'
import iconLogout from '../../../../assets/image/main/header/AccountMenu/accountLogout.icon.svg'
import iconProfile from '../../../../assets/image/main/header/AccountMenu/profile.icon.svg'
import iconOrder from '../../../../assets/image/main/header/AccountMenu/order.icon.svg'


//Icons
import UserIcon from "../../../../assets/image/main/header/User.Icon.svg"
import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';
import Image from 'next/image';
import { useDispatch } from 'react-redux';
import { setLogin } from '../../../../Toolkit/slices/authSlice/auth.slice';



export default function AccountMenu() {
    // var and useState
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);

    // var Redux
    const dispatch = useDispatch();

    const handleClick = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <React.Fragment>
            <IconButton
                onClick={handleClick}
                dir="rtl"
                size="small"
                sx={{ padding: 2 }}
                aria-controls={open ? 'account-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
            >
                <Image src={UserIcon} alt="user"></Image>
                <Typography variant='button'>
                    حساب کاربری
                </Typography>
                <KeyboardArrowDownOutlinedIcon />
            </IconButton>

            <Menu
                anchorEl={anchorEl}
                id="account-menu"
                open={open}
                onClose={handleClose}
                onClick={handleClose}
                PaperProps={{
                    elevation: 0,
                    sx: {
                        overflow: 'visible',
                        filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                        '& .MuiAvatar-root': {
                            width: 32,
                            height: 32,
                            padding: 0,
                        },
                        '&:before': {
                            content: '""',
                            display: 'block',
                            position: 'absolute',
                            top: 0,
                            left: 10,
                            width: 10,
                            height: 10,
                            bgcolor: 'background.paper',
                            transform: 'translateY(-50%) rotate(45deg)',
                            zIndex: 0,
                        },
                    },
                }}
                transformOrigin={{ horizontal: 'left', vertical: 'top' }}
                anchorOrigin={{ horizontal: 'left', vertical: 'bottom' }}
            >
                <MenuItem sx={{ padding: 1 }}>
                    <Box width={"150px"} display={"flex"} position={"relative"} flexDirection="column" alignItems={"center"} >
                        <Image fill={true} src={imgBG} alt={''} />
                        <Typography zIndex={200} variant="caption" color={"white"}>
                            محمد حسین مقدم فر
                        </Typography>
                        <Typography zIndex={200} variant="button" color={"white"}>
                            ۰۹۳۸۵۷۶۷۵۷۵
                        </Typography>
                    </Box>

                </MenuItem>
                <MenuItem sx={{ padding: 1 }}>
                    <Image src={iconProfile} alt={''} />
                    <Typography variant="caption" color={"black"}>
                        حساب کاربری
                    </Typography>
                </MenuItem>
                <MenuItem sx={{ padding: 1 }}>
                    <Image src={iconOrder} alt={''} />
                    <Typography variant="caption" color={"black"}>
                        سفارش های من

                    </Typography>
                </MenuItem>
                <MenuItem sx={{ padding: 1 }} onClick={()=>dispatch(setLogin(false))}>
                    <Image src={iconLogout} alt={''} />
                    <Typography variant="caption" color={"red"}>
                        خروج
                    </Typography>
                </MenuItem>

            </Menu>
        </React.Fragment>
    );
}