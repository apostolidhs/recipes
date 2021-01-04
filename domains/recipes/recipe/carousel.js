import { Box, Carousel as GCarousel } from "grommet";
import useResponsive from "../../../hooks/useResponsive";
import Image from "../../../components/image";

const Carousel = ({ images }) => {
  const { isSmall } = useResponsive();

  return (
    <Box
      height="medium"
      width={{ max: "xlarge" }}
      overflow="hidden"
      fill="horizontal"
      alignSelf="center"
      margin={{ vertical: "large" }}
      round={!isSmall}
    >
      <GCarousel fill initialChild={1} play={5000}>
        {images.map((image) => (
          <Image src={image} key={image} layout="fill" objectFit="cover" />
        ))}
      </GCarousel>
    </Box>
  );
};

export default Carousel;
