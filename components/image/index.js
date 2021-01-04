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

const Image = styled(NextImage)`
  background-image: linear-gradient(
    90deg,
    #f4f4f4 0px,
    rgba(229, 229, 229, 0.8) 40px,
    #f4f4f4 80px
  );

  animation: ${shine} 2s infinite ease-out;
`;

export default Image;
