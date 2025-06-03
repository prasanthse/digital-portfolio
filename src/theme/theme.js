import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: "#e76715",
    },
    secondary: {
      main: "#071e48",
    },
  },
  typography: {
    fontFamily: [
      'Poppins'
    ].join(','),
  },
});

export default theme;