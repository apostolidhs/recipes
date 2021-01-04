import { Box, Text } from "grommet";

const Tile = ({ label, background, children, ...rest }) => {
  return (
    <Box gap="small" {...rest}>
      <Text>{label}</Text>
      <Text size="large" textAlign="center">
        {children}
      </Text>
    </Box>
  );
};

const Info = ({ recipe: { portions, difficult, duration }, ...rest }) => {
  return (
    <Box
      direction="row"
      pad="medium"
      background={{ opacity: "strong", color: "white" }}
      round
      {...rest}
    >
      <Tile label="Διάρκεια" round={{ corner: "left" }}>
        {duration}
        <Text color="dark-3">′</Text>
      </Tile>
      <Tile
        label="Περιπλοκότητα"
        border={{ side: "vertical", color: "status-disabled" }}
        pad={{ horizontal: "medium" }}
        margin={{ horizontal: "medium" }}
      >
        {difficult}
        <Text color="dark-3">/5</Text>
      </Tile>
      <Tile label="Μερίδες" round={{ corner: "right" }}>
        {portions}
      </Tile>
    </Box>
  );
};

export default Info;
