import { AppBar, Badge, Box, InputBase, styled, Toolbar, Typography } from '@mui/material';
import TapasIcon from '@mui/icons-material/Tapas';
import React from 'react';
import { Mail } from '@mui/icons-material';

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
}))

function Navbar(props) {
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
        <Search><InputBase placeholder='Search somebody or something...'/></Search>
        <Icons><Badge badgeContent={4} color="error">
          <Mail />
        </Badge>

        </Icons>
      </StyledToolBar>
    </AppBar>
  );
}

export default Navbar;
