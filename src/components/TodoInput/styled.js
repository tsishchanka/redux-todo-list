import styled from 'styled-components';

import { color } from '@/theme';

export const TodoInputWrapper = styled.div`
  display: flex;
  width: 500px;
  margin: 15px auto 0;
  align-items: center;
  @media (max-width: 1070px) {
    width: 100%;
  }
`;

export const ErrorMessageField = styled.div`
  color: ${color.orange};
  padding: 5px 15px;
  margin-bottom: 15px;
`;
