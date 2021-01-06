import { Heading, Box } from "grommet";
import List from "../list";

const More = ({ recipes }) => {
  return (
    <Box width={{ max: "xxlarge" }} margin={{ top: "large" }}>
      <Heading level="2" margin={{ horizontal: "large" }}>
        Περισσότερες συνταγές
      </Heading>
      <List recipes={recipes} />
    </Box>
  );
};

export default More;
