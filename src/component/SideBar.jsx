import { Box } from "@mui/system";
import React from "react";
import Content from "./leftContent";

function SideBar() {
  return (
    <div className="Side-nav">
      <Box>
      <h3>Home</h3>
      
      <Box sx={{ marginTop:"-50%"}} >
        <Content  />
      </Box>
        </Box>
    </div>
  );
}

export default SideBar;
