import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      // Site primary color
      main: "#e76715",
      // Button text color
      contrastText: "#ffffff"
    },
    secondary: {
      // Site secondary color
      main: "#fdf0ed"
    },
  },
  typography: {
    fontFamily: [
      // Font name here. Make sure it is already included in your index.html inside public directory
      // If not, update your index.html using your preferred google fonts (https://fonts.google.com)
      'Poppins'
    ].join(','),
  },
  components: {
    MuiContainer: {
      styleOverrides: {
        root: {
          // Site paper color
          backgroundColor: '#f5f5f5'
        }
      }
    }
  }
});

export default theme;