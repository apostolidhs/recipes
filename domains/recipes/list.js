import { Grid, Box } from "grommet";
import useResponsive from "../../hooks/useResponsive";
import Teaser from "./teaser";

const columns = {
  small: ["auto"],
  medium: ["1/2", "1/2"],
  large: ["1/3", "1/3", "1/3"],
};

const List = ({ recipes }) => {
  const { size } = useResponsive();

  return (
    <Box
      width={{ max: "xxlarge" }}
      fill="horizontal"
      pad="large"
      alignSelf="center"
    >
      <Grid columns={columns[size]} gap="small">
        {recipes.map((recipe) => (
          <Teaser key={recipe.id} recipe={recipe} />
        ))}
      </Grid>
    </Box>
  );
};

export default List;
