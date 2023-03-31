import "./App.css";
import Navbar from "./core/navbar/navbar";
import { Outlet } from "react-router-dom";
import { createTheme, ThemeProvider } from "@mui/material";
import CssBaseline from "@mui/material/CssBaseline";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});

export default function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <div className="App">
        <Navbar />
        <div id="detail">
          <Outlet />
        </div>
      </div>
    </ThemeProvider>
  );
}
