import React from "react";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import OndemandVideoIcon from "@mui/icons-material/OndemandVideo";
import StorefrontIcon from "@mui/icons-material/Storefront";
import GroupsOutlinedIcon from "@mui/icons-material/GroupsOutlined";
import MessageOutlinedIcon from "@mui/icons-material/MessageOutlined";
import Avatar from "@mui/material/Avatar";
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';


function Icons() {
  const [value, setValue] = React.useState("");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%', typography: 'body1' }}>
    <TabContext value={value}>
    <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
    <TabList onChange={handleChange} aria-label="lab API tabs example">
            <Tab  value="1" 
            
            label={  <HomeOutlinedIcon
              className="nav-head"
              sx={{
                width: 25,
                height: 25,
                color: "primary.grey",
                "&:hover": {
                  color: "primary.dark",
                  opacity: [0.9, 0.8, 0.7],
                },
              }}
            />}
            
            />  
            <Tab label={
              <NotificationsOutlinedIcon
              className="nav-head"
              sx={{
                width: 25,
                height: 25,
                color: "primary.grey",
                "&:hover": {
                  color: "primary.dark",
                  opacity: [0.9, 0.8, 0.7],
                },
              }}
            />
            } value="2" />
            <Tab label={<OndemandVideoIcon
              className="nav-head"
              sx={{
                width: 25,
                height: 25,
                color: "primary.grey",
                "&:hover": {
                  color: "primary.dark",
                  opacity: [0.9, 0.8, 0.7],
                },
              }}
            />} value="3" />


            <Tab label={<Avatar
              alt="Travis Howard"
              src="/static/images/avatar/2.jpg"
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
            />} value="4" />
            <Tab label={      <StorefrontIcon
              className="nav-head"
              sx={{
                width: 25,
                height: 25,
                color: "primary.grey",
                "&:hover": {
                  color: "primary.dark",
                  opacity: [0.9, 0.8, 0.7],
                },
              }}
            />} value="5" />
            <Tab label={<GroupsOutlinedIcon
              className="nav-head"
              sx={{
                width: 25,
                height: 25,
                color: "primary.grey",
                "&:hover": {
                  color: "primary.dark",
                  opacity: [0.9, 0.8, 0.7],
                },
              }}
            />} value="6" />
            <Tab label={  <MessageOutlinedIcon
              className="nav-head"
              sx={{
                width: 25,
                height: 25,
                color: "primary.grey",
                "&:hover": {
                  color: "primary.dark",
                  opacity: [0.9, 0.8, 0.7],
                },
              }}
            />} value="7" />
          </TabList>
        </Box>
    </TabContext>
    </Box>
  );
}

export default Icons;
