import { Grommet } from "grommet";
import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyle = createGlobalStyle`
  ${reset}
`;

const theme = {
  global: {
    font: {
      // family: "Roboto Condensed",
      family: "'Noto Sans', sans-serif",
    },
  },
  heading: {
    weight: "normal",
  },
  carousel: {
    animation: {
      duration: 1000,
    },
    icons: {
      color: "black",
    },
    disabled: {
      icons: {
        color: "light-1",
      },
    },
  },
};

export default function App({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <Grommet theme={theme}>
        <Component {...pageProps} />
      </Grommet>
    </>
  );
}
