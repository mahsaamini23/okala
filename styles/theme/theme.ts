import { createTheme } from '@mui/material/styles';

const theme = createTheme({
    palette:{
        primary:{
            main:'#121212'
        },
        error:{
            light:'#fff',
            main:'#e74c3c'
        },
        warning:{
            main:'#f1c40f'
        },
        info:{
            main:'#3498db'
        },
        success:{
            main:'#07bc0c'
        }
    },
    typography:{
        fontFamily: 'IRANSans',
        h1:{
            fontSize: 20,
            fontWeight: 500,
            color:'rgb(54, 54, 54)',
        },
        h2:{
            fontSize: 18,
            fontWeight: 400,
            color:'rgb(54, 54, 54)',
        },
        subtitle1:{
            fontSize: 16,
            fontWeight: 500,
            color:'rgb(0, 0, 0, 0,.87)',
        },
        subtitle2:{
            fontSize: 14,
            fontWeight: 400,
            color:'rgb(54, 54, 54)',
        },
        button:{
            fontSize: 14,
            fontWeight: 400,
            color: 'rgb(54, 54, 54)',
        },
        caption:{
            fontSize: 12,
            fontWeight: 400,
            color: 'rgb(104, 104, 104)',
        },
    },
    spacing: [0, 4, 8, 16, 32, 64],
});

export default theme;
