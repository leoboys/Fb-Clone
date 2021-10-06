import * as React from "react";
import FacebookIcon from "@mui/icons-material/Facebook";
import Icons from "./Icons";
import SettingsIcon from "@mui/icons-material/Settings";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import AppBar from "@mui/material/AppBar";
import { Grid } from "@mui/material";

//import Typography from "@mui/material/Typography";

function Header() {
  return (
    <header> 
      <Box sx={{ flexGrow: 1 }}>
        <AppBar>
          <Toolbar>
            <Grid container spacing={3}>
              <Grid item xs={3.2}>
                <FacebookIcon className="fb" sx={{ width: 50, height: 50 }} />
              </Grid>
              <Grid item xs={6}>
                <Icons sx={{ textAlign: "Center" }} />
              </Grid>
              <Grid item xs={1}>
                <SettingsIcon
                  sx={{ width: 30, height: 30, marginLeft: "130%" }}
                />
              </Grid>
            </Grid>
          </Toolbar>
        </AppBar>
      </Box>
    </header>
  );
}
export default Header;
