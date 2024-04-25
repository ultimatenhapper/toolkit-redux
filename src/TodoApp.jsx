import { useState } from "react";
import { useGetTodoQuery, useGetTodosQuery } from "./store/api";

function TodoApp() {
    const [todoId , setTodoId] = useState(1);
    const {data: todo, isLoading } = useGetTodoQuery(todoId);
//   const { data: todos = [], isLoading, } = useGetTodosQuery();
  return (
    <>
      <h1>Todos - RTK Query</h1>
      <hr />
      <h4>Is Loading: { isLoading ? 'TRUE' : 'FALSE' }</h4>

      <pre>{ JSON.stringify(todo) }</pre>
      {/* <ul>
        {todos.map( todo => (
            <li key={todo.id}>
                <strong>{ todo.completed ? 'DONE' : 'pending' } </strong>
                { todo.title }
            </li>
        ))}
      </ul> */}
      <button onClick={() => setTodoId(todoId - 1)}>Prev</button>
      <button onClick={() => setTodoId(todoId + 1)}>Next</button>
    </>
  );
}

export default TodoApp;
