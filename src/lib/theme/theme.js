import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
  palette: {
    primary: {
      main: "#1586FD",
    },
    secondary: {
      main: "#666f73",
    },
  },


  components:{
     MuiButton:{
        defaultProps:{
            variant:"contained"
        },
        styleOverrides:{
            root:{
                padding:"8px 32px"
            },
             // Additional button sizes
             sizeLarge: {
              padding: "6px 24px", // Adjust padding for large size
          },
          sizeSmall: {
              padding: "10px 24px", // Adjust padding for small size
              fontWeight:"400"
          },
        }
     },

     MuiContainer:{
        defaultProps:{
            maxWidth:"lg"
        }
     }
    
  },
  typography:{
       body1:{
        color:"0B1134CC"
       } 
  }
});

theme.shadows[1] = "0px 5px 22px lightgray"
