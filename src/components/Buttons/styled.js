import styled from 'styled-components';

export const ButtonsWrapper = styled.div`
  margin: ${({ theme }) => theme.spaces[1]}px;
  @media (max-width: 580px) {
    margin: ${({ theme }) => theme.spaces[0]}px;
  }
`;
