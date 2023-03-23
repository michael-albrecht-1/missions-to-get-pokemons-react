import "./App.css";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Grid from "@mui/material/Unstable_Grid2";
import { Box } from "@mui/material";
import Pokemons from "./pokemon/adapters/primaries/pokemons/pokemons";
import Navbar from "./core/navbar/navbar";
import { Outlet } from "react-router-dom";

const theme = createTheme({
  components: {
    MuiGrid2: {
      defaultProps: {
        disableEqualOverflow: true,
      },
    },
  },
});

export default function App() {
  return (
    <div className="App">
      <Box sx={{ flexGrow: 1 }}>
        <ThemeProvider theme={theme}>
          <Grid container spacing={2}>
            <Grid xs={12}>
              <Navbar />
            </Grid>
            <Grid xs={12}>
              <div id="detail">
                <Outlet />
              </div>
            </Grid>
          </Grid>
        </ThemeProvider>
      </Box>
    </div>
  );
}
