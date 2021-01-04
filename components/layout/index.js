import { Box, Main } from "grommet";
import Header from "../header";
import Footer from "../footer";

const Layout = ({ children }) => {
  return (
    <Box height={{ min: "100vh" }}>
      <Header />
      <Main>{children}</Main>
      <Footer pad="medium">footer</Footer>
    </Box>
  );
};

export default Layout;
