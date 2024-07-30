function reviewId({params,}:
    {
            params :{
            reviewId :string;
            productId :string;
        }

    }
)
{
    return(
        <div>
            <h1>{params.reviewId} review details of products {params.productId}</h1>
            <h1>hello javascript</h1>
        </div>
    )
}