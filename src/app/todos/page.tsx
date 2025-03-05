import { FC } from "react";

type Todo = {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
};


const Todos: FC = async () => {

  const res = await fetch("https://jsonplaceholder.typicode.com/todos");
  const todos: Todo[] = await res.json();

  return(
    <>
      <h1 className="text-4xl" >Tarefas para Fazer:</h1>
      <ul className="list-none w-[500px] mx-auto m-4">
        {todos.map((todo) => (
          <li key={todo.id} className="mb-4 pb-4 border-b border-gray-300">
            {todo.title}
          </li>
        ))}
      </ul>
    </>
  )
}

export default Todos
