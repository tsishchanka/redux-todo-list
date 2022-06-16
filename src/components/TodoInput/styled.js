import styled from 'styled-components';

export const TodoInputWrapper = styled.div`
  display: flex;
  width: 500px;
  @media (max-width: 1070px) {
    width: 100%;
  }
`;

export const ErrorMessageField = styled.div`
  color: green;
  padding: 5px 15px;
  margin-bottom: 15px;
`;
