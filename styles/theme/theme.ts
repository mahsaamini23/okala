import { createTheme } from "@mui/material";


//add Typography varient
declare module '@mui/material/styles' {
    interface TypographyVariants {
      poster: React.CSSProperties;
    }
    // allow configuration using `createTheme`
    interface TypographyVariantsOptions {
      poster?: React.CSSProperties;
    }
  }
  // Update the Typography's variant prop options
  declare module '@mui/material/Typography' {
    interface TypographyPropsVariantOverrides {
      poster: true;
    }
  }

  //add Palette varient
  declare module '@mui/material/styles' {
    interface Palette {
      Poster: Palette['primary'];
    }
    interface PaletteOptions {
      Poster: PaletteOptions['primary'];
    }
  
  }
  

const theme = createTheme({

    breakpoints: {
        values: {
          xs: 0,
          sm: 600,
          md: 900,
          lg: 1200,
          xl: 1536,
        },
      },
      
    components: {
        MuiCssBaseline: {
            styleOverrides: (themeParam: { palette: { mode: string; }; }) => ({
                body: themeParam.palette.mode = 'dark',
            }),
        },
        MuiIconButton: {
            styleOverrides: {
                root: {
                    borderRadius: "10px",
                    fontSize: ".875rem",
                    fontWeight: 800
                }
            },
        },
    },
    
    palette: {
        Poster:{
            main: 'rgba(55,143,56)',
        },
        primary: {
            main: '#121212',
        },
        secondary: {
            main: '#757575'
        },
        error: {
            main: '#f01436'
        },
        warning: {
            main: '#f01436'
        },
        info: {
            main: '#3498db'
        },
        success: {
            main: '#07bc0c'
        },
        

    },
    typography: {
        fontFamily: 'IRANSans',
        poster: {
            fontSize: "2rem",
            fontWeight: 800,
            color: 'rgba(55,143,56)',
        },

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
        h6: {
            fontSize:"1rem",
            fontWeight: 500,
            color: "black"
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
