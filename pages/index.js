import Head from "next/head";
import Layout from "../components/layout";
import { getRecipes } from "../domains/recipes/api";
import List from "../domains/recipes/list";

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
      <List recipes={recipes} />
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
