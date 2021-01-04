import { Box, Footer as GFooter, Heading, Text } from "grommet";

const Footer = () => {
  return (
    <GFooter
      pad={{ vertical: "large" }}
      margin={{ horizontal: "medium" }}
      border={{ side: "top", color: "light-4" }}
    >
      <Heading level="3">Yannis Apostolidis</Heading>
    </GFooter>
  );
};

export default Footer;
