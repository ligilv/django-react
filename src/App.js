import "./App.css";
import { Heading } from "./Components/Typography";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { red } from "@mui/material/colors";
import Router from "./Router";
import theme from "./Components/Theme";
// const theme = createTheme({
//   palette: {
//     primary: {
//       main: red[500],
//     },
//   },
// });
function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router />
    </ThemeProvider>
  );
}

export default App;
