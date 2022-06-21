import styled from 'styled-components';

export const AppTitle = styled.h1`
  margin: ${({ theme }) => theme.spaces[0]};
  padding-top: ${({ theme }) => theme.spaces[4]}px;
  color: ${({ theme }) => theme.color.lightYellow};
`;

export const HeaderWrapper = styled.div`
  height: ${({ theme }) => theme.size.xs / 8}px;
  background-color: ${({ theme }) => theme.color.primary};
  align-items: center;
  text-align: center;
`;
