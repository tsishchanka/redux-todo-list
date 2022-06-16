import styled from 'styled-components';

export const Container = styled.div`
  max-width: 1000px;
  padding: 0 15px;
  margin: 0 auto;
`;

export const TodoWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  @media (max-width: 1070px) {
    flex-direction: column;
  }
`;

export const Title = styled.h1`
  color: #16527a;
  text-align: center;
`;

export const TodoInputWrapper = styled.div`
  display: flex;
  width: 500px;
  @media (max-width: 1070px) {
    width: 100%;
  }
`;

export const ButtonsWrapper = styled.div`
  padding: 10px;
`;

export const ErrorMessageField = styled.div`
  color: green;
  padding: 5px 15px;
  margin-bottom: 15px;
`;

export const ListWrapper = styled.div`
  padding: 5px 15px;
  border-left: 1px solid #16527a;
  min-height: 300px;
  padding: 0 20px;
  width: 400px;
  @media (max-width: 1070px) {
    margin: 0 auto;
    border-left: none;
  }
  @media (max-width: 570px) {
    width: 300px;
  }
`;

export const CreateTodoWrapper = styled.div`
  margin: 0 25px;
  @media (max-width: 1070px) {
    margin: 0 auto;
  }
`;
