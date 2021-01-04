import fs from "fs";
import path from "path";
import matter from "gray-matter";

const recipesDir = path.join(process.cwd(), "public/posts/recipes");

export const getRecipeIds = () => {
  return fs.readdirSync(recipesDir);
};

const getRecipeImages = (id) => {
  const imagesDir = path.join(recipesDir, `${id}/img`);
  const images = fs.readdirSync(imagesDir);
  return images.map((image) => `/posts/recipes/${id}/img/${image}`);
};

export const getRecipe = (id) => {
  const filename = path.join(recipesDir, `${id}/index.md`);
  const fileContent = fs.readFileSync(filename, "utf8");

  const parsed = matter(fileContent);
  const images = getRecipeImages(id);

  const { data, content } = parsed;
  const [ingredients, process] = content.split("<!-- process -->");
  return { id, ingredients, process, images, ...data };
};

export const getRecipes = () => {
  const recipeIds = getRecipeIds();
  return recipeIds.map(getRecipe);
};
