interface ReviewsParams{
  params:{
    todosId: number
    reviewsId: number
  }
}


const ReviewsId = ({ params }: ReviewsParams) =>{
  return(
    <div>
      <p>Todos {params.todosId}</p>
      <p>Avaliações {params.reviewsId} </p>
    </div>
  )
}

export default ReviewsId
