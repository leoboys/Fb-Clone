import React from "react";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import OndemandVideoIcon from "@mui/icons-material/OndemandVideo";
//import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import StorefrontIcon from "@mui/icons-material/Storefront";
import GroupsOutlinedIcon from "@mui/icons-material/GroupsOutlined";
import MessageOutlinedIcon from "@mui/icons-material/MessageOutlined";
import Avatar from "@mui/material/Avatar";

function Icons() {
  //const [isMouseOver, setMouseOver] = useState(false);

  // function handleMouseOver() {
  //   setMouseOver(true);
  // }
  // function handleMouseOut() {
  //   setMouseOver(false);
  // }

  return (
    <icon>
      <table cellSpacing="5px">
        <tr>
          <td>
            <HomeOutlinedIcon
              className="nav-head"
              sx={{
                width: 30,
                height: 30,
                color: "primary.grey",
                "&:hover": {
                  color: "primary.dark",
                  opacity: [0.9, 0.8, 0.7],
                },
              }}
            />
          </td>
          <td>
            <NotificationsOutlinedIcon
              className="nav-head"
              sx={{
                width: 30,
                height: 30,
                color: "primary.grey",
                "&:hover": {
                  color: "primary.dark",
                  opacity: [0.9, 0.8, 0.7],
                },
              }}
            />
          </td>
          <td>
            <OndemandVideoIcon
              className="nav-head"
              sx={{
                width: 30,
                height: 30,
                color: "primary.grey",
                "&:hover": {
                  color: "primary.dark",
                  opacity: [0.9, 0.8, 0.7],
                },
              }}
            />
          </td>
          <td>
            <Avatar
              alt="Travis Howard"
              src="/static/images/avatar/2.jpg"
              className="nav-head"
              sx={{
                width: 40,
                height: 40,
                color: "primary.grey",
                "&:hover": {
                  color: "primary.dark",
                  opacity: [0.9, 0.8, 0.7],
                },
              }}
            />
          </td>
          <td>
            <StorefrontIcon
              className="nav-head"
              sx={{
                width: 30,
                height: 30,
                color: "primary.grey",
                "&:hover": {
                  color: "primary.dark",
                  opacity: [0.9, 0.8, 0.7],
                },
              }}
            />
          </td>
          <td>
            <GroupsOutlinedIcon
              className="nav-head"
              sx={{
                width: 30,
                height: 30,
                color: "primary.grey",
                "&:hover": {
                  color: "primary.dark",
                  opacity: [0.9, 0.8, 0.7],
                },
              }}
            />
          </td>
          <td>
            <MessageOutlinedIcon
              className="nav-head"
              sx={{
                width: 30,
                height: 30,
                color: "primary.grey",
                "&:hover": {
                  color: "primary.dark",
                  opacity: [0.9, 0.8, 0.7],
                },
              }}
            />
          </td>
        </tr>
      </table>
    </icon>
  );
}

export default Icons;
