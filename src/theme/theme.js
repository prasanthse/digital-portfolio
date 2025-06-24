import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: "#e76715",
    },
    secondary: {
      main: "#fdf0ed",
    },
  },
  typography: {
    fontFamily: [
      'Poppins'
    ].join(','),
  },
  components: {
    MuiContainer: {
      styleOverrides: {
        root: {
          backgroundColor: '#f5f5f5'
        }
      }
    }
  }
});

export default theme;