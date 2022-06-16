import styled from 'styled-components';

export const TodoItemWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  border: 1px solid #b1eaff;
  border-radius: 15px;
  padding: 0 20px;
  width: 400px;
  margin: 15px 20px 0;
  @media (max-width: 570px) {
    margin: 5px 0;
    width: 300px;
  }
`;

export const TodoTextWrapper = styled.div`
  align-items: center;
  margin: 5px 0;
`;

export const TodoText = styled.p`
  font-size: 20px;
  word-break: break-all;
`;

export const IconButtonsWrapper = styled.div`
  margin: auto 0;
`;
