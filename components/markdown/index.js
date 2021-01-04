import { Box, Markdown as GMarkdown } from "grommet";
import styled from "styled-components";

const StyledMarkdown = styled(Box)`
  ul {
    list-style-type: disc;
    padding-inline-start: 40px;
  }
  ol {
    list-style-type: decimal;
    padding-inline-start: 40px;
  }
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    margin-top: ${(props) => props.theme.global.edgeSize.medium};
    margin-bottom: ${(props) => props.theme.global.edgeSize.small};
  }
`;

const Markdown = ({ children, header, footer, ...rest }) => {
  return (
    <StyledMarkdown {...rest}>
      {header}
      <GMarkdown>{children}</GMarkdown>
      {footer}
    </StyledMarkdown>
  );
};

export default Markdown;
