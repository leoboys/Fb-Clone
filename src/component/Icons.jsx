import React from "react";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import OndemandVideoIcon from "@mui/icons-material/OndemandVideo";
//import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import StorefrontIcon from "@mui/icons-material/Storefront";
import GroupsOutlinedIcon from "@mui/icons-material/GroupsOutlined";
import MessageOutlinedIcon from "@mui/icons-material/MessageOutlined";
import Avatar from "@mui/material/Avatar";
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import { Icon } from "@mui/material";

function icon() {
  

  return (
    <Box sx={{ width: '100%', typography: 'body1' }}>
    <TabContext value={value}>
    <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
    <TabList onChange={handleChange} aria-label="lab API tabs example">
            <Tab label="Item One" value="1" />
            <Tab label="Item Two" value="2" />
            <Tab label="Item Three" value="3" />
          </TabList>
        </Box>
        <TabPanel value="1">Item One</TabPanel>
        <TabPanel value="2">Item Two</TabPanel>
        <TabPanel value="3">Item Three</TabPanel>
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
    </TabContext>
    </Box>
  );
}

export default Icon;
