import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link/Link';
import Stack from '@mui/material/Stack/Stack';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import * as React from 'react';
import './style.css';
const theme = createTheme({
  components: {
    MuiContainer: {
      styleOverrides: {
        maxWidthSm: {
          '&.MuiContainer-maxWidthSm': {
            maxWidth: 200,
          },
        },
        maxWidthMd: {
          '&.MuiContainer-maxWidthMd': {
            maxWidth: 320,
          },
        },
        maxWidthLg: {
          '&.MuiContainer-maxWidthLg': {
            maxWidth: 500,
          },
        },
      },
    },
  },
});
export default function con() {
  return (
    <ThemeProvider theme={theme}>
      <Container maxWidth="sm" sx={{ border: '1px solid' }}>
        <Stack spacing={2} direction="row">
          <Link>Home</Link>
          <Link>About</Link>
          <Link>Contact</Link>
        </Stack>
      </Container>
      <Container maxWidth="md" sx={{ border: '1px solid' }}>
        <Stack spacing={2} direction="row">
          <Link>Home</Link>
          <Link>About</Link>
          <Link>Contact</Link>
        </Stack>
      </Container>
      <Container maxWidth="lg" sx={{ border: '1px solid' }}>
        <Stack spacing={2} direction="row">
          <Link>Home</Link>
          <Link>About</Link>
          <Link>Contact</Link>
        </Stack>
      </Container>
    </ThemeProvider>
  );
}