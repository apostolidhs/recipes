import { Box } from "grommet";
import Head from "next/head";
import Layout from "../components/layout";
import { getRecipes } from "../domains/recipes";
import Teaser from "../domains/recipes/teaser";

export default function Home({ recipes }) {
  return (
    <Layout>
      <Head>
        <title>Gefsi</title>
        <meta
          content="Μαγειρική και συνταγές από τον Γιάννη Αποστολίδη."
          name="description"
        ></meta>
      </Head>
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
