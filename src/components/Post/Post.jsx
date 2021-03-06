import React from 'react';
import { Favorite, FavoriteBorder, MoreVert, Share } from '@mui/icons-material';
import { Avatar, Box, Card, CardActions, CardContent, CardHeader, CardMedia, Checkbox, IconButton, Typography } from '@mui/material';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';

function Post({post, setPosts}) {
  const deleteHandler = (event) => {
    const id = post.id;
    setPosts((posts)=>[...posts].filter(post=>post.id!==id))
  }
  return (
    <Card sx={{margin: 4}}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: 'red' }} aria-label="recipe" src={post.avatar}>
            
          </Avatar>
        }
        action={
          <IconButton aria-label="hide" title='Hide news from feed' id={post.id}
          onClick={deleteHandler}
          >
            <VisibilityOffIcon />
          </IconButton>
        }
        title={post.author}
        subheader="May 13, 2022"
      />
      <CardMedia
        component="img"
        height="20%"
        image={post.image}
        alt="Paella dish"

      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {post.content}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <Checkbox icon={<FavoriteBorder />} checkedIcon={<Favorite color='error' />} />
        </IconButton>
        <IconButton aria-label="share">
          <Share />
        </IconButton>
      </CardActions>
    </Card>
  );
}

export default Post;
