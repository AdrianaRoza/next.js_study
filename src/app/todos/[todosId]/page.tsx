interface TodoParams{
  params:{
    todosId: number
  }
}


const TodosId = ({ params }: TodoParams) =>{
  return(
    <div>
      <p>Informacoes {params.todosId} </p>
    </div>
  )
}

export default TodosId
