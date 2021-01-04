import { Box, Heading, Text } from "grommet";
import Layout from "../components/layout";
import { getRecipes } from "../domains/recipes";
import Teaser from "../domains/recipes/teaser";

export default function Home({ recipes }) {
  return (
    <Layout>
      <Box pad="large" direction="row">
        {recipes.map((recipe) => (
          <Teaser key={recipe.id} {...recipe} />
        ))}
      </Box>
    </Layout>
  );
}

export async function getStaticProps() {
  const recipes = getRecipes();
  return {
    props: {
      recipes,
    },
  };
}
