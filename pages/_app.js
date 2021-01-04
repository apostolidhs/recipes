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
