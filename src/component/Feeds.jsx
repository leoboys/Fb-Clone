import { Container } from "@mui/material";
import React from "react";
import Box from "@mui/material/Box";
import Story from "./Story";

function Feed() {
  return (
    <div>
      <Container maxWidth="sm">
        <Box
          sx={{
            width: 600,
            height: 350,
          }}
        >
          <Story sx={{ marginTop: "80px" }} />
        </Box>
      </Container>
      <Container fixed maxwidth="md"></Container>
    </div>
  );
}

export default Feed;
