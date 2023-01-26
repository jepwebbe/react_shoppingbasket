import { ThemeProvider } from "styled-components";
import Router from "./Components/App/Router/Router";
import { GlobalStyles } from "./Styles/Global";
import { Theme } from "./Styles/Theme";

function App() {
  return (
    <ThemeProvider theme={Theme}>
            <Router />
      <GlobalStyles />
    </ThemeProvider>
  );
}

export default App;
