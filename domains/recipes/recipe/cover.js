import { Heading, Text, Box } from "grommet";
import useResponsive from "../../../hooks/useResponsive";
import BackgroundImage from "../../../components/backgroundImage";
import Info from "./info";

const contentProps = {
  align: "center",
  background: { color: "light-1", opacity: true },
};

const Cover = ({ recipe }) => {
  const { images, title, subtitle } = recipe;
  const { isSmall } = useResponsive();

  return (
    <BackgroundImage
      src={images[0]}
      height={isSmall ? "250px" : "400px"}
      justify="end"
      contentProps={contentProps}
    >
      <Box
        pad="large"
        justify="between"
        width={{ max: "xlarge" }}
        fill="horizontal"
        direction="row"
      >
        <Box>
          <Heading level="1" size="large" color="black" fill>
            {title}
          </Heading>
          <Text size="xlarge" color="black">
            {subtitle}
          </Text>
        </Box>
        {!isSmall && <Info recipe={recipe} alignSelf="end" />}
      </Box>
    </BackgroundImage>
  );
};

export default Cover;
