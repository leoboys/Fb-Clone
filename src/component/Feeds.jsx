import { Container, TextField } from "@mui/material";
import React from "react";
import Box from "@mui/material/Box";
import Story from "./Story";
import Avatar from "@mui/material/Avatar";
import Button from '@mui/material/Button';
import InsertPhotoIcon from '@mui/icons-material/InsertPhoto';
import Post from "./Post";
import { red } from '@mui/material/colors';
import CardHeader from '@mui/material/CardHeader';



function Feed() {
  return (
    <div>
      <Container maxWidth="sm">
        <Box
          sx={{
            width: 700,
            height: 350,
          }}
        >
          <Story sx={{ marginTop: "80px" }} />
        </Box>
        <Container fixed sx={{
          width: 450,
          height: 70,
            textAlign: "center",
            background: "white",
            border: 0 ,
            boxShadow: "1px 1px 2px 1px #ccc",
            margin: 0,
            marginTop: "0%"
          }}  >
             <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500], marginLeft: "-20px" }} aria-label="recipe">
            M
          </Avatar>
        }
       action={
         <label>
        <TextField type="text" placeholder="Add post.."  sx={{ 
          border:0,
          height: 40,
          width: 320,
         background: "whitesmoke",
         marginTop: "-5px",
         marginLeft: "-30px"
          }} />

        <label htmlFor="contained-button-file"   >
        <Button accept="image/*" id="contained-button-file" multiple type="file" sx={{
         height: 30,
         width: 20, 
         marginTop: "5px",
        marginRight: "-10%"
          }} >
        <InsertPhotoIcon  />
       </Button>
       </label>
        </label>
         
       }

      />

        </Container >
        <Box
          
        />
         <Box
          sx={{
            width: 600,
            height: 500,
            background: "white",
            border: 0 ,
            margin: 4,
            marginLeft: "-40px",
            boxShadow: "1px 1px 2px 1px #ccc"

          }}
        > 
        <Post />
        
        </Box>
         <Box
          sx={{
            width: 600,
            height: 300,
            background: "white",
            border: 0 ,
            margin: 4,
            marginLeft: "-40px",
            boxShadow: "1px 1px 2px 1px #ccc"

          }}
        >
<Post />
        </Box>
      </Container>
    
    </div>
  );
}

export default Feed;
