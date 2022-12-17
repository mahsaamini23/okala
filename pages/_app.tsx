import "../styles/globals.css";
import type { AppProps } from 'next/app'
import { ThemeProvider } from '@mui/material/styles';
import theme from '../styles/theme/theme';
import { store } from '../Toolkit/store';
import { Provider } from 'react-redux';
import makeServer from '../server/mirage';
import { CssBaseline } from '@mui/material';

makeServer();

export default function App({ Component, pageProps }: AppProps) {

  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Component {...pageProps} />
      </ThemeProvider>
    </Provider>
  )
}
