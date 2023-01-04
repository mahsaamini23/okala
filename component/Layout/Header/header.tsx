import * as React from 'react';
import { styled } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import ClickAwayListener from '@mui/base/ClickAwayListener';
import { useRouter } from 'next/navigation';

//Logo and Icons
import logo from "../../../assets/image/main/header/okala.logo.svg"
import shopsIcon from "../../../assets/image/main/header/shops.icon.svg"
import basketIcon from '../../../assets/image/main/header/basket.icon.svg';
import locationIcon from '../../../assets/image/main/header/location/location.icon.svg'
import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';
import loginIcon from '../../../assets/image/main/header/AccountMenu/accountLogin.icon.svg'

import Image from 'next/image';
import { Badge, Container, Divider, Grid, Grow, List, ListItemButton, ListItemText, ListSubheader, MenuItem, MenuList, Paper, Popper, SwipeableDrawer } from '@mui/material';
import Link from 'next/link';
import Searchbar from '../../common/Searchbar/Searchbar';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import Collapse from '@mui/material/Collapse';

import { getProducts } from '../../../api/api'
import GridViewIcon from '@mui/icons-material/GridView';
import { useDispatch, useSelector } from 'react-redux';
import AccountMenu from './AccountMenu/accountMenu';
import { setLogin } from '../../../Toolkit/slices/authSlice/auth.slice';

// Modal Address
import Address from "./Address/Address"


