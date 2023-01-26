import styled from "styled-components";

export const MainStyled = styled.main`
  grid-area: main;
  background-color: ${(props) => props.theme.colors.primaryBg};
  color: ${(props) => props.theme.colors.onPrimaryBg};
  div {
    display: flex;
    justify-content: space-around;
  }
  ul li {
  }
`;
