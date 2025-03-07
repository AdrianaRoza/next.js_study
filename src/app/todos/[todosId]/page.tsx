interface Todo {
  id: number
  title: string
  completed: boolean
}

async function getTodo(todosId: string): Promise<Todo | null> {
  const response = await fetch
    (`https://jsonplaceholder.typicode.com/todos/${todosId}`)

  if (!response.ok) {
    return null
  }

  return response.json()
}

export default async function 
  TodosId({ params }: { params: { todosId: string } }) {
  
    const todo: Todo | null = await getTodo(params.todosId)

  if (!todo) {
    return <p> Tarefa não encontrada! Escolha uma tarefa válida.</p>
  }

  return (
    <div>
      <p>Informações do TODO:</p>
      <p><strong>ID:</strong> {todo.id}</p>
      <p><strong>Título:</strong> {todo.title}</p>
      <p><strong>Concluído:</strong> {todo.completed ? "Sim" : "Não"}</p>
    </div>
  )
}
