import styled from "styled-components";

export const MainStyled = styled.main`
  display: flex;
  gap: 5rem;
  grid-area: main;
  background-color: ${(props) => props.theme.colors.primaryBg};
  color: ${(props) => props.theme.colors.onPrimaryBg};
  ul li {
  }
`;
