import {
  Box,
  Header as GHeader,
  Heading,
  Text,
  Anchor,
  ThemeContext,
} from "grommet";
import { Instagram } from "grommet-icons";
import Link from "next/link";

const Header = () => {
  return (
    <GHeader style={{ position: "relative" }} height="xsmall">
      <Box
        style={{ position: "absolute" }}
        pad={{ horizontal: "large", vertical: "medium" }}
        height="xsmall"
        width="100%"
        direction="row"
        justify="between"
        align="center"
      >
        <Box direction="row" gap="small" align="baseline">
          <ThemeContext.Extend
            value={{
              anchor: { hover: { textDecoration: "none" } },
            }}
          >
            <Link href="/" as="a">
              <Anchor color="black" ex>
                <Heading level="1">Gefsi</Heading>
              </Anchor>
            </Link>
          </ThemeContext.Extend>
          <Text>by Yannis Apostolidis</Text>
        </Box>
        <Anchor href="https://www.instagram.com/apostolidhs/" target="_blank">
          <Instagram size="32px" color="brand" />
        </Anchor>
      </Box>
    </GHeader>
  );
};

export default Header;
