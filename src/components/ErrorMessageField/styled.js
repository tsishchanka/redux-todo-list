import styled from 'styled-components';

export const InputError = styled.div`
  color: ${({ theme }) => theme.color.orange};
  padding: ${({ theme }) => `${theme.spaces[2]}px ${theme.spaces[4]}px`};
`;
