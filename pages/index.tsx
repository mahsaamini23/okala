import * as React from 'react';
import Container from '@mui/material/Container';


import CategorySlider from '../component/main/CategorySlide/CategorySlider';
import AdsSlider from '../component/main/AdsSlider/AdsSlider';
import StoreCards from '../component/main/StoreCards/StoreCards';
import Banner from '../component/main/banner/banner';
import AdsNoLogin from '../component/main/AdsNoLogin/AdsNoLogin';


import type { NextPageWithLayout } from './_app'
import type { ReactElement } from 'react'
import Layout from '../component/Layout/Layout';
import { Divider, Grow, MenuItem, MenuList, Paper, Popper, Typography } from '@mui/material';
import Searchbar from "../component/common/Searchbar/Searchbar"
import { styled } from '@mui/material/styles';
import ClickAwayListener from '@mui/base/ClickAwayListener';
import { Box } from '@mui/system';
import GridViewIcon from '@mui/icons-material/GridView';
import { useSelector } from 'react-redux';

import { ToastContainer, toast, Flip } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Home: NextPageWithLayout = () => {

  // useState Config
  const [scrollYState, setScrollYState] = React.useState<number>(0);
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const [textSearch, setTextSearch] = React.useState('')
  ////just for detect componentDidMount
  const [componentDidMount, setComponentDidMount] = React.useState(false);

  // Redux Config
  const isLogin = useSelector((state: any) => state.auth.isLogin)

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


  // Modal for gray background
  const Modal = styled('div')(() => ({
    position: 'absolute',
    top: 0,
    zIndex: 500,
    backgroundColor: "rgba(0,0,0,.4)",
    width: "100%",
    height: "100%",
    display: !!anchorEl ? "block" : "none"
  }));

  // Toasted 
  React.useEffect(() => {
    if (componentDidMount) {
      isLogin? 
      toast.success("???????? ???????? ???????? ???? ???????? ?????? ??????????"):
      toast.success("?????? ???? ?????????? ???????? ????????")
    } else (
      setComponentDidMount(true))
  }, [isLogin])

  return (
    <>
      <ToastContainer
        position="top-center"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={true}
        theme="dark"
        transition={Flip}
      />
      <Modal />
      {/* SearchBar */}
      {isLogin ?
        <ClickAwayListener onClickAway={() => setAnchorEl(null)}>
          <Box sx={{ display: { xs: "none", md: "flex" } }} justifyContent={"center"} marginY="40px">
            {scrollYState < 251 ?
              <Box onClick={(event) => setAnchorEl(event.currentTarget)} zIndex={500}>
                <Searchbar w={600} open={!!anchorEl} handleClose={setAnchorEl} handleText={setTextSearch} />
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
                            <MenuItem sx={{ width: "600px" }}>
                              {textSearch ?
                                <Box display="flex" justifyContent="center" marginY={"auto"} alignItems={"center"}>
                                  <GridViewIcon sx={{ color: "rgb(224,224,224)" }} />
                                  <Box marginRight={1}>
                                    <Typography variant='subtitle2'>
                                      {textSearch}
                                    </Typography>
                                    <Typography variant='caption'>
                                      ?????????? ?????? ?????????? ???????? {textSearch}
                                    </Typography>
                                  </Box>
                                </Box> : <></>}
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
              <></>
            }
          </Box>
        </ClickAwayListener>
        : <></>
      }

      {isLogin ? <></> : <AdsNoLogin />}
      <AdsSlider />
      <Container maxWidth="lg">
        <StoreCards withButton={true}/>
        <CategorySlider />
        <Banner />

      </Container>
    </>
  )
}

Home.getLayout = function getLayout(page: ReactElement) {
  return (
    <Layout>
      {page}
    </Layout>
  )
}

export default Home;
