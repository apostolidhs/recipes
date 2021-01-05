import { useState } from "react";
import NextImage from "next/image";
import styled, { keyframes } from "styled-components";

const shine = keyframes`
  0% {
    background-position: -200px;
  }
  
  40%, 100% {
    background-position: 200px;
  }
`;

const StyledImage = styled(NextImage)`
  background-image: linear-gradient(
    90deg,
    #f2f2f2 0px,
    rgba(229, 229, 229, 0.8) 40px,
    #f2f2f2 80px
  );

  animation: ${shine} 2s infinite ease-out;
`;

const Image = (props) => {
  const [loaded, setLoaded] = useState(false);
  return (
    <StyledImage
      onLoad={() => setLoaded(true)}
      data-loaded={loaded}
      {...props}
    />
  );
};

export default Image;
