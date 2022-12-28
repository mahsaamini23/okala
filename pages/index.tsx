import Container from '@mui/material/Container';

import { getExample } from '../api/api';
import { useEffect } from 'react';

import CategorySlider from '../component/main/CategorySlide/CategorySlider';
import AdsSlider from '../component/main/AdsSlider/AdsSlider';
import StoreCards from '../component/main/StoreCards/StoreCards';
import Banner from '../component/main/banner/banner';
import AdsNoLogin from '../component/main/AdsNoLogin/AdsNoLogin';

import type { NextPageWithLayout } from './_app'
import type { ReactElement } from 'react'
import Layout from '../component/Layout/Layout';

const Home: NextPageWithLayout = () => {

  useEffect(() => { getExample().then(res => console.log(res)); })

  return (
    <>
      <AdsNoLogin />
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
