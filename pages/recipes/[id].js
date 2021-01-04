import Head from "next/head";
import { Heading, Markdown, Text, Box } from "grommet";
import styled from "styled-components";
import Image from "next/image";
import { getRecipeIds, getRecipe } from "../../domains/recipes";
import Layout from "../../components/layout";
import useResponsive from "../../hooks/useResponsive";

const StyledMarkdown = styled(Box)`
  ul {
    list-style-type: disc;
    padding-inline-start: 40px;
  }
  ol {
    list-style-type: decimal;
    padding-inline-start: 40px;
  }
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    margin-top: ${(props) => props.theme.global.edgeSize.medium};
    margin-bottom: ${(props) => props.theme.global.edgeSize.small};
  }
`;

const Container = styled(Box)`
  position: relative;
`;

const Cover = ({ recipe }) => {
  return (
    <Container height="400px" justify="end">
      <Image src={recipe.images[0]} layout="fill" objectFit="cover" />
      <Box
        background={{ color: "light-1", opacity: true }}
        style={{ zIndex: 1 }}
        align="center"
      >
        <Box pad="large" width={{ max: "xlarge" }} fill="horizontal">
          <Heading level="1" size="large" color="black" fill>
            {recipe.title}
          </Heading>
          <Text size="large" color="dark-1">
            {recipe.subtitle}
          </Text>
        </Box>
      </Box>
    </Container>
  );
};

export default function Post({ recipe }) {
  const { isSmall } = useResponsive();

  return (
    <Layout>
      <Head>
        <title>{recipe.title}</title>
      </Head>
      <Cover recipe={recipe} />

      <Box
        direction={isSmall ? "column" : "row"}
        width={{ max: "xlarge" }}
        alignSelf="center"
      >
        <StyledMarkdown pad="large" flex={{ grow: 1 }} basis="1/3">
          <Heading level="1">Συστατικά</Heading>
          <Markdown>{recipe.ingredients}</Markdown>
        </StyledMarkdown>

        <StyledMarkdown pad="large" flex={{ grow: 2 }} basis="2/3">
          <Heading level="1" pad="large">
            Εκτέλεση
          </Heading>
          <Markdown>{recipe.process}</Markdown>
        </StyledMarkdown>
      </Box>
    </Layout>
  );
}

export async function getStaticPaths() {
  const ids = getRecipeIds();
  return {
    paths: ids.map((id) => ({ params: { id } })),
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const recipe = getRecipe(params.id);
  return {
    props: {
      recipe,
    },
  };
}