export default function header() {

    // Link tp pages
    const router = useRouter();

    // useState Config
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const [scrollYState, setScrollYState] = React.useState<number>(0);
    const [onMenu, setOnMenu] = React.useState<boolean>(false);
    const [onCollapse, setOnCollapse] = React.useState("")
    const [products, setProducts] = React.useState([])
    const [textSearch, setTextSearch] = React.useState('')
    ////open Address Modal State
    const [openAddrModal, setOpenAddrModal] = React.useState(false)

    // Redux ToolKit
    const isLogin = useSelector((state: any) => state.auth.isLogin)
    const totalPurches = useSelector((state: any) => state.cart.total)
    const dispatch = useDispatch();

    // Modal for gray background
    const Modal = styled('div')(() => ({
        position: 'fixed',
        zIndex: 500,
        backgroundColor: "rgba(0,0,0,.4)",
        width: "100%",
        height: "100%",
        display: anchorEl ? "block" : "none"
    }));

    // Get Products data
    React.useEffect(() => { getProducts().then(res => setProducts(res.data)) }, []);

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

    //

    return (
        <Box sx={{ flexGrow: 1, paddingY: { xs: 2, md: 6 } }}>
            {/* AppBar */}
            <AppBar position="fixed" sx={{ boxShadow: "5px 5px 30px rgba(229, 231, 233, 0.5)", ["& .MuiContainer-root"]: { padding: 0 } }}>
                {/* Address Modal */}
                <Address open={openAddrModal} setOpen={setOpenAddrModal}></Address>

                {/* Modal */}
                <Modal />
                {/* Container */}
                <Container sx={{ maxWidth: { md: "lg" } }}>
                    {/* main Structure */}
                    <Toolbar sx={{ justifyContent: "space-between" }}>

                        {/* Mobile State .. Hamburger menu */}
                        <IconButton sx={{ display: { xs: "block", md: "none" } }} onClick={() => setOnMenu(true)}>
                            <MenuIcon />
                        </IconButton>

                        {/* Mobile State --> Menu List */}
                        <SwipeableDrawer
                            anchor={"right"}
                            open={onMenu}
                            onClose={() => setOnMenu(false)}
                            onOpen={() => setOnMenu(true)}
                        >
                            <Box
                                sx={{ width: 250 }}
                                role="presentation"
                            >
                                <List
                                    sx={{ width: '100%', maxWidth: 360, bgColor: 'background.paper' }}
                                    component="nav"
                                    aria-labelledby="nested-list-subheader"
                                    subheader={
                                        <Box position="relative">
                                            <Box position="absolute" display="block" top={2} left={2} zIndex={500}>
                                                <IconButton onClick={() => setOnMenu(false)}>
                                                    <CloseIcon />
                                                </IconButton>
                                            </Box>
                                            <ListSubheader component="div" id="Okala" >
                                                <Box position="relative" width={40} height={40} margin="auto">
                                                    <Link href={'/'} >
                                                        <Image fill={true} src={logo} alt={'Okala-logo'} />
                                                    </Link>
                                                </Box>
                                            </ListSubheader>
                                        </Box>
                                    }
                                >
                                    <Divider sx={{ background: "rgb(250, 251, 253)" }} />
                                    {products?.map((item: any) => {
                                        return (
                                            <Box key={"menu"+item.id}>
                                                <ListItemButton onClick={() => setOnCollapse(old => old === item.name ? "" : item.name)} dir="rtl" sx={{ flex: "0 0 auto" }}>
                                                    {onCollapse === item.name ? <ExpandLess /> : <ExpandMore />}
                                                    <ListItemText primary={item.name} sx={{
                                                        flexGrow: "0",
                                                        "& span": {
                                                            fontSize: { xs: "1rem", md: "1.4rem", lg: "1.7rem" },
                                                        },
                                                    }} />
                                                </ListItemButton>

                                                <Collapse in={onCollapse === item.name} timeout="auto" unmountOnExit>
                                                    {item?.sub?.map((value: any) => {
                                                        return (
                                                            <List key={value.title+value.id} component="div" disablePadding>
                                                                <ListItemButton>
                                                                    <ListItemText
                                                                        sx={{
                                                                            flexGrow: "0",
                                                                            "& span": {
                                                                                fontSize: { xs: "0.9rem", md: "1rem", lg: "1.2rem" },
                                                                            },
                                                                            marginRight: "10px",
                                                                            marginY: 0,
                                                                            padding: 0,
                                                                            color: "rgb(119, 119, 119)",
                                                                        }}
                                                                        primary={
                                                                            <Typography
                                                                                variant='caption'
                                                                            >{value?.title}
                                                                            </Typography>
                                                                        }
                                                                    />
                                                                </ListItemButton>
                                                            </List>
                                                        )
                                                    })}

                                                    <List component="div" disablePadding>
                                                        <ListItemButton>
                                                            <ListItemText
                                                                sx={{
                                                                    flexGrow: "0",
                                                                    "& span": {
                                                                        fontSize: { xs: "0.9rem", md: "1rem", lg: "1.2rem" },
                                                                    },
                                                                    marginRight: "10px",
                                                                    marginY: 0,
                                                                    color: "rgb(119, 119, 119)",
                                                                }}
                                                                onClick={()=> {
                                                                    router.push("../browse/category");
                                                                    setOnMenu(false)
                                                                }}
                                                                primary={
                                                                    <Typography
                                                                        variant='caption'
                                                                        sx={{ textDecoration: 'underline' }}
                                                                        marginRight="20px"
                                                                    >
                                                                        مشاهده همه موارد
                                                                    </Typography>
                                                                }
                                                            />
                                                        </ListItemButton>
                                                    </List>
                                                </Collapse>
                                            </Box>
                                        )
                                    })}
                                </List>
                            </Box>
                        </SwipeableDrawer>

                        {/* Desktop State .. Logo and Button  */}
                        <Box sx={{ display: { xs: "relative", md: "flex" } }} margin="auto">
                            {/* Logo Okala*/}
                            <Box position="relative" sx={{ width: { xs: 50, md: 76 }, height: { xs: 20, md: 48 } }} marginY={2} marginLeft={5} >
                                <Link href={'/'} >
                                    <Image fill={true} src={logo} alt={'Okala-logo'} />
                                </Link>
                            </Box>

                            <Box marginY="auto">
                                {/* Shops Button */}
                                <IconButton
                                    onClick={() => { }}
                                    size="small"
                                    sx={{
                                        backgroundColor: "#f8f8f8",
                                        display: { xs: "none", md: "flex" },
                                    }}
                                >
                                    <Image src={shopsIcon} alt={'shops-Icon'} />
                                    <Link href={"/#GoToStore"}>
                                        <Typography
                                            variant='button'>
                                            مشاهده فروشگاه ها
                                        </Typography>
                                    </Link>
                                </IconButton>
                            </Box>

                        </Box>

                        {/* SearchBar */}
                        <ClickAwayListener onClickAway={() => setAnchorEl(null)}>
                            <Box sx={{ width: 400, display: { xs: "none", md: "flex" } }} justifyContent={"center"} margin="auto">
                                {isLogin && scrollYState > 251 ?
                                    <Box onClick={(event) => setAnchorEl(event.currentTarget)} zIndex={500}>
                                        <Searchbar w={400} open={!!anchorEl} handleClose={() => setAnchorEl(null)} handleText={setTextSearch} />
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
                                                                <MenuItem sx={{ width: "400px" }}>
                                                                    {textSearch ?
                                                                        <Box display="flex" justifyContent="center" marginY={"auto"} alignItems={"center"}>
                                                                            <GridViewIcon sx={{ color: "rgb(224,224,224)" }} />
                                                                            <Box marginRight={1}>
                                                                                <Typography variant='subtitle2'>
                                                                                    {textSearch}
                                                                                </Typography>
                                                                                <Typography variant='caption'>
                                                                                    نمایش همه نتایح برای {textSearch}
                                                                                </Typography>
                                                                            </Box>
                                                                        </Box> :
                                                                        <></>}
                                                                </MenuItem>
                                                                <Divider />
                                                            </MenuList>
                                                        </Paper>
                                                    </Grow>
                                                ) : null}
                                            </Popper>
                                        </Box>
                                    </Box>
                                    :
                                    // Address
                                    <IconButton
                                        onClick={(e) => { setOpenAddrModal(true) }}
                                        size="small"
                                    >
                                        <Box display={"flex"} width="100%">
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
                            {isLogin ? <AccountMenu /> :
                                <IconButton
                                    size="small"
                                    aria-label="show 17 new notifications"
                                    color="inherit"
                                    onClick={() => dispatch(setLogin(true))}
                                >
                                    <Image src={loginIcon} alt="login Icon" />
                                    <Typography variant='button'>
                                        ورود به اکالا
                                    </Typography>
                                </IconButton>
                            }
                            <Divider orientation="vertical" flexItem />
                            <IconButton
                                size="small"
                                aria-label="show 17 new notifications"
                                color="inherit"
                            >
                                <Grid container display="flex" justifyItems={"center"} alignItems="center">
                                    <Grid item xs={2}>
                                        <Badge badgeContent={totalPurches?totalPurches.toLocaleString("fa"):0} color={"error"}>
                                            <Image src={basketIcon} alt={'shops-Icon'} />
                                        </Badge>
                                    </Grid>
                                    <Grid item xs={isLogin?10:8}
                                        display="flex"
                                        flexDirection={"column"}
                                        alignItems={'flex-start'}
                                        marginRight={isLogin?0:2}
                                        onClick={() => router.push("/cart")}
                                    >
                                        <Typography variant={"button"} component={"p"} marginRight={isLogin?1:0}>
                                            سبد خرید
                                        </Typography>
                                        {isLogin ? null
                                            : <Typography variant={"button"} component={"p"} fontSize="0.75rem">
                                            از چند فروشگاه
                                        </Typography>
                                        }
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