import { Heading, Text } from "grommet";
import styled from "styled-components";
import Link from "next/link";
import BackgroundImage from "../../components/backgroundImage";

const Container = styled(BackgroundImage)`
  img[data-loaded="true"] {
    border-radius: 8px;
    transition: transform 0.2s ease-in-out;
    opacity: 0.4;
  }
  &:hover {
    img[data-loaded="true"] {
      transform: scale(1.2);
      opacity: 0.6;
    }
  }
`;

const contentProps = {
  pad: "medium",
  background: { color: "light-1", opacity: true },
};

const Teaser = ({ recipe, ...rest }) => {
  return (
    <Link href={`/recipes/${recipe.id}`}>
      <Container src={recipe.images[0]} contentProps={contentProps} {...rest}>
        <Heading level="2">{recipe.title}</Heading>
        <Text>{recipe.subtitle}</Text>
      </Container>
    </Link>
  );
};

export default Teaser;
