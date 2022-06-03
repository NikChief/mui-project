import { Box, Container, createTheme, Stack, ThemeProvider } from "@mui/material";
import { useState } from "react";
import Add from "./components/Add/Add";
import Feed from "./components/Feed/Feed";
import Navbar from "./components/Navbar/Navbar";
import Rightbar from "./components/Rightbar/Rightbar";
import Sidebar from "./components/Sidebar/Sidebar";

function App() {
  const initialposts = [
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

  const [posts, setPosts] = useState(initialposts);

  const [mode, setMode] = useState('light')
  const darkTheme = createTheme({
    palette: {
      mode: mode
    }
  })

  return (
    <ThemeProvider theme={darkTheme}>
      <Box bgcolor={'background.default'} color={'text.primary'}>
        <Navbar />
        <Stack direction='row' spacing={2} justifyContent="space-between">
          <Sidebar setMode={setMode} mode={mode}/>
          <Feed posts={posts} setPosts={setPosts}/>
          <Rightbar />
        </Stack>
        <Add posts={posts} setPosts={setPosts}/>
      </Box>
    </ThemeProvider>
  );
}

export default App;
