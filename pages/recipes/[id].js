import Head from "next/head";
import useResponsive from "../../hooks/useResponsive";
import {
  getRecipeIds,
  getRecipe,
  getRelatedRecipes,
} from "../../domains/recipes/api";
import {
  Content,
  Cover,
  Carousel,
  Info,
  More,
} from "../../domains/recipes/recipe";
import Layout from "../../components/layout";

export default function Post({ recipe, relatedRecipes }) {
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
      <More recipes={relatedRecipes} />
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

export async function getStaticProps({ params: { id } }) {
  const recipe = getRecipe(id);
  const relatedRecipes = getRelatedRecipes(id);

  return {
    props: {
      recipe,
      relatedRecipes,
    },
  };
}
