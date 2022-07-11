import styled from 'styled-components';

export const InputWrapper = styled.div`
  display: flex;
  width: ${({ theme }) => theme.size.inputSize}px;
  margin: ${({ theme }) => `${theme.spaces[4]}px ${theme.spaces[5]}`};
  align-items: center;
  @media (max-width: 1070px) {
    max-width: ${({ theme }) => theme.size.inputSize}px;
  }
  @media (max-width: 580px) {
    width: ${({ theme }) => theme.size.wrapper}px;
  }
  @media (max-width: 460px) {
    max-width: ${({ theme }) => theme.size.smallWrapper}px;
  }
`;

export const ErrorMessageField = styled.div`
  color: ${({ theme }) => theme.color.orange};
  padding: ${({ theme }) => `${theme.spaces[2]}px ${theme.spaces[4]}px`};
  margin-bottom: ${({ theme }) => theme.spaces[4]}px;
`;
