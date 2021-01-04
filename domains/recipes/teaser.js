import { Box, Heading, Text } from "grommet";
import styled from "styled-components";
import Image from "next/image";
import Link from "next/link";

const Container = styled(Box)`
  img {
    border-radius: 8px;
    transition: transform 0.2s ease-in-out;
    opacity: 0.3;
  }
  &:hover {
    img {
      transform: scale(1.2);
      opacity: 0.5;
    }
  }
`;

const Teaser = (recipe) => {
  return (
    <Link href={`/recipes/${recipe.id}`}>
      <Container width="250px" style={{ position: "relative" }}>
        <Image layout="fill" src={recipe.images[0]} objectFit="cover" />
        <Box pad="medium" style={{ zIndex: 1 }}>
          <Heading level="3">{recipe.title}</Heading>
          <Text>{recipe.subtitle}</Text>
        </Box>
      </Container>
    </Link>
  );
};

export default Teaser;
