import { Box, Main } from "grommet";
import Header from "../header";
import Footer from "../footer";

const Layout = ({ children, ...rest }) => {
  return (
    <Box height={{ min: "100vh" }}>
      <Header />
      <Main {...rest}>{children}</Main>
      <Footer pad="medium">footer</Footer>
    </Box>
  );
};

export default Layout;
