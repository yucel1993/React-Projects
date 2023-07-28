
import styled from "styled-components";
import Flex from "../../styles/Flex";

export const CardContainer = styled(Flex)`
  flex-direction: column;
  height: 20rem;
  width: 20rem;
  padding: 0.5rem;
  border-radius: 1rem;
  margin: 0.7rem;
  box-shadow: 3px 3px 10px 1px rgba(0, 0, 0, 0.3);
  background-color: ${({ theme }) => theme.colors.navbarBgColor};
`;

export const CardHeader = styled.h2`
  font-size: 1.2rem;
  text-align: center;
  overflow: hidden;
  height: 5rem;
`;

export const CardMedia = styled.img`
  min-height: 10rem;
  max-height: 10rem;
`;

export const CardButton = styled.button`
  font-weight: bold;
  padding: 0.7rem;
  outline: none;
  border: none;
  margin: 0.5rem;
  border-radius: 3px;
  cursor: pointer;
  :hover {
    opacity: 0.6;
  }
  background-color: ${({ theme }) => theme.colors.mainColor};
  color: ${({ theme }) => theme.colors.linkHoverColor};
`;
