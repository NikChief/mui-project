import { Favorite, FavoriteBorder, MoreVert, Share } from '@mui/icons-material';
import { Avatar, Box, Card, CardActions, CardContent, CardHeader, CardMedia, Checkbox, IconButton, Typography } from '@mui/material';
import React from 'react';
import Post from '../Post/Post';

function Feed(props) {
  return (
    <Box flex={4} p={2}>
      < Post/>
      < Post />
      < Post />
      < Post />
      < Post />
      < Post />
      < Post />
    </Box>
  );
}

export default Feed;
