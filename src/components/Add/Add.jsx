import { Avatar, Fab, Input, Modal, Stack, styled, TextField, Tooltip, Typography } from '@mui/material';
import React, { useState } from 'react';
import { Add as AddIcon } from '@mui/icons-material'
import { Box } from '@mui/system';
import InsertEmoticonIcon from '@mui/icons-material/InsertEmoticon';
import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate';
import VideocamIcon from '@mui/icons-material/Videocam';
import FilePresentIcon from '@mui/icons-material/FilePresent';
import SettingsVoiceIcon from '@mui/icons-material/SettingsVoice';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';


const StyledModal = styled(Modal)(
  {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  }
)

const UserBox = styled(Box)(
  {
    display: 'flex',
    alignItems: 'center',
    gap: '6px',
    marginBottom: '20px'
  }
)

function Add({posts, setPosts}) {

  const [open, setOpen] = useState(false);

  const submitHandler = event => {
    event.preventDefault();
    setPosts(posts=>[{
      avatar: 'avatar.jpg',
      author: 'Nik Chief',
      image: event.target.image.value,
      content: event.target.text.value,
    }, ...posts]);
    setOpen(false)
  }
  return (<>
    <Tooltip
      onClick={() => setOpen(true)}
      title="Add New Post"
      sx={{
        position: 'fixed',
        bottom: 20,
        left: { xs: "calc(50% - 25px)", md: 30 }
      }}
    >
      <Fab color="primary" aria-label="add">
        <AddIcon />
      </Fab>
    </Tooltip>
    <StyledModal
      open={open}
      onClose={() => setOpen(false)}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box bgcolor={'background.default'} color={'text.primary'} width={480} height={280} p={3} borderRadius={2}>
        <Typography variant='h6' color='gray' textAlign={'center'}>
          Create a new post
        </Typography>
        <UserBox onClick={() => setOpen(true)}>
          <Avatar alt="Nik" src="avatar.jpg" sx={{
            width: '30px',
            height: '30px',
            marginRight: '5px',
          }} />
          <Typography variant='span'>
            Nik
          </Typography>
        </UserBox>
        <form action='post' onSubmit={submitHandler}>
          <TextField
            id="standard-multiline-static"
            label="Write your post"
            multiline
            rows={2}
            variant="standard"
            name='text'
            sx={{
              width: '100%'
            }}
          />
            <Input placeholder="Attach a link to an image on the web" name='image'
              sx={{
                width: '100%',
                marginTop: '20px'
              }}/>
          <Stack direction='row' sx={{
            justifyContent: 'space-between',
            padding: '1%'
          }}>
            <Stack direction='row' gap={2} mt={0}>
              <InsertEmoticonIcon sx={{
                color: 'rgb(74,67,67)',
                '&:hover': {
                  color: 'rgb(81,150,217)'
                }
              }} />
              <AddPhotoAlternateIcon sx={{
                color: 'rgb(74,67,67)',
                '&:hover': {
                  color: 'rgb(81,150,217)'
                }
              }} />
              <VideocamIcon sx={{
                color: 'rgb(74,67,67)',
                '&:hover': {
                  color: 'rgb(81,150,217)'
                }
              }} />
              <FilePresentIcon sx={{
                color: 'rgb(74,67,67)',
                '&:hover': {
                  color: 'rgb(81,150,217)'
                }
              }} />
              <SettingsVoiceIcon sx={{
                color: 'rgb(74,67,67)',
                '&:hover': {
                  color: 'rgb(81,150,217)'
                }
              }} />
            </Stack>
            <Button variant="contained" type='submit' endIcon={<SendIcon />}>
              Post
            </Button>
          </Stack>
        </form>
      </Box>
    </StyledModal>
  </>
  );
}

export default Add;
