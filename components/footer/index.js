import { Box, Footer as GFooter, Heading, Text } from "grommet";

const Footer = () => {
  return (
    <GFooter
      pad={{ vertical: "large" }}
      margin={{ horizontal: "medium" }}
      border={{ side: "top", color: "light-4" }}
      justify="center"
    >
      <Box fill="horizontal" width={{ max: "xxlarge" }} direction="row">
        <Heading level="3">Yannis Apostolidis</Heading>
      </Box>
    </GFooter>
  );
};

export default Footer;
