import { BrowserRouter } from "react-router-dom";
import Router from "./routes/router";
import theme from "./theme/theme";
import { ThemeProvider } from "@emotion/react";

function App() {
  return (
    <BrowserRouter basename="/digital-portfolio">
      <ThemeProvider theme={theme}>
        <Router />
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;