import { Box } from "@mui/material";
import Header from "./Header";

const Layout = () => {
  return (
    <Box sx={{ display: 'flex', minHeight: '100vh' }}>
      <Header />
    </Box>
  );
}

export default Layout;