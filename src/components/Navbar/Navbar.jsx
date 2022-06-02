import { AppBar, Avatar, Badge, Box, InputBase, Menu, MenuItem, styled, Toolbar, Typography } from '@mui/material';
import TapasIcon from '@mui/icons-material/Tapas';
import React, { useState } from 'react';
import { Mail, Notifications } from '@mui/icons-material';

const StyledToolBar = styled(Toolbar)({
  display: 'flex',
  justifyContent: 'space-between'
})

const Search = styled("div")(({ theme }) => ({
  backgroundColor: 'white',
  padding: '0 10px',
  borderRadius: theme.shape.borderRadius,
  width: '40%'
}))

const Icons = styled(Box)(({ theme }) => ({
  display: "none",
  alignItems: 'center',
  gap: '20px',
  [theme.breakpoints.up('sm')]:{
    display: 'flex'
  }
}))

const UserBox = styled(Box)(({ theme }) => ({
  display: "flex",
  gap: '10px',
  alignItems: 'center',
  [theme.breakpoints.up('sm')]: {
    display: 'none'
  }
}))

function Navbar(props) {
  const [open, setOpen] = useState(false)
  return (
    <AppBar position='sticky'>
      <StyledToolBar>
        <Typography variant='h6' sx={{
          display: {
            xs: 'none',
            sm: 'block'
          }
        }}>
          INGRID
        </Typography>
        <TapasIcon sx={{
          display: {
            xs: 'block',
            sm: 'none'
          }
        }} />
        <Search><InputBase placeholder='Search...' /></Search>
        <Icons>
          <Badge badgeContent={4} color="error">
            <Mail />
          </Badge>
          <Badge badgeContent={4} color="error">
            <Notifications />
          </Badge>
          <Avatar alt="Nik" src="avatar.jpg" sx={{
            width: '30px',
            height: '30px'
          }} onClick={()=>setOpen(true)}/>
        </Icons>
        <UserBox onClick={() => setOpen(true)}>
          <Avatar alt="Nik" src="avatar.jpg" sx={{
            width: '30px',
            height: '30px'
          }} />
          <Typography variant='span'>
            Nik
          </Typography>
        </UserBox>
      </StyledToolBar>
      <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        open={open}
        onClose={(()=>setOpen(false))}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
      >
        <MenuItem>Profile</MenuItem>
        <MenuItem>My account</MenuItem>
        <MenuItem>Logout</MenuItem>
      </Menu>
    </AppBar>
  );
}

export default Navbar;
