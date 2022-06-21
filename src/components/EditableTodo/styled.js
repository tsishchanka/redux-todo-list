import styled from 'styled-components';

export const TodoItemWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  border: ${({ theme }) => theme.spaces[1]}px solid
    ${({ theme }) => theme.color.orange};
  border-radius: ${({ theme }) => theme.spaces[2]}px;
  padding: ${({ theme }) => `${theme.spaces[2]}px ${theme.spaces[4]}px`};
  margin: ${({ theme }) => `${theme.spaces[4]}px ${theme.spaces[5]}`};
  @media (max-width: 580px) {
    max-width: ${({ theme }) => theme.size.wrapper}px;
    padding: ${({ theme }) => `${theme.spaces[2]}px ${theme.spaces[2]}px`};
  }
  @media (max-width: 460px) {
    max-width: ${({ theme }) => theme.size.smallWrapper}px;
  }
`;
