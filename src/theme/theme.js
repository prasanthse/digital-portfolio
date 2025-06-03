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
});

export default theme;