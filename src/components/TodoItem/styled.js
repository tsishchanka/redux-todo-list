import styled from 'styled-components';

import { color, fontSize } from '@/theme';

export const TodoItemWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  border: 1px solid ${color.orange};
  border-radius: 5px;
  padding: 5px 20px;
  width: 457px;
  margin: 18px auto;
  @media (max-width: 580px) {
    max-width: 350px;
    margin: 18px 10px;
  }
  @media (max-width: 460px) {
    max-width: 250px;
    margin: 10px 0;
  }
`;

export const TodoTextWrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const TodoText = styled.p`
  font-size: ${fontSize.small};
  word-break: break-all;
  margin: 0;
`;

export const IconButtonsWrapper = styled.div``;
