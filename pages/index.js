import { Grid } from "grommet";
import Head from "next/head";
import useResponsive from "../hooks/useResponsive";
import Layout from "../components/layout";
import { getRecipes } from "../domains/recipes/api";
import Teaser from "../domains/recipes/teaser";

export default function Home({ recipes }) {
  const { isSmall } = useResponsive();

  return (
    <Layout>
      <Head>
        <title>Gefsi</title>
        <meta
          content="Μαγειρική και συνταγές από τον Γιάννη Αποστολίδη."
          name="description"
        ></meta>
      </Head>
      <Grid
        columns={isSmall ? "100%" : "medium"}
        gap="small"
        pad="large"
        width={{ max: "xlarge" }}
        fill="horizontal"
      >
        {recipes.map((recipe) => (
          <Teaser
            key={recipe.id}
            recipe={recipe}
            rows={["xxsmall"]}
            columns={["xsmall"]}
          />
        ))}
      </Grid>
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
