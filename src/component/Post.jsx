import * as React from 'react';

import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';

import CardActions from '@mui/material/CardActions';

import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';

import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';

import MoreVertIcon from '@mui/icons-material/MoreVert';

export default function Post() {
  

  return (
    <Card sx={{ maxWidth: 600, textAlign: "center", marginLeft: "0px", marginBottom: "10px" }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            M
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title="Mano Dancer"
        subheader="October 26, 2021"
      />
      <CardMedia
        component="img"
        height="370"
        image="https://bit.ly/2WQQWFi"
        alt="Good morning"
      />
 
      <CardActions >
        <IconButton aria-label="add to favorites" >
          <FavoriteIcon  />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
      </CardActions>
     
    </Card>
  );
}