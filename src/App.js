import { Box, Container, Stack } from "@mui/material";
import Add from "./components/Add/Add";
import Feed from "./components/Feed/Feed";
import Navbar from "./components/Navbar/Navbar";
import Rightbar from "./components/Rightbar/Rightbar";
import Sidebar from "./components/Sidebar/Sidebar";

function App() {

  return (
    <Box>
      <Navbar/>
      <Stack direction='row' spacing={2} justifyContent="space-between">
        <Sidebar />
        <Feed />
        <Rightbar />
      </Stack>
      <Add/>
    </Box>
  );
}

export default App;
