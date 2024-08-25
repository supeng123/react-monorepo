import styled, { css } from 'styled-components';
import Todos from './todos/todos';

const StyledTodolist = styled.div`
  ${css`
 color: pink;
 text-3xl;
  `}
`;

export function Todolist() {
  return (
    <StyledTodolist>
      <h1>Welcome to Todolist!</h1>
      <Todos></Todos>
    </StyledTodolist>
  );
}

export default Todolist;
