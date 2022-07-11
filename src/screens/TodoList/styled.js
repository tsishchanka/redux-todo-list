import styled from 'styled-components';

export const Container = styled.div`
  padding: ${({ theme }) => `${theme.spaces[0]}px ${theme.spaces[5]}`};
  margin: ${({ theme }) => `${theme.spaces[0]}px ${theme.spaces[6]}px`};
  background-color: ${({ theme }) => theme.color.lightYellow};
`;

export const TodoWrapper = styled.div`
  display: flex;
  margin: ${({ theme }) => `${theme.spaces[0]}px ${theme.spaces[6]}px`};
  justify-content: space-around;
  overflow: hidden;

  @media (max-width: 1070px) {
    flex-direction: column;
  }
`;

export const Title = styled.h1`
  color: ${({ theme }) => theme.color.primary};
  text-align: center;
`;

export const InputWrapper = styled.div`
  display: flex;
  @media (max-width: 1070px) {
    width: 100%;
  }
`;

export const ButtonsWrapper = styled.div`
  padding: ${({ theme }) => theme.spaces[3]}px;
`;

export const ErrorMessageField = styled.div`
  color: ${({ theme }) => theme.color.orange};
  padding: ${({ theme }) => `${theme.spaces[2]}px ${theme.spaces[4]}px`};
  margin-bottom: ${({ theme }) => theme.spaces[4]}px; ;
`;

export const ListWrapper = styled.div`
  height: ${({ theme }) => theme.size.medium}px;
  width: ${({ theme }) => theme.size.xs}px;
  overflow-y: ${({ theme }) => theme.spaces[5]};
  overflow-x: hidden;
`;

export const CreateTodoWrapper = styled.div`
  @media (max-width: 1070px) {
    margin: ${({ theme }) => `${theme.spaces[0]}px ${theme.spaces[5]}`};
  }
`;
