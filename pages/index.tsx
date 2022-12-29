import Container from '@mui/material/Container';
import { useEffect } from 'react';

import CategorySlider from '../component/main/CategorySlide/CategorySlider';
import AdsSlider from '../component/main/AdsSlider/AdsSlider';
import StoreCards from '../component/main/StoreCards/StoreCards';
import Banner from '../component/main/banner/banner';
import AdsNoLogin from '../component/main/AdsNoLogin/AdsNoLogin';

import type { NextPageWithLayout } from './_app'
import type { ReactElement } from 'react'
import Layout from '../component/Layout/Layout';
import { createStyles } from '@mui/material';

const Home: NextPageWithLayout = () => {

  const styles = () =>
  createStyles({
    h: {
      '&::before': {
        content: 'some content',
        display: 'block',
        height: 60,
        marginTop: -60
      }
    }
  });
  return (
    <>
      <AdsNoLogin/>
      <AdsSlider />
      <Container maxWidth="lg">
        <StoreCards />
        {/* <CategorySlider /> */}
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
