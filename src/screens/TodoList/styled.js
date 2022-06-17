import styled from 'styled-components';

import { color } from '@/theme';

export const Container = styled.div`
  padding: 0 15px;
  margin: 0 auto;
  background-color: ${color.lightYellow};
`;

export const TodoWrapper = styled.div`
  display: flex;
  margin: 0 auto;
  justify-content: space-around;
  overflow: hidden;

  @media (max-width: 1070px) {
    flex-direction: column;
  }
`;

export const Title = styled.h1`
  color: ${color.primary};
  text-align: center;
`;

export const TodoInputWrapper = styled.div`
  display: flex;
  @media (max-width: 1070px) {
    width: 100%;
  }
`;

export const ButtonsWrapper = styled.div`
  padding: 10px;
`;

export const ErrorMessageField = styled.div`
  color: ${color.orange};
  padding: 5px 15px;
  margin-bottom: 15px;
`;

export const ListWrapper = styled.div`
  height: 810px;
  margin: 20px auto 25px;
  width: 550px;
  overflow-y: auto;
  overflow-x: hidden;
  @media (max-width: 1070px) {
    margin: 0 auto;
    border-left: none;
  }
`;

export const CreateTodoWrapper = styled.div`
  margin: 0 auto;
  @media (max-width: 1070px) {
    margin: 0 auto;
  }
`;
