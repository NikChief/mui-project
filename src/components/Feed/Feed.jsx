import { Favorite, FavoriteBorder, MoreVert, Share } from '@mui/icons-material';
import { Avatar, Box, Card, CardActions, CardContent, CardHeader, CardMedia, Checkbox, IconButton, Typography } from '@mui/material';
import React, { useState } from 'react';
import Post from '../Post/Post';

function Feed({posts}) {
  

  return (
    <Box flex={4} p={2}>
      {posts.map(post => < Post key={Math.random().toString()} post={post}/>)}
      
    </Box>
  );
}

export default Feed;
