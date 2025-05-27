import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: "#FB3957",
    },
    secondary: {
      main: "#121212",
    },
  },
  typography: {
    fontFamily: [
      'Poppins'
    ].join(','),
  },
});

export default theme;