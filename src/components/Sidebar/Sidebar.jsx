import { Box } from '@mui/material';
import React from 'react';

function Sidebar(props) {
  return (
    <Box bgcolor="skyblue" flex={1} p={2} sx={{
      display: {
        xs: "none",
        sm: "block"
      }
    }}>
      sidebar
    </Box>
  );
}

export default Sidebar;
