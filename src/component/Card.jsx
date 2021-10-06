import React from "react";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";

function Card(props) {
  return (
    <div>
      <div className="card">
        <Avatar
          className="nav-head1"
          sx={{
            width: 30,
            height: 30,
            marginBottom: "100px",
            color: "primary.transperent",
            "&:hover": {
              color: "primary.dark",
              opacity: [0.9, 0.8, 0.7],
            },
          }}
        />
        <Typography> UserName </Typography>
      </div>
    </div>
  );
}

export default Card;
