import { createTheme } from '@mui/material/styles';

const theme = createTheme({
    components: {
        MuiCssBaseline: {
            styleOverrides: (themeParam) => ({
                body: themeParam.palette.mode = 'dark',
            }),
        },
        MuiIconButton: {
            styleOverrides: {
                root: {
                    borderRadius: "10px",
                    fontSize: ".875rem",
                    fontWeight: 800,
                }
            },
        },
    },
    
    palette: {
        primary: {
            main: '#121212'
        },
        secondary: {
            main: '#757575'
        },
        error: {
            light: '#fff',
            main: '#e74c3c'
        },
        warning: {
            main: '#f1c40f'
        },
        info: {
            main: '#3498db'
        },
        success: {
            main: '#07bc0c'
        }
    },
    typography: {
        fontFamily: 'IRANSans',
        h1: {
            fontSize: 20,
            fontWeight: 500,
            color: 'rgb(54, 54, 54)',
        },
        h2: {
            fontSize: 18,
            fontWeight: 400,
            color: 'rgb(54, 54, 54)',
        },
        subtitle1: {
            fontSize: 16,
            fontWeight: 500,
            color: 'rgb(0, 0, 0, 0,.87)',
        },
        subtitle2: {
            fontSize: 14,
            fontWeight: 400,
            color: 'rgb(54, 54, 54)',
        },
        button: {
            fontSize: "14px",
            fontWeight: 500,
            color: 'black',
        },
        caption: {
            fontSize: 12,
            fontWeight: 400,
            color: 'rgb(104, 104, 104)',
        },

    },

});

export default theme;
