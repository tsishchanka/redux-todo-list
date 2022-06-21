import styled from 'styled-components';

export const TodoItemWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  border: ${({ theme }) => theme.spaces[1]}px solid
    ${({ theme }) => theme.color.orange};
  border-radius: ${({ theme }) => theme.spaces[2]}px;
  padding: ${({ theme }) => `${theme.spaces[2]}px ${theme.spaces[4]}px`};
  width: ${({ theme }) => theme.size.xs}px;
  margin: ${({ theme }) => `${theme.spaces[4]}px ${theme.spaces[5]}`};
  @media (max-width: 580px) {
    max-width: ${({ theme }) => theme.size.wrapper}px;
    margin: ${({ theme }) => `${theme.spaces[4]}px ${theme.spaces[3]}px`};
  }
  @media (max-width: 460px) {
    max-width: ${({ theme }) => theme.size.smallWrapper}px;
    margin: ${({ theme }) => `${theme.spaces[3]}px ${theme.spaces[0]}px`};
  }
`;

export const TodoTextWrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const TodoText = styled.p`
  font-size: ${({ theme }) => theme.fontSize.small};
  word-break: break-all;
  margin: ${({ theme }) => theme.spaces[0]};
`;

export const IconButtonsWrapper = styled.div``;
