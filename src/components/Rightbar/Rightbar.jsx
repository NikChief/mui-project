import { Avatar, AvatarGroup, Box, Divider, ImageList, ImageListItem, List, ListItem, ListItemAvatar, ListItemText, Typography } from '@mui/material';
import React from 'react';

function Rightbar(props) {
  return (
    <Box flex={2} p={2}
      sx={{
        display: {
          xs: "none",
          sm: "block"
        }
      }}>
      <Box position={'fixed'} width={360} sx={{
        margin: '0 auto'
      }}
      >
        <Typography variant='h6' fontWeight={300} mb={1} mt={3}>
          Friends Online
        </Typography>
        <AvatarGroup max={4} sx={{flexDirection: 'row-reverse', justifyContent: 'flex-end'}} >
          <Avatar alt="Bertram Gilfoyle" src="https://static.wikia.nocookie.net/silicon-valley/images/2/20/Bertram_Gilfoyle.jpg" />
          <Avatar alt="Ilon Mask" src="https://www.ixbt.com/img/n1/news/2022/3/1/2323_large.jpg" />
          <Avatar alt="Al Horford" src="https://library.sportingnews.com/styles/crop_style_16_9_desktop/s3/2022-05/GettyImages-1240648851%20%281%29.jpg" />
          <Avatar alt="Dinesh Chugtai" src="/static/images/avatar/3.jpg" />
          <Avatar alt="Joris Voorn" src="/static/images/avatar/3.jpg" />
        </AvatarGroup>
        <Typography variant='h6' fontWeight={300} mb={1} mt={3}>
          Latest News and Photos
        </Typography>
        <ImageList cols={3} rowHeight={120} gap={4}>
          <ImageListItem>
            <img
              src='https://thumbs.dreamstime.com/b/suncoast-bbq-bash-event-food-bbq-slabs-ribs-venice-fl-competition-held-annually-featuring-national-international-57043172.jpg'
              alt='barbeque'
              loading="lazy"
            />
          </ImageListItem>
          <ImageListItem>
            <img
              src='https://media-cdn.tripadvisor.com/media/photo-s/1a/e4/fe/6e/fresh-steamed-lobster.jpg' 
              alt='lobster'
              loading="lazy"
            />
          </ImageListItem><ImageListItem>
            <img
              src='https://img5.goodfon.ru/wallpaper/nbig/4/a7/tropical-paradise-palms-beach-sea-sand-more-pesok-pliazh-otd.jpg'
              alt='beach'
              loading="lazy"
            />
          </ImageListItem>
        </ImageList>
        <Typography variant='h6' fontWeight={300} mb={0} mt={3}>
          Conversations
        </Typography>
        <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper', paddingTop:'0'}}>
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
            </ListItemAvatar>
            <ListItemText
              primary="Brunch this weekend?"
              secondary={
                <React.Fragment>
                  <Typography
                    sx={{ display: 'inline' }}
                    component="span"
                    variant="body2"
                    color="text.primary"
                  >
                    Ali Connors
                  </Typography>
                  {" — I'll be in your neighborhood doing errands this…"}
                </React.Fragment>
              }
            />
          </ListItem>
          <Divider variant="inset" component="li" />
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />
            </ListItemAvatar>
            <ListItemText
              primary="Summer BBQ"
              secondary={
                <React.Fragment>
                  <Typography
                    sx={{ display: 'inline' }}
                    component="span"
                    variant="body2"
                    color="text.primary"
                  >
                    to Scott, Alex, Jennifer
                  </Typography>
                  {" — Wish I could come, but I'm out of town this…"}
                </React.Fragment>
              }
            />
          </ListItem>
          <Divider variant="inset" component="li" />
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
            </ListItemAvatar>
            <ListItemText
              primary="Oui Oui"
              secondary={
                <React.Fragment>
                  <Typography
                    sx={{ display: 'inline' }}
                    component="span"
                    variant="body2"
                    color="text.primary"
                  >
                    Sandra Adams
                  </Typography>
                  {' — Do you have Paris recommendations? Have you ever…'}
                </React.Fragment>
              }
            />
          </ListItem>
        </List>
      </Box>
    </Box>
  );
}

export default Rightbar;
