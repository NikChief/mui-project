import { Avatar, Fab, Modal, Stack, styled, TextField, Tooltip, Typography } from '@mui/material';
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

function Add(props) {
  const [open, setOpen] = useState(false);
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
      <Box bgcolor={'background.default'} color={'text.primary'} width={480} height={280}  p={3} borderRadius={2}>
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
        <TextField
          id="standard-multiline-static"
          label="Write your post"
          multiline
          rows={4}
          variant="standard"
          sx={{
            width: '100%'
          }}
        />
        <Stack direction='row' sx={{
          justifyContent: 'space-between',
          padding: '1%'
        }}>
          <Stack direction='row' gap={2} mt={0}>
            <InsertEmoticonIcon sx={{
              color: 'rgb(74,67,67)',
              '&:hover': {
                color:'rgb(81,150,217)'
              }
            }} />
            <AddPhotoAlternateIcon sx={{
              color: 'rgb(74,67,67)',
              '&:hover': {
                color: 'rgb(81,150,217)'
              } }} />
            <VideocamIcon sx={{
              color: 'rgb(74,67,67)',
              '&:hover': {
                color: 'rgb(81,150,217)'
              } }} />
            <FilePresentIcon sx={{
              color: 'rgb(74,67,67)',
              '&:hover': {
                color: 'rgb(81,150,217)'
              } }} />
            <SettingsVoiceIcon sx={{
              color: 'rgb(74,67,67)',
              '&:hover': {
                color: 'rgb(81,150,217)'
              } }} />
          </Stack>
          <Button variant="contained" endIcon={<SendIcon />}>
            Send
          </Button>
        </Stack>
      </Box>
    </StyledModal>
  </>
  );
}

export default Add;
