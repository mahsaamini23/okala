import * as React from 'react';
import { styled } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import ClickAwayListener from '@mui/base/ClickAwayListener';

//Logo and Icons
import logo from "../../../assets/image/main/header/okala.logo.svg"
import shopsIcon from "../../../assets/image/main/header/shops.icon.svg"
import basketIcon from '../../../assets/image/main/header/basket.icon.svg';
import locationIcon from '../../../assets/image/main/header/location/location.icon.svg'
import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';
import loginIcon from '../../../assets/image/main/header/AccountMenu/accountLogin.icon.svg'

import Image from 'next/image';
import { Container, Divider, Grid, Grow, ListItemText, Menu, MenuItem, MenuList, Paper, Popper } from '@mui/material';
import Link from 'next/link';
import Searchbar from '../../common/Searchbar/Searchbar';


export default function header() {
    const [onModalState, setModalState] = React.useState(false)
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const [scrollYState, setScrollYState] = React.useState<number>(0);

    // Function handleClick Search subComponent
    const handleClick = (event: React.MouseEvent<HTMLElement>) => {
        setModalState(true);
        setAnchorEl(event.currentTarget);
    }
    const handleClickAway = () => {
        setModalState(false);
        setAnchorEl(null);
    }
    const Modal = styled('div')(() => ({
        position: 'fixed',
        zIndex: 500,
        backgroundColor: "rgba(0,0,0,.4)",
        width: "100%",
        height: "100%",
        display: onModalState ? "block" : "none"
    }));

    // Function handle ScrollBar
    const onScroll = React.useCallback(() => {
        return setScrollYState(window.pageYOffset);
    }, []);

    React.useEffect(() => {
        window.addEventListener("scroll", onScroll, { passive: true });
        return () => {
            window.removeEventListener("scroll", onScroll);
        }
    }, []);

    return (
        <Box sx={{ flexGrow: 1, paddingY: 6 }}>
            <AppBar position="fixed" sx={{ boxShadow: 0 }}>
                <Modal />
                <Container maxWidth="lg">
                    <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
                        {/* Logo Okala*/}
                        <Box marginY={2} marginLeft={5} >
                            <Link href={'/'} >
                                <Image src={logo} width={76} alt={'Okala-logo'} />
                            </Link>
                        </Box>

                        {/* Shops Button */}
                        <IconButton
                            size="small"
                            sx={{
                                backgroundColor: "#f8f8f8"
                            }}
                        >
                            <Image src={shopsIcon} alt={'shops-Icon'} />
                            <Typography
                                variant='button'>
                                مشاهده فروشگاه ها
                            </Typography>
                        </IconButton>

                        {/* SearchBar */}
                        <ClickAwayListener onClickAway={handleClickAway}>
                            <Box sx={{ width: 400 }} display="flex" justifyContent={"center"}>

                                {scrollYState > 250 ?
                                    <Box onClick={handleClick}  zIndex={500}>
                                        <Searchbar open={!!anchorEl} />
                                        <Box>
                                            <Popper
                                                anchorEl={anchorEl}
                                                open={!!anchorEl}
                                                transition
                                                disablePortal
                                            >
                                                {!!anchorEl ? ({ TransitionProps, placement }) => (
                                                    <Grow
                                                        {...TransitionProps}
                                                        style={{
                                                            transformOrigin:
                                                                placement = 'bottom-start',
                                                        }}>
                                                        <Paper sx={{ margin: "2px" }}>
                                                            <MenuList
                                                                id="composition-menu"
                                                                aria-labelledby="composition-button"
                                                            >
                                                                <MenuItem sx={{ width: "400px" }}>h</MenuItem>
                                                                <Divider />
                                                            </MenuList>
                                                        </Paper>
                                                    </Grow>
                                                ) : null}
                                            </Popper>
                                        </Box>
                                    </Box>
                                    :
                                    <IconButton
                                        onClick={handleClick}
                                        size="small"
                                    >
                                        <Box display={"flex"} width="100%" >
                                            <Image src={locationIcon} width={18} alt={'shops-Icon'} />
                                            <Typography
                                                variant='caption'>
                                                تحویل در
                                            </Typography>

                                            <Typography
                                                variant='caption'
                                                color="black">
                                                تهران -
                                            </Typography>

                                            <Typography
                                                variant='caption'
                                                color="red"
                                                bgcolor="#ffecee"
                                                padding="2px"
                                                borderRadius="5px"
                                                fontSize="10px">
                                                آدرس پیش فرض
                                            </Typography>

                                        </Box>
                                        <KeyboardArrowDownOutlinedIcon />

                                    </IconButton>
                                }
                            </Box>
                        </ClickAwayListener>

                        <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: "10px" }}>
                            {/* <AccountMenu /> */}
                            <IconButton 
                            size="small"
                            aria-label="show 17 new notifications"
                            color="inherit"
                            >
                            <Image src={loginIcon} alt="login Icon"/>
                            <Typography variant='button'>
                                ورود به اکالا
                            </Typography>
                            </IconButton>
                            <Divider orientation="vertical" flexItem />
                            <IconButton
                                size="small"
                                aria-label="show 17 new notifications"
                                color="inherit"
                            >
                                <Grid container display="flex" justifyItems={"center"} alignItems="center">
                                    <Grid item xs={2}>
                                        <Image src={basketIcon} alt={'shops-Icon'} />
                                    </Grid>
                                    <Grid item xs={8} display="flex" flexDirection={"column"} alignItems={'flex-start'} marginRight={2}>
                                        <Typography variant={"button"} component={"p"}>
                                            سبد خرید
                                        </Typography>
                                        <Typography variant={"button"} component={"p"} fontSize="0.75rem">
                                            از چند فروشگاه
                                        </Typography>
                                    </Grid>
                                </Grid>
                            </IconButton>
                        </Box>

                    </Toolbar>
                </Container>
            </AppBar>
        </Box>
    );
}