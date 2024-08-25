import { useState } from "react";
import { TODO, Todo } from "./todo/todo";

const Todos: React.FC<{}> = ()=>{
  const mockData = [
    {
      id: 12,
      name: "logan",
      details: "prepare the breakfast at 7am"
    },
    {
      id: 190,
      name: "peng",
      details: "start the car and drive to automanue"
    }
  ]
  const [todos, setTodo] = useState<TODO[]>(mockData);
  const [newTodo, setNewTodo] = useState<string>('');

  const onInputChange = (e: React.FormEvent<HTMLInputElement>) => {
    setNewTodo(e.currentTarget.value)
    e.preventDefault()
  }

  const onButtonClick = (e: React.FormEvent<HTMLButtonElement>) => {
    const todo = {
      id: Math.random() * Math.random()*100,
      name: "new",
      details: newTodo
    };
    setTodo((pre) => [...pre, todo]);
    setNewTodo('');
  }

  const todosTemplate = todos.map(todo => <Todo id={todo.id} name={todo.name} details={todo.details}></Todo>);

  return (
  <ul>
    {todosTemplate}
    <input value={newTodo} onChange={onInputChange}></input>
    <button onClick={onButtonClick}>add new infomation</button>
  </ul>
  );
}


export default Todos;
