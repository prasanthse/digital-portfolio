import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: "#2aa7df",
    },
    secondary: {
      main: "#f0fbff",
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