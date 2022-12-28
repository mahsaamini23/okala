import "../styles/globals.css";
import type { AppProps } from 'next/app'
import { ThemeProvider } from '@mui/material/styles';
import theme from '../styles/theme/theme';
import { store } from '../Toolkit/store';
import { Provider } from 'react-redux';
import makeServer from '../server/mirage';
import { CssBaseline } from '@mui/material';
import type { ReactElement, ReactNode } from 'react'
import type { NextPage } from 'next'
import Layout from "../component/Layout/Layout";

makeServer();

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode
}

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout
}

export default function App({ Component, pageProps }: AppPropsWithLayout) {

  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    </Provider>
  )
}
