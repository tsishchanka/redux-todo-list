import styled from 'styled-components';

export const TodoInputWrapper = styled.div`
  display: flex;
  width: ${({ theme }) => theme.size.inputSize}px;
  margin: ${({ theme }) => `${theme.spaces[4]}px ${theme.spaces[5]}`};
  align-items: center;
  @media (max-width: 1070px) {
    width: 100%;
  }
`;

export const ErrorMessageField = styled.div`
  color: ${({ theme }) => theme.color.orange};
  padding: ${({ theme }) => `${theme.spaces[2]}px ${theme.spaces[4]}px`};
  margin-bottom: ${({ theme }) => theme.spaces[4]}px;
`;
