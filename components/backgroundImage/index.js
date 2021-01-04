import { forwardRef } from "react";
import styled from "styled-components";
import { Box } from "grommet";
import Image from "../image";

const Container = styled(Box)`
  position: relative;
`;

const Content = styled(Box)`
  z-index: 1;
`;

const BackgroundImage = forwardRef(
  ({ src, contentProps, children, ...rest }, ref) => {
    return (
      <Container ref={ref} {...rest}>
        <Image src={src} layout="fill" objectFit="cover" />
        <Content {...contentProps}>{children}</Content>
      </Container>
    );
  }
);

export default BackgroundImage;
