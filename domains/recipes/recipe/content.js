import { Heading, Box } from "grommet";
import useResponsive from "../../../hooks/useResponsive";
import Markdown from "../../../components/markdown";

const Content = ({ recipe: { ingredients, process } }) => {
  const { isSmall } = useResponsive();
  const markdownProps = isSmall
    ? { pad: { horizontal: "large" } }
    : { pad: "large" };

  return (
    <Box
      direction={isSmall ? "column" : "row"}
      width={{ max: "xlarge" }}
      alignSelf="center"
      gap={isSmall ? "large" : null}
    >
      <Markdown
        flex={{ grow: 1 }}
        basis="1/3"
        header={<Heading level="2">Συστατικά</Heading>}
        {...markdownProps}
      >
        {ingredients}
      </Markdown>
      <Markdown
        flex={{ grow: 2 }}
        basis="2/3"
        header={<Heading level="2">Εκτέλεση</Heading>}
        {...markdownProps}
      >
        {process}
      </Markdown>
    </Box>
  );
};

export default Content;
