import { Favorite, FavoriteBorder, MoreVert, Share } from '@mui/icons-material';
import { Avatar, Box, Card, CardActions, CardContent, CardHeader, CardMedia, Checkbox, IconButton, Typography } from '@mui/material';
import React from 'react';
import Post from '../Post/Post';

function Feed(props) {
  const posts = [
    {
      avatar: "https://static.wikia.nocookie.net/silicon-valley/images/2/20/Bertram_Gilfoyle.jpg",
      author: "Bertram Gilfoyle",
      image: "https://cdn.shopify.com/s/files/1/0969/9128/products/Silicon_Valley_-_Pied_Piper_Logo_8ea7ff79-7f7e-4803-800b-497d27f24f24.jpg",
      content: `New product presentation today!`
    },
    {
      avatar: "https://library.sportingnews.com/styles/crop_style_16_9_desktop/s3/2022-05/GettyImages-1240648851%20%281%29.jpg",
      author: 'Al Horford',
      image: "https://i.ytimg.com/vi/CUXUiWEU8SI/maxresdefault.jpg",
      content: `We win 1st Game Tonight!`
    },
    {
      avatar: 'avatar.jpg',
      author: 'Nik Chief',
      image: "https://www.apkholding.ru/upload/medialibrary/502/502fd1ea12a31f18c9819a37547b271a.jpg",
      content: `We started to create a new musical product!`
    },
  ];

  return (
    <Box flex={4} p={2}>
      {posts.map(post => < Post key={Math.random().toString()} post={post}/>)}
      
    </Box>
  );
}

export default Feed;
