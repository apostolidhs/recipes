import Head from "next/head";
import useResponsive from "../../hooks/useResponsive";
import { getRecipeIds, getRecipe } from "../../domains/recipes/api";
import { Content, Cover, Carousel, Info } from "../../domains/recipes/recipe";
import Layout from "../../components/layout";

export default function Post({ recipe }) {
  const { isSmall } = useResponsive();

  return (
    <Layout>
      <Head>
        <title>{recipe.title} | Gefsi</title>
        <meta
          content={`${recipe.subtitle} από το Gefsi`}
          name="description"
        ></meta>
      </Head>
      <Cover recipe={recipe} />
      {isSmall && (
        <Info
          recipe={recipe}
          width={{ max: "xlarge" }}
          alignSelf="center"
          margin={{ top: "large" }}
        />
      )}
      <Content recipe={recipe} />
      <Carousel images={recipe.images} />
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
